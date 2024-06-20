import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo/agricme-logo.png";
import Image from "next/image";

type formVariant = {
  page: string;
};

export default function Form({ page }: formVariant) {
  return (
    <>
      <div className="form-container w-[40vw]">
        <div className="logo">
          <Link href={"/"}>
            <Image src={logo} width={200} alt="" />
          </Link>
        </div>
        <div>
          <div className="hidden md:flex">
            {page == "Log In" ? (
              <span className="label w-full flex justify-end gap-2 mt-5">
                Already have an account?{" "}
                <Link href={"/signup"}>Create Account</Link>
              </span>
            ) : (
              <span className="label w-full flex justify-end gap-2 mt-5">
                Don&apos;t have an account? <Link href={"/login"}>Log In</Link>
              </span>
            )}
          </div>
          <h3
            className="text-black font-medium"
            style={{ fontSize: "clamp(11.3px, 3.5vw, 33.7px)" }}
          >
            {page}
          </h3>
          <div className="oauth">
            <button className="auth">
              <span>
                <FcGoogle />
              </span>{" "}
              Continue with Google
            </button>
            <button className="auth">
              <span>
                <FaFacebook />
              </span>{" "}
              Continue with facebook
            </button>
          </div>
          <form className="form w-full" action="">
            {page == "Create Account" && (
              <label
                className="w-full label flex flex-col gap-2 justify-stretch items-start"
                htmlFor="username"
              >
                Username
                <input
                  className="!w-full bg-white"
                  type="username"
                  name="username"
                  id="username"
                />
              </label>
            )}
            <label
              className="w-full label flex flex-col gap-2 justify-stretch items-start"
              htmlFor="email"
            >
              Email
              <input
                className="!w-full bg-white"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <div className=" flex justify-stretch items-start">
              <label
                className="w-full label flex flex-col gap-2 justify-stretch items-start"
                htmlFor="password"
              >
                Password
                <input
                  className="!w-full bg-white"
                  type="password"
                  name="password"
                  id="password"
                />
              </label>

              {page == "Create Account" && (
                <label
                  className="w-full label flex flex-col gap-2 justify-stretch items-start"
                  htmlFor="cPassword"
                >
                  Confirm Password
                  <input
                    className="!w-full bg-white"
                    type="password"
                    name="cPassword"
                    id="cPassword"
                  />
                </label>
              )}
            </div>
            <label
              className="label flex justify-start items-center gap-2 -my-5 h-fit"
              htmlFor="remember"
            >
              <input
                className="text-white bg-white accent-green"
                type="checkbox"
                name="remember"
                id="remember"
              />{" "}
              Remember me
            </label>
            <button className="submit">Continue</button>

            <div className="flex md:hidden">
              {page == "Log In" ? (
                <span className="label w-full flex justify-center gap-2 mt-5">
                  Already have an account?{" "}
                  <Link href={"/signup"}>Create Account</Link>
                </span>
              ) : (
                <span className="label w-full flex justify-center gap-2 mt-5">
                  Don&apos;t have an account?{" "}
                  <Link href={"/login"}>Log In</Link>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
