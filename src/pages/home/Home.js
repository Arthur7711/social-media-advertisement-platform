import React, { useState } from "react";
import Bluearea from "../../components/blueArea/BlueArea";
import Smallcard from "../../components/cards/smallCard/SmallCard";
import Header from "../../components/header/Header";
import Mainarea from "../../components/mainArea/MainArea";
import Myfooter from "../../components/myFooter/MyFooter";
import Paymantpart from "../../components/paymantPart/PaymantPart";
import Socialpart from "../../components/socialPart/SocialPart";
import Staps from "../../components/staps/Staps";
import Workersarea from "../../components/workersArea/WorkersArea";
import styles from "./Home.module.css";

const Home = () => {
  const [selectedId, setSelectedId] = useState(0);
  const types = [
    {
      title: "Create",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
    {
      title: "Discover",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
    {
      title: "Understand",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
    {
      title: "Automate",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
  ];
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
        {types.map((el, i) => (
          <Smallcard
            key={i}
            title={el.title}
            description={el.desc}
            BGCOLOR={
              selectedId === i &&
              "linear-gradient(92.21deg, #005792 6.65%, #04118a 106.65%)"
            }
            COLOR={selectedId === i && "#fff"}
            myState={i}
            workState={(elem) => setSelectedId(elem)}
          />
        ))}
        {/* <Smallcard
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
        /> */}
      </div>
      <Mainarea />
      <Bluearea />
      <Paymantpart />
      <Workersarea />
      <Myfooter />
    </>
  );
};

export default Home;
