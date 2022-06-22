import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebookF } from "react-icons/fa";
import useFacebookAuthentication from "../../hooks/useFacebookAuthentication";

const FacebookButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const { handleResponse, onFailure } = useFacebookAuthentication();

  return (
    <FacebookLogin
      appId="257916696327469"
      render={(renderProps) => (
        <span
          onClick={renderProps.onClick}
          className="border-4 border-gray-light dark:border-dark rounded-full p-2 mx-1 cursor-pointer"
        >
          <FaFacebookF className="text-lg" />
        </span>
      )}
      fields="name,email,picture"
      callback={handleResponse}
      onFailure={onFailure}
    />
  );
};

export default FacebookButton;
