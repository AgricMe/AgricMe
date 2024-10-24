import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo/agricme-logo.png";

type formVariant = {
  page: string;
};
export default function Form({ page }: formVariant) {
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
              <label
                className="w-full text-white text-[13px] pb-3 font-semibold"
                htmlFor="username"
              >
                Username
                <input
                  className="w-full bg-white/40 p-3 outline-offset-0 outline-none text-[black]"
                  type="username"
                  name="username"
                  id="username"
                />
              </label>
            )}
            <label
              className="w-full text-white text-[13px] pb-3 font-semibold"
              htmlFor="email"
            >
              Email
              <input
                className="w-full bg-white/40 p-3 outline-offset-0 outline-none text-[black]"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <label
              className="w-full text-white text-[13px] pb-3 font-semibold"
              htmlFor="password"
            >
              Password
              <input
                className="w-full bg-white/40 p-3 outline-offset-0 outline-none text-[black]"
                type="password"
                name="password"
                id="password"
              />
            </label>
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
