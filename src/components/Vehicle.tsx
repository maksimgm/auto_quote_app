import React, { FC, ChangeEvent, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { makes, models } from "../constants/vehicleData";

interface VehicleProps {
  formData: { make: string; model: string; year: string; vin: string };
  onChange: (
    e:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Vehicle: FC<VehicleProps> = ({ formData, onChange }) => {
  const [selectedMake, setSelectedMake] = useState(formData.make);
  useEffect(() => {
    setSelectedMake(formData.make);
  }, [formData.make]);

  const years = Array.from(
    { length: new Date().getFullYear() - 1990 + 1 },
    (_, i) => (new Date().getFullYear() - i).toString()
  );

  const filteredModels = formData.make
    ? models[formData.make as keyof typeof models] || []
    : [];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Vehicle Information
      </Typography>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Make</InputLabel>
            <Select
              name="vehicle.make"
              value={formData.make}
              onChange={(e) => {
                onChange(e as SelectChangeEvent<string>);
                setSelectedMake(e.target.value as string);
              }}
              required
            >
              <MenuItem value="">Select Make</MenuItem>
              {makes.map((make) => (
                <MenuItem key={make} value={make}>
                  {make}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Model</InputLabel>
            <Select
              name="vehicle.model"
              value={formData.model}
              onChange={onChange as (e: SelectChangeEvent<string>) => void}
              required
              disabled={!formData.make}
            >
              <MenuItem value="">Select Model</MenuItem>
              {filteredModels.map((model: string) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Year</InputLabel>
            <Select
              name="vehicle.year"
              value={formData.year}
              onChange={onChange as (e: SelectChangeEvent<string>) => void}
              required
            >
              <MenuItem value="">Select Year</MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            margin="normal"
            label="VIN"
            name="vehicle.vin"
            value={formData.vin}
            onChange={
              onChange as (
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => void
            }
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Vehicle;
