import React from "react";
import styles from "./SocialPart.module.css";
import cosialPhoto from "../../images/group.png";
import Mybutton from "../myButton/MyButton";
import Mediasoc from "../mediaSoc/MediaSoc";
import fb from "../../images/fb.png";
import google from "../../images/google.png";
import insta from "../../images/insta.png";
import tictoc from "../../images/tictok.png";
import twit from "../../images/twit.png";

const Socialpart = () => {
  return (
    <div>
      <main className={styles.soc}>
        <div>
          <h2 className={styles.subTitle}>The smartest way to</h2>
          <h1 className={styles.title}>Lorem Ipsum is simply </h1>
          <p className={styles.describtion}>
            m has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a
          </p>
          <div>
            <Mybutton
              title="Get started"
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
        </div>
        <div>
          <img alt="social" src={cosialPhoto} />
        </div>
      </main>
      <div className={styles.platforms}>
        <p style={{ color: "#005792" }}>Create & Manage Ads on:</p>
        <Mediasoc ico={fb} text="Facebook" />
        <Mediasoc ico={insta} text="Instagram" />
        <Mediasoc ico={google} text="Google" />
        <Mediasoc ico={tictoc} text="Tic-Toc" />
        <Mediasoc ico={twit} text="Twitter" />
      </div>

      <div className={styles.bottomPart}>
        <p>The smartest way to</p>
        <h2>Lorem smartest way to</h2>
      </div>
    </div>
  );
};

export default Socialpart;
