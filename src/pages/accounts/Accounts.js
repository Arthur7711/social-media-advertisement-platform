import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Accounts.module.css";
import google from "../../images/bgoog.png";
import fb from "../../images/bfb.png";
import tic from "../../images/btic.png";
import insta from "../../images/binsta.png";
import Simplebutton from "../../components/simpleButton/SimpleButton";
import { Link } from "react-router-dom";

const Accounts = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.acc}>
        <div className={styles.head}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 11.995C7.7725 12.4212 7.55739 12.9441 7.508 13.495H2.248C2.14964 13.4951 2.05227 13.5146 1.96145 13.5524C1.87062 13.5902 1.78813 13.6454 1.71867 13.7151C1.64921 13.7847 1.59415 13.8674 1.55663 13.9583C1.51911 14.0492 1.49987 14.1466 1.5 14.245V14.822C1.5 15.358 1.691 15.876 2.039 16.283C3.216 17.662 5.023 18.403 7.508 18.488C7.557 19.058 7.781 19.578 8.125 19.996H7.996C4.851 19.996 2.465 19.091 0.898 17.257C0.318385 16.5781 -3.07437e-05 15.7147 2.22639e-09 14.822V14.244C2.22639e-09 13.054 0.925 12.08 2.095 12.001L2.249 11.995H8.125ZM12.746 9.495H15.746C16.394 9.495 16.926 9.987 16.99 10.618L16.997 10.745L16.996 11.995H18.246C19.213 11.995 19.996 12.779 19.996 13.745V18.245C19.996 18.7091 19.8116 19.1542 19.4834 19.4824C19.1552 19.8106 18.7101 19.995 18.246 19.995H10.246C9.78187 19.995 9.33675 19.8106 9.00856 19.4824C8.68037 19.1542 8.496 18.7091 8.496 18.245V13.745C8.496 12.779 9.28 11.995 10.246 11.995H11.496V10.745C11.496 10.098 11.988 9.565 12.619 9.502L12.746 9.495H15.746H12.746ZM18.246 13.495H10.246C10.1797 13.495 10.1161 13.5213 10.0692 13.5682C10.0223 13.6151 9.996 13.6787 9.996 13.745V18.245C9.996 18.383 10.108 18.495 10.246 18.495H18.246C18.3123 18.495 18.3759 18.4687 18.4228 18.4218C18.4697 18.3749 18.496 18.3113 18.496 18.245V13.745C18.496 13.6787 18.4697 13.6151 18.4228 13.5682C18.3759 13.5213 18.3123 13.495 18.246 13.495ZM15.496 10.995H12.996V11.995H15.496V10.995ZM7.997 0C9.32308 0 10.5949 0.526784 11.5325 1.46447C12.4702 2.40215 12.997 3.67392 12.997 5C12.997 6.32608 12.4702 7.59785 11.5325 8.53553C10.5949 9.47322 9.32308 10 7.997 10C6.67092 10 5.39915 9.47322 4.46147 8.53553C3.52378 7.59785 2.997 6.32608 2.997 5C2.997 3.67392 3.52378 2.40215 4.46147 1.46447C5.39915 0.526784 6.67092 0 7.997 0ZM7.997 1.5C7.06874 1.5 6.1785 1.86875 5.52213 2.52513C4.86575 3.1815 4.497 4.07174 4.497 5C4.497 5.92826 4.86575 6.8185 5.52213 7.47487C6.1785 8.13125 7.06874 8.5 7.997 8.5C8.92526 8.5 9.8155 8.13125 10.4719 7.47487C11.1283 6.8185 11.497 5.92826 11.497 5C11.497 4.07174 11.1283 3.1815 10.4719 2.52513C9.8155 1.86875 8.92526 1.5 7.997 1.5Z"
              fill="#005792"
            />
          </svg>

          <h1>Social Accounts</h1>
        </div>
        <p className={styles.p}>
          See your connected accounts and connect / reconnect if needed.
        </p>
        <main className={styles.accMain}>
          <div className={styles.elem}>
            <div className={styles.topElem}>
              <div className={styles.one}>
                <img alt="fb" src={fb} />
                <span>Facebook</span>
              </div>
              <div className={styles.one}>
                <img alt="insta" src={insta} />
                <span>Instagram</span>
              </div>
              <Simplebutton COLOR="#fff" BG="#42CC23" text="RECONNECT" />
            </div>
            <ul className={styles.first}>
              <li> You have successfully connected your account.</li>
            </ul>
          </div>
          <div className={styles.elem}>
            <div className={styles.topElem}>
              <div className={styles.oneGoogle}>
                <img alt="google" src={google} />
                <span>Google</span>
              </div>
              <Simplebutton COLOR="#fff" BG="#42CC23" text="RECONNECT" />
            </div>
            <ul className={styles.first}>
              <li> You have successfully connected your account.</li>
            </ul>
          </div>
          <div className={styles.elem}>
            <div className={styles.topElem}>
              <div className={styles.oneGoogle}>
                <img alt="tic" src={tic} />
                <span>TikTok</span>
              </div>
              <Simplebutton COLOR="#6884A9" BG="#F4F4F4" text="RECONNECT" />
            </div>
            <ul className={styles.second}>
              <li> You have successfully connected your account.</li>
            </ul>
          </div>
          <div className={styles.selfElem}>
            <p>MORE PLATFORMS COMING SOON...</p>
          </div>
        </main>
        <p className={styles.pArea}>
          To reset your accounts, you can click <Link to=""> here.</Link>
        </p>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Accounts;
