import React, { useCallback, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useRegisterMutation } from "../../stores/services/authentication.service";

const SignUp = ({ left, setLeft }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const changeUsername = useCallback((e) => {
    setUsername(e.currentTarget.value);
  }, []);
  const changePassword = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  const changeRePassword = useCallback((e) => {
    setRePassword(e.currentTarget.value);
  }, []);

  const [fullInfo, setFullInfo] = useState(true);

  const usernameCheck = username.length == 0 || username.length >= 8;

  const passCheck = password.length == 0 || password.length >= 8;

  const repassEqual = rePassword.length == 0 || password === rePassword;

  const [signup, { isLoading, error, isSuccess }] = useRegisterMutation();

  const register = () => {
    if (
      username.length >= 8 &&
      password.length >= 8 &&
      password === rePassword
    ) {
      setFullInfo(true);
      signup({
        usernameOrEmail: username,
        name: username,
        password: password,
      });
      // .unwrap()
      // .then((res) => {
      //   localStorage.setItem("token", res.accessToken);
      //   localStorage.setItem("refreshToken", res.refreshAccessToken);
      //   localStorage.setItem("user", JSON.stringify(res.user));
      //   navigate("/");
      // });
    } else {
      setFullInfo(false);
    }
  };
  return (
    <>
      {left ? (
        <div
          className={
            "flex flex-col space-y-4 justify-center items-center rounded-r-2xl p-4 bg-gray-light dark:bg-dark text-white transition duration-300 ease-in-out"
          }
        >
          <h1 className="text-3xl font-bold whitespace-nowrap">
            Hello, Friend!
          </h1>
          <span className="text-sm">Don't have any account yet? Sign up!</span>
          <spam
            className="px-6 py-2 border border-white hover:bg-white hover:text-gray-light dark:hover:text-dark cursor-pointer rounded-full whitespace-nowrap"
            onClick={() => setLeft(false)}
          >
            Sign Up
          </spam>
        </div>
      ) : (
        <div
          className={
            "flex flex-col justify-center items-center bg-gray-light dark:bg-dark px-32 rounded-r-2xl text-white transition duration-300 ease-in-out"
          }
        >
          <h1
            className={
              "text-3xl font-bold whitespace-nowrap " +
              (!fullInfo || error || isSuccess ? "mb-1 " : "mb-6")
            }
          >
            Create new Account
          </h1>
          {!fullInfo && (
            <span className="text-xs mb-1">Vui lòng điền đủ thông tin</span>
          )}

          {error && <span className="text-xs mb-1">{error.data.message}</span>}
          {isSuccess && (
            <span className="text-xs mb-1">
              Đăng kí thành công,{" "}
              <span onClick={() => setLeft(true)}>
                <b className="cursor-pointer">
                  <i>
                    <u>Đăng nhập ngay!</u>
                  </i>
                </b>
              </span>
            </span>
          )}

          <div className="flex flex-col items-center">
            <div
              className={
                "w-64 p-1 flex items-center border-2 rounded-lg " +
                (usernameCheck ? "mb-5 " : "mb-1")
              }
            >
              <FaRegEnvelope className="m-2 " />
              <input
                type="usenameOrEmail"
                name="usernameOrEmail"
                placeholder="Username"
                className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                onChange={changeUsername}
              />
            </div>
            {!usernameCheck && (
              <span className="text-xs">
                Tên đăng nhập có độ dài tối thiểu 8 kí tự
              </span>
            )}
            <div
              className={
                "w-64 p-1 flex items-center border-2 rounded-lg " +
                (passCheck ? "mb-5 " : "mb-1")
              }
            >
              <MdLockOutline className="m-2 " />
              <input
                type="password"
                name="pasword"
                placeholder="Password"
                className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                onChange={changePassword}
              />
            </div>
            {!passCheck && (
              <span className="text-xs">
                Mật khẩu có độ dài tối thiểu 8 kí tự
              </span>
            )}
            <div
              className={
                "w-64 p-1 flex items-center border-2 rounded-lg " +
                (repassEqual ? "mb-5 " : "mb-1")
              }
            >
              <MdLockOutline className="m-2 " />
              <input
                type="password"
                name="pasword"
                placeholder="Confirm Password"
                className="outline-none text-sm flex-1 bg-gray-light dark:bg-dark"
                onChange={changeRePassword}
              />
            </div>
            {!repassEqual && (
              <span className="text-xs">Nhập lại mật khẩu không khớp</span>
            )}

            <div className="">
              <button
                onClick={register}
                className="px-6 py-2 border text-white border-white hover:border-white hover:text-gray-light dark:hover:text-dark hover:bg-white cursor-pointer rounded-full whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
