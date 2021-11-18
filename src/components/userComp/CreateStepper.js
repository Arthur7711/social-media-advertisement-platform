import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = [
  "Platform",
  "Objective",
  "Audience",
  "Ad Type",
  "Review & Publish",
];

export default function CreateStepper({children,activeStep,setActiveStep}) {
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
                  background: activeStep === index ? "#1DAAFF" : "#F4F4F4",
                  borderRadius: 6,
                  color: activeStep === index ? "#fff" : "#C4C4CA",
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
        {activeStep + 1}
        {children}
      </div>
    </Box>
  );
}
