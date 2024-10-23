import { GrLocation, GrLocationPin } from "react-icons/gr";

const Input = ({ type, name, placeholder }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {placeholder == "From" ? <GrLocation /> : <GrLocationPin />}
      <input type={type} className="grow" placeholder={placeholder} />
    </label>
  );
};

export default Input;
