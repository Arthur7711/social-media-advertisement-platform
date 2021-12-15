import React, { useState } from "react";
import styles from "./Register.module.css";
import Mylabel from "../../components/myLabel/MyLabel";
import Mybutton from "../../components/myButton/MyButton";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fullname,
  email,
  password,
  country,
} from "../../features/register/registerSlice";
import { API } from "../../API/API";
import CountrySelect from "../../components/userComp/Countries";
import { useLocation } from "react-router-dom";

const Register = () => {
  const registering = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const history = useHistory();
const location = useLocation()
console.log(location);
  async function sendingRegisterData() {
    let api = "/auth/register";
    api += location.search
  
    API.post(api, registering)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <div className={styles.log}>
      <div className={styles.all}>
        <div className={styles.imgArea}>
          <img alt="logo" src={logo} />
        </div>
        <div className={styles.login}>
          <h1>Let's Get Started</h1>
          <p>Sign in to continue to ADCLOUD</p>
          <Mylabel
            onchange={(el) => dispatch(fullname(el.target.value))}
            data={registering.fullname}
            name="Name"
            type="text"
            plat="Enter Your First Name"
          />
          <Mylabel
            onchange={(el) => dispatch(email(el.target.value))}
            data={registering.email}
            name="E-Mail"
            type="email"
            plat="Enter Your E-Mail"
          />
          <Mylabel
            onchange={(el) => dispatch(password(el.target.value))}
            data={registering.password}
            name="Password"
            type="password"
            plat="Password"
          />
          <div className={styles.countryPart}>
            <CountrySelect onchange={(el) => dispatch(country(el))} />
          </div>

          <p className={styles.p}>
            By registering you agree to the Terms of Use
          </p>
          <div className={styles.btn}>
            <Mybutton
              clickFN={() => sendingRegisterData()}
              title="Register"
              ico={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            />
          </div>
          <div className={styles.to}>
            <span>Already have an account?</span>
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
