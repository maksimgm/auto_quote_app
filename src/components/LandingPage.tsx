import React, { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

interface LandingSectionProps {
  onGetQuote: () => void;
}

const LandingSection: FC<LandingSectionProps> = ({ onGetQuote }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          color="primary"
        >
          Welcome to AutoShield Insurance
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Get fast, affordable auto insurance quotes tailored to your needs.
          Protect your journey with us today!
        </Typography>
        <Box sx={{ textAlign: "center", mb: 6 }}></Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Why Choose AutoShield?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid component="div">
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Competitive Rates
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enjoy some of the lowest rates with customizable options.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  24/7 Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We’re here around the clock to help you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Easy Claims
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  File claims quickly with our process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Box
        sx={{
          color: "primary",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>
            Ready to Protect Your Drive?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onGetQuote}
          >
            Get Your Free Quote
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingSection;
