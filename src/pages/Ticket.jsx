import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const Ticket = () => {
  return (
    <section className="align-elements py-5">
      <div className="card rounded-2xl bg-base-300">
        <div className="card-body p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9YXWw0YGcM6yUWiVJpNpU_7U9QPbPdE4Hw&s"
                alt="Avatar"
              />

              <div>
                <h3 className="text-sm font-medium">Jane Doe</h3>
                <p className="text-sm text-gray-500">10:30 AM, Monday</p>
              </div>
              <span className="text-2xl">
                <GrFormNextLink />
              </span>
              <div className="flex justify-end">
                <div>
                  <h3 className="flex text-sm font-medium">
                    <span className="text-xl">
                      <CiLocationOn />
                    </span>
                    Jane Doe
                  </h3>
                  <p className="text-sm text-gray-500">10:30 AM, Monday</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <div>
                <h3 className="text-lg font-medium">
                  Ticket for the Bus to New York
                </h3>
                <p className="text-sm text-gray-600">
                  Your ticket details go here.
                </p>
              </div>
              <div className="ml-5 mt-2">
                <button className="btn btn-secondary">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
