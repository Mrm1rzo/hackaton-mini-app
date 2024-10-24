import { GrSync, GrSearch } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <div className="flex justify-between">
      <button className="btn btn-primary w-[45%]">
        <GrSync /> Swap
      </button>
      <NavLink to="/bus" className="btn btn-primary w-[45%]">
        <GrSearch />
        Search
      </NavLink>
    </div>
  );
};

export default Button;
