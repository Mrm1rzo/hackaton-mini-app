import { GrFormEdit, GrLocation, GrUser } from "react-icons/gr";

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
            <GrUser /> Humoyun Mirzo
          </h2>
          <p className="flex items-center gap-2">
            <GrLocation />
            Fergana Kirgili
          </p>
          <p className="flex items-center gap-2">
            <GrLocation />
            Fergana Kirgili
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <GrFormEdit className="text-lg" />
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
