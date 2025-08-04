import React, { FC } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

interface ReviewProps {
  formData: {
    personalInfo: { firstName: string; lastName: string };
    address: { street: string; city: string; state: string; zip: string };
    vehicle: { make: string; model: string; year: string };
    coverage: { type: string; amount: string };
  };
  onSubmit: () => void;
  onPrevious: () => void;
}

const Review: FC<ReviewProps> = ({ formData, onSubmit, onPrevious }) => {
  const calculateDummyQuote = () => {
    const basePremium = 50;
    const coverageAmount = parseInt(formData.coverage.amount) || 0;
    return basePremium + coverageAmount;
  };

  const quote = calculateDummyQuote();

  return (
    <Card sx={{ mt: 4, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          Your Insurance Quote
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom align="center">
          ${quote.toFixed(2)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          align="center"
        >
          per month
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List disablePadding>
          <ListItem>
            <ListItemText primary="Liability Coverage" />
            <Typography variant="body1">$45.20</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Collision Coverage" />
            <Typography variant="body1">$32.10</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Comprehensive Coverage" />
            <Typography variant="body1">$12.20</Typography>
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItem>
            <ListItemText primary="Total Monthly Premium" />
            <Typography variant="body1" color="primary">
              ${quote.toFixed(2)}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Review;
