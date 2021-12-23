import React, { useState, useEffect } from "react";
import { API } from "../API/API";
import { useLocation } from "react-router-dom";

export const useToken = (callback) => {
  const [result, setResult] = useState({});
  useEffect(() => {
    API.get(`/auth/token`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        res.data.refresh_token &&
          localStorage.setItem("token", res.data.refresh_token);
        setResult(res.data);
        // console.log(res.data, "res");
        callback();
      })
      .catch((err) => {
        localStorage.removeItem("token");
        setResult(err.response);
        // console.log("err", err.response);
        callback();
      });
  }, [useLocation().pathname]);
  return result;
};
