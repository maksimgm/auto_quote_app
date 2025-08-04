import React, { useState, ReactNode, FC, ChangeEvent } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import StepIndicator from "./StepIndicator";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Vehicle from "./Vehicle";
import Coverage from "./Coverage";
import Review from "./Review";

const QuoteFlow: FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      phoneNumber: "",
    },
    address: { street: "", city: "", state: "", zip: "" },
    vehicle: { make: "", model: "", year: "", vin: "" },
    coverage: { type: "", amount: "", deductible: "" },
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | { name?: string; value: string };
    const { name, value } = target;

    if (!name) {
      console.warn("Input element missing 'name' attribute:", target);
      return;
    }

    const [section, field] = name.split(".");

    if (!section || !field) {
      console.error("Name attribute not in 'section.field' format:", name);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof formData],
        [field]: value,
      },
    }));
  };

  const handleNavigate = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const calculateDummyQuote = () => {
      const basePremium = 50;
      const coverageAmount = parseInt(formData.coverage.amount) || 0;
      return basePremium + coverageAmount;
    };
    alert(
      `Quote submitted! Estimated Premium: $${calculateDummyQuote()} / month`
    );
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Auto Insurance Quote
      </Typography>
      <Box sx={{ mt: 4 }}>
        <StepIndicator currentStep={currentStep} />
        {currentStep === 1 && (
          <PersonalInfo
            formData={formData.personalInfo}
            onChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <Address formData={formData.address} onChange={handleChange} />
        )}
        {currentStep === 3 && (
          <Vehicle formData={formData.vehicle} onChange={handleChange} />
        )}
        {currentStep === 4 && (
          <Coverage formData={formData.coverage} onChange={handleChange} />
        )}
        {currentStep === 5 && (
          <Review
            formData={formData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          {currentStep === 5 ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleNavigate}
            >
              Submit Application
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNavigate}>
              {"Next"}
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default QuoteFlow;
