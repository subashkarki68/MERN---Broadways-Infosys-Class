import React, { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(<any>{});
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(url, { signal });
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return data;
}

export default useFetch;
