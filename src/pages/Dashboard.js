import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../components/Navbar";

import useUser from "../data/use-user";

export default function Dashboard() {
  const {
    user: {
      data: {
        vehicle: { model, make, colour, reg },
        policy: {
          policy_reference,
          cover,
          address: { line_1, line_2, postcode },
        },
      },
    },
    loading,
    loggedOut,
  } = useUser();
  let history = useHistory();

  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      history.push("/");
    }
  }, [loggedOut, history]);
  if (loggedOut) return "redirecting...";

  return (
    <div>
      <Nav title="ByBits" />
      <main className="hero is-white is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-5-desktop is-5-widescreen">
                <p className="box is-size-1">My Policy</p>
                <div className="box">
                  {loading ? (
                    "loading..."
                  ) : (
                    <>
                      <p className="block is-size-4">
                        Policy reference: {policy_reference}
                      </p>
                      <p className="block is-size-4">Cover Type: {cover} </p>

                      <p className="block is-size-4">
                        Car: {make} {model} {colour} - {reg}
                      </p>

                      <p className="block is-size-4">
                        Address: {line_1}, {line_2}, {postcode}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
