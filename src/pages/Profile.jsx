import { GrFormEdit, GrLocation, GrUser } from "react-icons/gr";
import LocationComponent from "../components/Location";
import { FaPhoneAlt, FaUser, FaUserEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Profile = () => {
  return (
    <section className="align-elements flex flex-col gap-5 py-5">
      <div className="avatar flex justify-center">
        <div className="mask mask-squircle mx-auto w-40 shadow-xl">
          <img src="./public/my-image.jpg" className="mx-auto" />
        </div>
      </div>
      <div className="card card-compact bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> Humoyun Mirzo
          </h2>
          <p className="flex items-center gap-2">
            <GrLocation />
            <LocationComponent />
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt />
            +998 91 777 27 07{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <FaUserEdit className="text-lg" />
              Edit
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
