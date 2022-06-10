import { Link, Outlet } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to={"/"}>
          <div className="logo">-CC-</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
