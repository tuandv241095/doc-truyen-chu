import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Authentication = ({ authenRef, leftInit, closeFunc }) => {
  const [left, setLeft] = useState(leftInit);
  return (
    <div className="fixed w-full h-full bg-dark dark:bg-white bg-opacity-50 dark:bg-opacity-50 z-[1000] top-0 left-0">
      <div
        ref={authenRef}
        className="absolute flex top-[50%] left-[50%] min-w-[350px] min-h-[400px] -translate-x-1/2 -translate-y-1/2  rounded-2xl"
      >
        <SignIn closeFunc={closeFunc} left={left} setLeft={setLeft} />
        <SignUp left={left} setLeft={setLeft} />
      </div>
    </div>
  );
};

export default Authentication;
