import { useEffect } from "react";

// Reference: https://thesmartcoder.dev/awesome-react-hooks/
function useClickOutside(ref, handler){
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    },

    [ref, handler]
  );
}

export default useClickOutside;