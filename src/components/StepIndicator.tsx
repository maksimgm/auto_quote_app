import React, { FC } from "react";
import { Box } from "@mui/material";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
      {[1, 2, 3, 4, 5].map((step) => (
        <Box
          key={step}
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: currentStep === step ? "#1976d2" : "#ccc",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 1,
            fontSize: "12px",
            transition: "background-color 0.3s ease",
          }}
        >
          {step}
        </Box>
      ))}
    </Box>
  );
};

export default StepIndicator;
