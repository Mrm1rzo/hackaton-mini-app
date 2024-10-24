import { FaLocationDot, FaMagnifyingGlassLocation } from "react-icons/fa6";
const Input = ({ type, name, placeholder }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {placeholder == "From" ? (
        <FaLocationDot />
      ) : (
        <FaMagnifyingGlassLocation />
      )}
      <input type={type} className="grow" placeholder={placeholder} />
    </label>
  );
};

export default Input;
