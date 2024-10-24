import React from "react";
import { Input } from "../components";
import { Form, NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="align-elements py-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <Form method="post" className="card-body">
          <h1 className="my-5 text-center text-xl">Register</h1>
          <Input type={"text"} placeholder={"Mirzo"} name={"Name"} />
          <Input type={"text"} placeholder={"mirzo@gmail.com"} name={"Email"} />
          <Input type={"password"} placeholder={"*******"} name={"Password"} />
          <Input type={"password"} placeholder={"*******"} name={"CPassword"} />
          
            <NavLink to="/login" className="link-primary">You already have account yet?</NavLink>
            
         
          <button type="submit" className="btn btn-primary my-2 mt-4">
            Register
          </button>
          <button type="button" className="btn btn-secondary my-2">
            <FaGoogle />
            Google
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
