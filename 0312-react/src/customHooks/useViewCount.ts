import React, { useEffect, useState } from "react";

export default function useViewCount() {
  let viewCount = 1;
  const storedCount = localStorage.getItem("view-count");
  if (storedCount) viewCount = +storedCount + 1;

  useEffect(() => {
    localStorage.setItem("view-count", viewCount.toString());
  }, []);
  return viewCount;
}
