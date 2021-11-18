import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = [
  "What is ADCLOUD?",
  "How to use ADCLOUD?",
  "How to create an ad?",
  "How to optimize an ad?",
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <div style={{ cursor: "pointer" }} onClick={handleStep(index)}>
              <p
                style={{
                  background: activeStep===index ? "#1DAAFF" : "#F4F4F4",
                  borderRadius: 6,
                  color: activeStep===index ? "#fff" :"#C4C4CA",
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
          <source src={`/Videos/video${activeStep + 1}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Box>
  );
}
