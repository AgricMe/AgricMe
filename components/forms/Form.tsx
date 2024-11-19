import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo/agricme-logo.png";
import { Interests, RoleNames } from "@/schema/enums/user.enum";
import TextField from "./textField";

type formVariant = {
  page: string;
};
export default function Form({ page }: formVariant) {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [bio, setBio] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [job, setJob] = useState<string>();
  const [interest, setInterest] = useState<Interests[]>();
  const [role, setRole] = useState<RoleNames[]>();

  return (
    <>
      <div className="form-container">
        <div className="logo">
          {/* <Link href={'/'}><img src={'/logo/agricme-logo.png'} width={200} alt="" /></Link> */}
        </div>
        <div className="form-background">
          <h3 className="text-[white] flex justify-center font-bold text-xl lg::text-3xl">
            {page}
          </h3>
          <div className="oauth flex flex-col md:flex-row">
            <button className="auth text-sm md:text-base">
              <span>
                <FcGoogle />
              </span>{" "}
              Continue with Google
            </button>
            <button className="auth text-sm md:text-base">
              <span>
                <FaFacebook />
              </span>{" "}
              Continue with facebook
            </button>
          </div>
          <form className="form" action="">
            {page == "Create Account" && (
              <TextField
                label="UserName"
                InputProps={{
                  placeholder: "Enter your username",
                  type: "text",
                  required: true,
                  value: userName,
                  onChange(e) {
                    setUserName(e.target.value);
                  },
                }}
                className="w-full"
                LabelProps={{
                  className: "text-[.8rem] text-[#fff] font-[500]",
                }}
              />
              <TextField
                label="First Name"
                InputProps={{
                  placeholder: "Enter your username",
                  type: "text",
                  required: true,
                  value: userName,
                  onChange(e) {
                    setUserName(e.target.value);
                  },
                }}
                className="w-full"
                LabelProps={{
                  className: "text-[.8rem] text-[#fff] font-[500]",
                }}
              />
              <TextField
                label="UserName"
                InputProps={{
                  placeholder: "Enter your username",
                  type: "text",
                  required: true,
                  value: userName,
                  onChange(e) {
                    setUserName(e.target.value);
                  },
                }}
                className="w-full"
                LabelProps={{
                  className: "text-[.8rem] text-[#fff] font-[500]",
                }}
              />
            )}
            <TextField
              label="Email"
              InputProps={{
                placeholder: "Enter your Email Address",
                type: "email",
                required: true,
                value: email,
                onChange(e) {
                  setEmail(e.target.value);
                },
              }}
              className="w-full"
              LabelProps={{ className: "text-[.8rem] text-[#fff] font-[500]" }}
            />
            <TextField
              label="Password"
              InputProps={{
                placeholder: "Enter your Password",
                type: "password",
                required: true,
                value: password,
                onChange(e) {
                  setPassword(e.target.value);
                },
              }}
              className="w-full"
              LabelProps={{ className: "text-[.8rem] text-[#fff] font-[500]" }}
            />
            {/* <label className='label grid' htmlFor="password">Password
                        <input className='w-full bg-white' type="password" name="password" id="password" />
                    </label> */}
            <label className="remember" htmlFor="remember">
              <input
                className="text-white bg-white"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            <button className="submit">Continue</button>
          </form>
          {page == "Log In" ? (
            <span className="label account text-sm flex flex-col md:flex-row">
              Don&#39;t have an account?{" "}
              <Link href={"/signup"}>Create Account</Link>
            </span>
          ) : (
            <span className="label account text-sm">
              Already have an account? <Link href={"/login"}>Log In</Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
