import React from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    // document.querySelector('body').scrollIntoView({behavior: 'smooth'});
  }, [pathname]);
  return null;
}
