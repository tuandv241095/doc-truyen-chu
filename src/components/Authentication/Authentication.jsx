import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";

const Authentication = ({ authenRef, leftInit, closeFunc }) => {
  const [left, setLeft] = useState(leftInit);
  return (
    <div className="fixed w-full h-full bg-dark dark:bg-white bg-opacity-50 dark:bg-opacity-50 z-[1000] top-0 left-0">
      <div
        ref={authenRef}
        className="absolute flex top-[50%] left-[50%] min-w-[350px] min-h-[400px] -translate-x-1/2 -translate-y-1/2  rounded-2xl"
      >
        {left && (
          <div
            className={
              "flex flex-col space-y-3 justify-center items-center bg-white dark:text-dark px-32 rounded-l-2xl transition duration-300 ease-in-out"
            }
          >
            <h1 className="text-3xl font-bold">Sign in to Account</h1>
            <div className="w-10 border-2 border-gray-light dark:border-dark inline-block"></div>
            <div className="flex justify-center">
              <GoogleButton />
              <FacebookButton />
            </div>
            <span className="text-sm">or use your DCT account</span>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-64 p-1 flex items-center border-2 rounded-lg">
                <FaRegEnvelope className="m-2 " />
                <input
                  type="usenameOrEmail"
                  name="usernameOrEmail"
                  placeholder="Username"
                  className="outline-none text-sm flex-1 "
                />
              </div>
              <div className="w-64 p-1 flex items-center border-2 rounded-lg">
                <FaRegEnvelope className="m-2 " />
                <input
                  type="password"
                  name="pasword"
                  placeholder="Password"
                  className="outline-none text-sm flex-1 "
                />
              </div>
              <div className="text-xs flex justify-between w-full items-center px-1">
                <label className=" flex space-x-1">
                  <input
                    type="checkbox"
                    className="cursor-pointer dark:text-dark"
                  ></input>
                  <span className="cursor-pointer">Remember me</span>
                </label>
                <span className="hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="pt-4">
                <spam className="px-6 py-2 border border-gray-light dark:border-dark hover:border-gray-light dark:hover:border-dark hover:text-white hover:bg-gray-light dark:hover:bg-dark cursor-pointer rounded-full whitespace-nowrap">
                  Sign In
                </spam>
              </div>
            </div>
          </div>
        )}
        {!left && (
          <div
            className={
              "flex flex-col space-y-4 justify-center items-center rounded-l-2xl p-4 bg-white text-gray-light dark:text-dark transition duration-300 ease-in-out"
            }
          >
            <h1 className="text-3xl font-bold whitespace-nowrap">
              Hello, Friend!
            </h1>
            <span className="text-sm">Already have an account? Sign in!</span>
            <spam
              className="px-6 py-2 border border-gray-light hover:bg-gray-light dark:border-dark dark:hover:bg-dark hover:text-white cursor-pointer rounded-full whitespace-nowrap"
              onClick={() => setLeft(true)}
            >
              Sign In
            </spam>
          </div>
        )}
        {left && (
          <div
            className={
              "flex flex-col space-y-4 justify-center items-center rounded-r-2xl p-4 bg-gray-light dark:bg-dark text-white transition duration-300 ease-in-out"
            }
          >
            <h1 className="text-3xl font-bold whitespace-nowrap">
              Hello, Friend!
            </h1>
            <span className="text-sm">
              Don't have any account yet? Sign up!
            </span>
            <spam
              className="px-6 py-2 border border-white hover:bg-white hover:text-gray-light dark:hover:text-dark cursor-pointer rounded-full whitespace-nowrap"
              onClick={() => setLeft(false)}
            >
              Sign Up
            </spam>
          </div>
        )}
        {!left && (
          <div
            className={
              "flex flex-col space-y-3 justify-center items-center bg-gray-light dark:bg-dark px-32 rounded-r-2xl text-white transition duration-300 ease-in-out"
            }
          >
            <h1 className="text-3xl font-bold whitespace-nowrap">
              Create new Account
            </h1>

            <div className="flex flex-col items-center space-y-1">
              <div className="w-64 p-1 flex items-center border-2 rounded-lg">
                <FaRegEnvelope className="m-2 " />
                <input
                  type="usenameOrEmail"
                  name="usernameOrEmail"
                  placeholder="Username"
                  className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                />
              </div>
              <div className="w-64 p-1 flex items-center border-2 rounded-lg">
                <FaRegEnvelope className="m-2 " />
                <input
                  type="password"
                  name="pasword"
                  placeholder="Password"
                  className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                />
              </div>
              <div className="w-64 p-1 flex items-center border-2 rounded-lg">
                <FaRegEnvelope className="m-2 " />
                <input
                  type="password"
                  name="pasword"
                  placeholder="Confirm Password"
                  className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                />
              </div>
              <div className="pt-4">
                <spam className="px-6 py-2 border text-white border-white hover:border-white hover:text-gray-light dark:hover:text-dark hover:bg-white cursor-pointer rounded-full whitespace-nowrap">
                  Sign Up
                </spam>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
