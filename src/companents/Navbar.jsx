
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-base-300 p-0">
      <div className=" navbar">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Bus
          </NavLink>
        </div>
        <div className="flex-none">
          <button className="btn btn-circle btn-ghost">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                //   onClick={toggleTheme}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <FaSun className="swap-off fill-current text-xl md:text-2xl" />

              {/* moon icon */}
              <FaMoon className="swap-on fill-current text-xl md:text-2xl" />
            </label>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
