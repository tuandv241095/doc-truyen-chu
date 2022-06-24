import React, { useCallback, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../stores/services/authentication.service";
import { setUser } from "../../stores/slices/user.slice";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";

const SignIn = ({ left, setLeft, closeFunc }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const changeUsername = useCallback((e) => {
    setUsername(e.currentTarget.value);
  }, []);
  const changePassword = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);

  const [fullInfo, setFullInfo] = useState(true);

  const [login, { isLoading, error, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  const loginfunc = () => {
    if (username.length >= 8 && password.length >= 8) {
      setFullInfo(true);
      login({
        email: username,
        password: password,
      })
        .unwrap()
        .then((res) => {
          closeFunc();
          localStorage.setItem("token", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshAccessToken);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(setUser(JSON.stringify(res.user)));
        });
    } else {
      setFullInfo(false);
    }
  };
  return (
    <>
      {left ? (
        <div
          className={
            "flex flex-col justify-center items-center bg-white dark:text-dark px-32 rounded-l-2xl transition duration-300 ease-in-out"
          }
        >
          <h1 className="text-3xl font-bold mb-2">Sign in to Account</h1>
          <div className="w-10 border-2 mb-3 border-gray-light dark:border-dark inline-block"></div>
          <div className="flex justify-center mb-1">
            <GoogleButton func={closeFunc} />
            <FacebookButton func={closeFunc} />
          </div>
          <span
            className={
              "text-sm " + (!fullInfo || error || isSuccess ? "mb-1 " : "mb-6")
            }
          >
            or use your DCT account
          </span>
          {!fullInfo && (
            <span className="text-xs mb-1">Vui lòng điền đủ thông tin</span>
          )}
          {error && <span className="text-xs mb-1">{error.data.message}</span>}
          {isSuccess && (
            <span className="text-xs mb-1">Đăng nhập thành công</span>
          )}
          <div className="flex flex-col items-center space-y-1">
            <div className="w-64 p-1 flex items-center border-2 rounded-lg">
              <FaRegEnvelope className="m-2 " />
              <input
                type="usenameOrEmail"
                name="usernameOrEmail"
                placeholder="Username"
                className="outline-none text-sm flex-1 "
                onChange={changeUsername}
              />
            </div>
            <div className="w-64 p-1 flex items-center border-2 rounded-lg">
              <FaRegEnvelope className="m-2 " />
              <input
                type="password"
                name="pasword"
                placeholder="Password"
                className="outline-none text-sm flex-1 "
                onChange={changePassword}
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
              <span
                onClick={loginfunc}
                className="px-6 py-2 border border-gray-light dark:border-dark hover:border-gray-light dark:hover:border-dark hover:text-white hover:bg-gray-light dark:hover:bg-dark cursor-pointer rounded-full whitespace-nowrap"
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      ) : (
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
    </>
  );
};

export default SignIn;
