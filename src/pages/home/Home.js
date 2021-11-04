import React from "react";
import Smallcard from "../../components/cards/smallCard/SmallCard";
import Header from "../../components/header/Header";
import Mainarea from "../../components/mainArea/MainArea";
import Socialpart from "../../components/socialPart/SocialPart";
import Staps from "../../components/staps/Staps";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <Socialpart />
      <Staps />
      <div className={styles.midArea}>
        <div className={styles.roundedAreas}>
          <div>
            <b>Our Official Partners:</b>
            <p>Who believes in our vision as much as we do.</p>
          </div>
        </div>
        <div className={styles.rounds}>
          <span>Partners</span>
        </div>
        <div className={styles.rounds}></div>
        <div className={styles.rounds}></div>
      </div>
      <div className={styles.secMidArea}>
        <Smallcard
          title="Create"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
          BGCOLOR="linear-gradient(92.21deg, #005792 6.65%, #04118a 106.65%)"
          COLOR="#fff"
        />
        <Smallcard
          title="Discover"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
          COLOR="#005792"
        />
        <Smallcard
          title="Understand"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
          COLOR="#005792"
        />
        <Smallcard
          title="Automate"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
          COLOR="#005792"
        />
      </div>
      <Mainarea />
    </>
  );
};

export default Home;
