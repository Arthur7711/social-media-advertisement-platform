import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useSelector, useDispatch } from "react-redux";
import { videoId } from "../../features/introduction/introductionSlice";

const steps = [
  "What is ADCLOUD?",
  "How to use ADCLOUD?",
  "How to create an ad?",
  "How to optimize an ad?",
];

export default function HorizontalNonLinearStepper() {
  const [completed, setCompleted] = React.useState({});

  const loginingVideo = useSelector((state) => state.introduction);
  const dispatch = useDispatch();

  const handleStep = (step) => () => {
    dispatch(videoId(step));
  };
  console.log(loginingVideo.videoId, "id");
  return (
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Stepper nonLinear activeStep={loginingVideo.videoId}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <div style={{ cursor: "pointer" }} onClick={handleStep(index)}>
              <p
                style={{
                  background:
                    loginingVideo.videoId === index ? "#1DAAFF" : "#F4F4F4",
                  borderRadius: 6,
                  color: loginingVideo.videoId === index ? "#fff" : "#C4C4CA",
                  padding: "10px 5px",
                }}
              >
                {label}
              </p>
              <StepButton color="inherit"></StepButton>
            </div>
          </Step>
        ))}
      </Stepper>
      <div
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          width="900"
          height="500"
          controls
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 28px rgba(101, 101, 101, 0.05)",
            borderRadius: 6,
          }}
        >
          <source
            // src={`/Videos/video${loginingVideo.videoId}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </Box>
  );
}
