import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import QuoteFlow from "./components/QuoteFlow";

const App: React.FC = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleGetQuote = () => {
    setShowQuoteForm(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Navbar />
      {!showQuoteForm ? (
        <LandingPage onGetQuote={handleGetQuote} />
      ) : (
        <QuoteFlow />
      )}
    </Box>
  );
};

export default App;
