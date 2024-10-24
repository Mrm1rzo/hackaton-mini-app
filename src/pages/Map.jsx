import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const Ticket = () => {
  return (
    <section className="align-elements py-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48628.99900650697!2d71.7492619345797!3d40.379767489787355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2sFergana%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1729753848096!5m2!1sen!2s"
        width="600"
        height="450"
       className="w-full "
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <button className="btn btn-primary w-full my-5 rounded-md">My Location</button>
    </section>
  );
};

export default Ticket;
