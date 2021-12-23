import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const useUserInfo = (callback) => {
  const [userInfo, setUserInfo] = useState({
    image: "",
    name: "",
    title: "Business Admin",
  });
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
      callback();
    } else {
      let decoded = jwt_decode(localStorage.getItem("token"))||null
      decoded && setUserInfo({ ...userInfo, name: decoded.name, image: decoded.image });
      callback();
      console.log(decoded, "decoded");
    }
  }, []);
  return userInfo;
};
