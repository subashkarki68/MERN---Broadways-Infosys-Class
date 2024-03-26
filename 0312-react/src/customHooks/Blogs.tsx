import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useDebouncer from "./useDebounce";

function Blogs() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>(" ");

  useDebouncer({
    wait: 500,
    value: debouncedTerm,
    setFn: setSearchTerm,
  });
  const data = useFetch(`https://dummyjson.com/posts/search?q=${searchTerm}`);

  return (
    <>
      <input
        type='text'
        placeholder='search'
        onChange={(e) => {
          setDebouncedTerm(e.target.value);
        }}
      />
      <br />
      {debouncedTerm && <span>Searching for term: {debouncedTerm}</span>}
      <ol>
        {data?.posts?.length > 0 ? (
          data.posts.map((post: any) => {
            return <li>{post?.title}</li>;
          })
        ) : (
          <>Search Post not found</>
        )}
      </ol>
    </>
  );
}

export default Blogs;
