import React, { FC, ChangeEvent } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

interface PersonalInfoProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dob: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ formData, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            fullWidth
            label="First Name"
            name="personalInfo.firstName"
            value={formData.firstName}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            required
            placeholder="John"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="personalInfo.lastName"
            value={formData.lastName}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            required
            placeholder="Smith"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Email"
            name="personalInfo.email"
            value={formData.email}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            required
            placeholder="john.smith@example.com"
            type="email"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="personalInfo.phoneNumber"
            value={formData.phoneNumber}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            required
            placeholder="(123) 456-7890"
            type="tel"
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="personalInfo.dob"
            value={formData.dob}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            required
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: "1900-01-01", max: "2010-01-01" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
