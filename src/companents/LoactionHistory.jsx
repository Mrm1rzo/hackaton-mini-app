import { GrNext } from "react-icons/gr";

const LoactionHistory = () => {
  return (
    <div className="card bg-base-300 my-2">
      <div className="card-body flex flex-wrap flex-row items-center justify-between px-4 py-2">
        <>
          <h2 className="card-title">Loction!</h2>
          <p className="text-end">Location date</p>
        </>
        <div className="card-actions justify-end">
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default LoactionHistory;
