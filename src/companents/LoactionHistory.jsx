import { FaAnglesRight } from "react-icons/fa6";

const LoactionHistory = () => {
  return (
    <div className="card my-2 bg-base-300">
      <div className="card-body flex flex-row flex-wrap items-center justify-between px-4 py-2">
        <>
          <h2 className="card-title">Loction!</h2>
          <p className="text-end">Location date</p>
        </>
        <div className="card-actions justify-end">
          <FaAnglesRight />
        </div>
      </div>
    </div>
  );
};

export default LoactionHistory;
