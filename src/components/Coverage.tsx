import React, { FC, ChangeEvent, ReactNode } from "react";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface CoverageProps {
  formData: { type: string; amount: string; deductible: string };
  onChange: (e: SelectChangeEvent<string>) => void;
}

const Coverage: FC<CoverageProps> = ({ formData, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Coverage Options
      </Typography>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Coverage Type</InputLabel>
            <Select
              name="coverage.type"
              value={formData.type}
              onChange={onChange}
              required
            >
              <MenuItem value="">Select Coverage Type</MenuItem>
              <MenuItem value="Liability Only">Liability Only</MenuItem>
              <MenuItem value="Standard Coverage">Standard Coverage</MenuItem>
              <MenuItem value="Full Coverage">Full Coverage</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Liability</InputLabel>
            <Select
              name="coverage.amount"
              value={formData.amount}
              onChange={onChange}
              required
            >
              <MenuItem value="">Select Liability</MenuItem>
              <MenuItem value="25">$25/ $50/ $25</MenuItem>
              <MenuItem value="50">$50/ $100/ $50</MenuItem>
              <MenuItem value="150">$100/ $150/ $100</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Collision Deductible</InputLabel>
            <Select
              name="coverage.deductible"
              value={formData.deductible}
              onChange={onChange}
              required
            >
              <MenuItem value="">Select Option</MenuItem>
              <MenuItem value="250">$250</MenuItem>
              <MenuItem value="500">500</MenuItem>
              <MenuItem value="1000">$1000</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Coverage;
