import React, { FC } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

interface AddressProps {
  formData: { street: string; city: string; state: string; zip: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Address: FC<AddressProps> = ({ formData, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Address Details
      </Typography>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Street Address"
            name="address.street"
            value={formData.street}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            placeholder="123 Main St"
          />
        </Grid>

        <Grid size={4}>
          <TextField
            fullWidth
            label="City"
            name="address.city"
            value={formData.city}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            placeholder="Beverly Hills"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            fullWidth
            label="State"
            name="address.state"
            value={formData.state}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            placeholder="CA"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            fullWidth
            label="ZIP Code"
            name="address.zip"
            value={formData.zip}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            placeholder="90210"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Address;
