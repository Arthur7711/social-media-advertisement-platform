import React from "react";
import Mylabel from "../../components/myLabel/MyLabel";
import styles from "./Login.module.css";
import Mybutton from "../../components/myButton/MyButton";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { email, password } from "../../features/login/loginSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const logining = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  //  const getData = async () => {
  //     const location = window.location.hostname;
  //     const settings = {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     try {
  //       const fetchResponse = await fetch(
  //         `http://${location}:9000/api/sensors/`,
  //         settings
  //       );
  //       const data = await fetchResponse.json();
  //       return data;
  //     } catch (e) {
  //       return e;
  //     }
  //   };

  return (
    <h1>{t("Welcome to React")}</h1>
    // <div className={styles.log}>
    //   <div className={styles.all}>
    //     <div className={styles.imgArea}>
    //       <img alt="logo" src={logo} />
    //     </div>
    //     <div className={styles.login}>
    //       <h1>Let's Get Started</h1>
    //       <p>Sign in to continue to ADCLOUD</p>
    //       <Mylabel
    //         onchange={(el) => dispatch(email(el.target.value))}
    //         data={logining.email}
    //         name="E-Mail"
    //         type="email"
    //         plat="Enter Your E-Mail"
    //       />
    //       <Mylabel
    //         onchange={(el) => dispatch(password(el.target.value))}
    //         data={logining.password}
    //         name="Password"
    //         type="password"
    //         plat="Password"
    //       />
    //       <div className={styles.btn}>
    //         <Mybutton
    //           clickFN={() => console.log(JSON.stringify(logining))}
    //           title="Log In"
    //           HREF="/dashboard"
    //           ico={
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M14 5l7 7m0 0l-7 7m7-7H3"
    //               />
    //             </svg>
    //           }
    //         />
    //       </div>
    //       <div className={styles.to}>
    //         <span>Don't have an account?</span>
    //         <Link to="/register"> Free Register</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
