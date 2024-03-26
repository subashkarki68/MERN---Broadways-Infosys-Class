//Debouncing is programming practice that
//allows us to optimize user experience on web by handling expensive computation
//like api call by adding internal delays

import { useEffect } from "react";

const useDebouncer = ({ wait, value, setFn }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setFn(value);
    }, +wait);
    return () => clearTimeout(timer);
  }, [value, wait, setFn]);
};

export default useDebouncer;
