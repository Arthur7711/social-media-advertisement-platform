import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import SimpleInput from "../simpleInput/SimpleInput";
import styles from "./AdType.module.css";
import cloud from "../../images/cloud.png";
import canva from "../../images/canva.png";
import crello from "../../images/crello.png";
import Avatar from "@mui/material/Avatar";
import user from "../../images/girl.jpg";
import Simplebutton from "../simpleButton/SimpleButton";

const Adtype = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  const [userInfo, setUserInfo] = React.useState({
    image: user,
    name: "Jon Don",
    title: "Sponsored",
    mail: "FB.me",
  });

  const objs = [
    {
      title: "Single Image / Video",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Carousel",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Story",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Existing Post",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
  ];

  return (
    <div className={styles.adtype}>
      <div className={styles.choice}>
        <Myblocks
          objs={objs}
          activeEl={activeEl}
          setActiveEl={(el) => setActiveEl(el)}
        />
      </div>
      <div className={styles.choice}>
        <main className={styles.mainParth}>
          <h3 className={styles.h}>SINGLE IMAGE / VIDEO</h3>
          <div className={styles.elems}>
            <p className={styles.p}>Headline</p>
            <SimpleInput plac="Write a short headline" WIDTH="97%" />
          </div>
          <div className={styles.elems}>
            <p className={styles.p}>Headline</p>
            <div className={styles.txt}>
              <textarea
                placeholder="Write a short headline"
                style={{
                  height: 100,
                  width: "97%",
                  padding: 10,
                  border: "1px solid #dde1eb",
                  borderRadius: 6,
                }}
              ></textarea>
            </div>
          </div>
          <div className={styles.elements}>
            <div className={styles.elem1}>
              <p className={styles.p}>Website Link</p>
              <SimpleInput plac="https://fb.me" WIDTH="350px" />
            </div>
            <div className={styles.elem2}>
              <p className={styles.p}>Call to Action</p>
              <select name="learn more">
                <option value="learn more">learn more</option>
                <option value="saab">Saab</option>
              </select>
            </div>
          </div>
          <div className={styles.elements}>
            <div>
              <p className={styles.p}>Media</p>
              <div className={styles.elem}>
                <div style={{ marginBottom: "50px", marginTop: 30 }}>
                  <div className={styles.choice}>
                    <img alt="cloud" src={cloud} />
                  </div>
                  <p className={styles.p}>
                    Click this area to <span>UPLOAD</span>
                  </p>
                </div>
                <hr
                  style={{
                    border: "1px solid #DDE1EB",
                  }}
                />
                <p className={styles.p}>Make your own design!</p>
                <div className={styles.oneSection}>
                  <img alt="canva" src={canva} className={styles.forImgs} />
                  <p className={styles.p}>or</p>
                  <img alt="crello" src={crello} className={styles.forImgs} />
                </div>
                <hr
                  style={{
                    border: "1px solid #DDE1EB",
                  }}
                />
                <div className={styles.greenArea}>Choose from your library</div>
                <div>
                  <p className={styles.b}>
                    <b>Recommended: 1080x1080</b>
                  </p>
                  <p className={styles.p}>
                    Facebook is recommending this size to be in this pixel range
                    to get the best results possible.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className={styles.p}>Preview</p>
              <div className={styles.elem}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Avatar alt="Remy Sharp" src={userInfo.image} />
                  <div style={{ margin: "0 10px" }}>
                    <p
                      className={styles.userName}
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      {userInfo.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "#A09DA1",
                        margin: 0,
                      }}
                    >
                      {userInfo.title}
                    </p>
                  </div>
                </div>
                <div className={styles.mailArea}>
                  <div>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "#A09DA1",
                        margin: 0,
                      }}
                    >
                      {userInfo.mail}
                    </p>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      {userInfo.mail}
                    </p>
                  </div>
                  <Simplebutton
                    text="learn More"
                    COLOR="#A09DA1"
                    BG="#F4F4F4"
                    BORDERCOLOR="#A09DA1"
                  />
                </div>
                <hr
                  style={{
                    border: "1px solid #DDE1EB",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.elems}>
            <p className={styles.p}>Ad Name</p>
            <SimpleInput plac="Write a ad name " WIDTH="97%" />
          </div>
        </main>
      </div>
      <div className={styles.btnPart}>
        <Simplebutton text="Next step" BG="#1DAAFF" COLOR="#fff" />
      </div>
    </div>
  );
};

export default Adtype;
