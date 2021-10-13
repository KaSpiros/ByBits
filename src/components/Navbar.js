import useUser from "../data/use-user";
import { logout } from "../libs/auth";

export default function Nav({ title }) {
  const { user, loading, loggedOut, mutate } = useUser();

  let profile = null;
  if (loading) {
    profile = "loading...";
  }
  if (user) {
    profile = (
      <button
        className="button is-warning"
        onClick={() => {
          logout();
          mutate();
        }}
      >
        Logout
      </button>
    );
  }
  if (loggedOut) {
    profile = "";
  }

  return (
    <>
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <h3 className="navbar-item is-size-4">{title}</h3>
        </div>
        <div className="navbar-end">
          <h3 className="navbar-item ">{profile}</h3>
        </div>
      </nav>
    </>
  );
}
