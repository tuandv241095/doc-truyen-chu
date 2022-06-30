import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useFacebookMutation } from "../stores/services/authentication.service";
import { setUser } from "../stores/slices/user.slice";

const useFacebookAuthentication = () => {
  const [
    FacebookLogin,
    { isLoading: isFacebookLoggingIn, error: FacebookLoginErr },
  ] = useFacebookMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResponse = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    if ("accessToken" in response) {
      const accessToken = response.accessToken;
      FacebookLogin({
        name: response.name || "Guest",
        photo: response.picture?.data.url || " ",
        usernameOrEmail: response.email || "Guest",
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

  const onFailure = (err: any) => {
    console.log("Failure: ", err);
  };

  return {
    handleResponse,
    onFailure,
  };
};

export default useFacebookAuthentication;
