import React from "react";
import GoogleLogin from "react-google-login";
import { FaGoogle } from "react-icons/fa";
import useGoogleAuthentication from "../../hooks/useGoogleAuthentication";

const GoogleButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const { handleSuccess, onFailure } = useGoogleAuthentication();

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <span
          onClick={renderProps.onClick}
          className="border-4 border-gray-light dark:border-dark rounded-full p-2 mx-1 cursor-pointer"
        >
          <FaGoogle className="text-lg" />
        </span>
      )}
      onSuccess={handleSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleButton;
