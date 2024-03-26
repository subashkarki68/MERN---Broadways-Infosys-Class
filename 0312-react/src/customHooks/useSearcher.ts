import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

function useSearcher(term: string, url: string) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = useFetch(url);
      setData(data);
    }, 2000);
    return () => clearTimeout(timer);
  }, [url]);
  return data;
}

export default useSearcher;
