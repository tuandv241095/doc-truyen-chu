import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGoogleMutation } from "../stores/services/authentication.service";
import { setUser } from "../stores/slices/user.slice";

const useGoogleAuthentication = () => {
  const [googleLogin, { isLoading: isGoogleLoggingIn, error: googleLoginErr }] =
    useGoogleMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    if ("accessToken" in response) {
      const accessToken = response.accessToken;
      googleLogin({
        token: accessToken,
      })
        .unwrap()
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshAccessToken);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(setUser(JSON.stringify(res.user)));
          // navigate("/");
        });
    }
  };

  const onFailure = (err) => {
    console.log("Failure: ", err);
  };

  return {
    handleSuccess,
    onFailure,
  };
};

export default useGoogleAuthentication;
