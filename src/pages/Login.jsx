import React from "react";
import { Input } from "../components";
import { Form, NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="align-elements py-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <Form method="post" className="card-body">
          <h1 className="my-5 text-center text-xl">Login</h1>
          <Input type={"text"} placeholder={"mirzo@gmail.com"} name={"Email"} />
          <Input type={"password"} placeholder={"*******"} name={"Password"} />
          <div className="flex flex-wrap justify-between">
            <NavLink to="/register" className="link-primary">
              You don't have account yet?
            </NavLink>
            <a className="link"> Forget password?</a>
          </div>
          <button type="submit" className="btn btn-primary my-2 mt-4">
            Login
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

export default Login;
