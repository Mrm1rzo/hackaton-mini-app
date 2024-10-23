// import react-router-dom
import { NavLink } from "react-router-dom";

// import react-icons
import { GrCatalog, GrHomeRounded, GrUser } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className=" footer footer-center flex justify-between bg-base-300 p-4">
      <div className="align-elements footer footer-center flex justify-between bg-base-300 p-4">
        <nav className="flex flex-col gap-0">
          <NavLink to="/" className="btn btn-ghost text-sm md:text-xl">
            <GrHomeRounded />
            Home
          </NavLink>
        </nav>
        <nav className="flex flex-col gap-0">
          <NavLink to="/ticket" className="btn btn-ghost text-sm md:text-xl">
            <GrCatalog />
            My ticket
          </NavLink>
        </nav>
        <nav className="flex flex-col gap-0">
          <NavLink to="/profile" className="btn btn-ghost text-sm md:text-xl">
            <GrUser />
            Account
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
