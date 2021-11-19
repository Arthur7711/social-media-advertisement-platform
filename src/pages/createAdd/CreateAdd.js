import React from "react";
import CreateStepper from "../../components/userComp/CreateStepper";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./CreateAdd.module.css";
import Platform from "../../components/platform/Platform";
import Objective from "../../components/objective/Objective";
import Adcloud from "../../components/adcloud/Adcloud";

const Createadd = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <PersistentDrawerLeft>
      <div className={styles.create}>
        <div className={styles.head}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.1352 0.279364C1.73958 -0.519027 0.000305176 0.488916 0.000305176 2.09827V15.2518C0.000305176 16.8601 1.73853 17.8691 3.1352 17.0707L8.66107 13.9138H10.4779V17.581C10.4779 18.2757 10.7539 18.942 11.2451 19.4332C11.7363 19.9244 12.4026 20.2004 13.0973 20.2004C13.792 20.2004 14.4582 19.9244 14.9495 19.4332C15.4407 18.942 15.7167 18.2757 15.7167 17.581V13.8091C16.9859 13.5462 18.1126 12.8223 18.8793 11.7772C19.646 10.7321 19.9982 9.44 19.868 8.15042C19.7377 6.86084 19.1342 5.66527 18.174 4.79463C17.2138 3.92399 15.9651 3.44004 14.6689 3.43626H8.66107L3.1352 0.279364ZM9.43013 5.53178H14.6689C15.5026 5.53178 16.3021 5.86294 16.8915 6.45242C17.481 7.0419 17.8122 7.8414 17.8122 8.67505C17.8122 9.5087 17.481 10.3082 16.8915 10.8977C16.3021 11.4872 15.5026 11.8183 14.6689 11.8183H9.43013V5.53178ZM7.33461 12.2584L2.09582 15.2518V2.09827L7.33461 5.09172V12.2584ZM13.6212 13.9138V17.581C13.6212 17.7199 13.566 17.8532 13.4677 17.9514C13.3695 18.0497 13.2362 18.1049 13.0973 18.1049C12.9583 18.1049 12.8251 18.0497 12.7268 17.9514C12.6286 17.8532 12.5734 17.7199 12.5734 17.581V13.9138H13.6212Z"
              fill="url(#paint0_linear_259_727)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_259_727"
                x1="25.2014"
                y1="-3.59499"
                x2="-0.767497"
                y2="-4.23965"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#005792" stop-opacity="0.35" />
                <stop stop-color="#005792" stop-opacity="0.4" />
                <stop offset="0.0001" stop-color="#2FABFF" />
                <stop offset="1" stop-color="#04118A" />
              </linearGradient>
            </defs>
          </svg>
          <h1>Create an Ad</h1>
        </div>
        <p className={styles.p}>
          Select your audience type and setup your target audience.
        </p>
        <CreateStepper
          activeStep={activeStep}
          setActiveStep={(el) => {
            setActiveStep(el);
          }}
        >
          <main style={{ display: activeStep + 1 === 1 ? "block" : "none" }}>
            <Platform />
          </main>
          <main style={{ display: activeStep + 1 === 2 ? "block" : "none" }}>
            <Objective />
          </main>
          <main style={{ display: activeStep + 1 === 3 ? "block" : "none" }}>
            <Adcloud />
          </main>
          <main style={{ display: activeStep + 1 === 4 ? "block" : "none" }}>
            <Adcloud />
          </main>
        </CreateStepper>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Createadd;
