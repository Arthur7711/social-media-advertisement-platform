import React from "react";
import styles from "./Platform.module.css";
import google from "../../images/bgoog.png";
import fb from "../../images/bfb.png";
import tic from "../../images/btic.png";
import insta from "../../images/binsta.png";
import Simplebutton from "../simpleButton/SimpleButton";

const Platform = () => {
  return (
    <div className={styles.platform}>
      <div className={styles.allPlatforms}>
        <div className={styles.plat}>
          <div className={styles.fbInst}>
            <div style={{ marginRight: 10 }} className={styles.one}>
              <img alt="fb" src={fb} />
              <span>Facebook</span>
            </div>
            <div className={styles.one}>
              <img alt="insta" src={insta} />
              <span>Instagram</span>
            </div>
          </div>
          <div className={styles.selectArea}>
            <select name="portals" className={styles.select}>
              <option className={styles.option} value="">
                Select
              </option>
              <option className={styles.option} value="Facebook and Instagram">
                Advertise on Facebook and Instagram
              </option>
              <option className={styles.option} value="Facebook">
                Advertise on Facebook Only
              </option>
              <option className={styles.option} value="Instagram">
                Advertise on Instagram Only
              </option>
            </select>
          </div>
        </div>
        <div className={styles.plat}>
          <div className={styles.oneGoogle}>
            <img alt="google" src={google} />
            <span>Google</span>
          </div>
          <Simplebutton
            COLOR="#fff"
            BG="#91D5FF"
            text="NOT CONNECTED"
            WIDTH="100%"
          />
        </div>
        <div className={styles.plat}>
          <div className={styles.oneGoogle}>
            <img alt="tic" src={tic} />
            <span>Tiktok</span>
          </div>
          <Simplebutton
            COLOR="#fff"
            BG="#E7E7E7"
            text="COMING SOON!"
            WIDTH="100%"
          />
        </div>
      </div>
      <div className={styles.textArea} >
      MORE PLATFORMS COMING SOON...
      </div>
    </div>
  );
};

export default Platform;
