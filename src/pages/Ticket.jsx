import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const Ticket = () => {
  return (
    <div className=" p-5 m-4 md:m-6 pl-5 ">
      <div className="card bg-base-300 rounded-2xl">
        <div className="card-body p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9YXWw0YGcM6yUWiVJpNpU_7U9QPbPdE4Hw&s"
                alt="Avatar"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium">Jane Doe</h3>
              <p className="text-sm text-gray-500">10:30 AM, Monday</p>
            </div>
 <span className="text-2xl">
<GrFormNextLink />
              </span>
            <div className="justify-end flex ">
             
               <div>
              <h3 className="text-sm font-medium flex">
                <span className="text-xl">
              <CiLocationOn />
                </span >Jane Doe
                </h3>
              <p className="text-sm text-gray-500">10:30 AM, Monday</p>
            </div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <div>
              <h3 className="text-lg font-medium ">
                Ticket for the Bus to New York
              </h3>
              <p className="text-sm text-gray-600">Your ticket details go here.</p>
            </div>
            <div className="mt-2 ml-5">
              <button className="btn btn-secondary">
                  Book now 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
