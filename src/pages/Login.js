import { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import useUser from "../data/use-user";
import { login } from "../libs/auth";
import { useHistory } from "react-router-dom";
import { USER_TOKEN } from "../config/constants";

export default function Login() {
  const { user, mutate, loggedOut } = useUser();
  let history = useHistory();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user && !loggedOut) {
      history.push("/dashboard");
    }
  }, [user, loggedOut, history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = await login(email, password);
    USER_TOKEN(userData.access_token);
    mutate();
  };

  return (
    <div className="homepage">
      <Nav title="ByBits" />
      <section className="hero is-primary is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-5-desktop is-5-widescreen">
                <form className="box" onSubmit={(e) => onSubmit(e)}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="email"
                        placeholder="e.g. jane@doe.com"
                        className="input"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <button className="button is-success">
                      Login To Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
