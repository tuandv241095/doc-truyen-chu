import { useEffect } from "react";

const useClickOutside = (ref, action, except) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        (except
          ? except.current && !except.current.contains(event.target)
          : true) &&
        !ref.current.contains(event.target)
      ) {
        action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
