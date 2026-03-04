import { useState, useEffect, useRef } from "react";

const useLocalStorage = ({ key, defaultValue = [], checkData = Array.isArray }) => {
  const [state, setState] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return checkData(data) ? data : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
