import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let location = useLocation();
useEffect(() => {
  let title = `dragon-news ${location.pathname}`;
  document.title = title.replace("/", "- ");
}, [location]);
