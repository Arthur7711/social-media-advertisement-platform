import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";

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
                  background: "#F4F4F4",
                  borderRadius: 6,
                  color: "#C4C4CA",
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
      <div>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
      </div>
    </Box>
  );
}
