import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import Mybutton from "../myButton/MyButton";
import i18next from "i18next";

const Header = () => {
  const [lang, setLang] = useState(
    localStorage.getItem("language") && localStorage.getItem("language")
  );

  function changingLang(e) {
    setLang(
      e
        ? localStorage.setItem("language", e)
        : localStorage.setItem("language", "en")
    );
    i18next.changeLanguage(localStorage.getItem("language"));
  }

  // useEffect(() => {
  //   changingLang();
  // }, [lang]);

  // const [lang, setLang] = useState("en");

  // function changingLang(e) {
  //   setLang(e);
  //   i18next.changeLanguage(lang);
  // }

  // useEffect(() => {
  //   changingLang();
  // }, [lang]);

  return (
    <header className={styles.head}>
      <div className={styles.leftHead}>
        <div style={{ width: 190 }}>
          <img style={{ width: "100%" }} src={logo} alt="logo" />
        </div>
        <div className={styles.navigation}>
          <NavLink to="/features">Features</NavLink>
        </div>
        <div className={styles.navigation}>
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
      </div>
      <div></div>
      <div className={styles.rightHead}>
        <div className={styles.lagnSelect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 20 20"
            fill="#005792"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
          <select
            onChange={(e) => changingLang(e.target.value)}
            name="cars"
            id="cars"
          >
            <option
              // style={{ opacity: 0 }}
              value={localStorage.getItem("language")}
            >
              {localStorage.getItem("language")}
            </option>
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="ru">ru</option>
          </select>
        </div>
        <Link to="/login">
          <b style={{ color: "#005792" }}>Login</b>
        </Link>
        <Mybutton
          title="Get started"
          HREF="/register"
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
    </header>
  );
};

export default Header;
