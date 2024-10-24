import {
  FaLocationDot,
  FaMagnifyingGlassLocation,
  FaUser,
  FaKey,
  FaEye,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Input = ({ type, name, placeholder }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {name == "Name" && <FaUser />}
      {name == "Email" && <MdEmail />}
      {name == "Password" && <FaKey />}
      {name == "CPassword" && <FaKey />}
      {name == "toLocation" && <FaMagnifyingGlassLocation />}
      {name == "fromLocation" && <FaLocationDot />}
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      {name == "Password" && (
        <button type="button">
          <FaEye />
        </button>
      )}
    </label>
  );
};

export default Input;
