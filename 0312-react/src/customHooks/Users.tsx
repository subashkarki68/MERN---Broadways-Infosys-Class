import useFetch from "./useFetch";

export const Users = () => (
  <>{JSON.stringify(useFetch("https://dummyjson.com/posts")).slice(0, 130)}</>
);
