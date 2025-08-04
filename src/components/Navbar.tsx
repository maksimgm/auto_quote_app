import React, { FC } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar: FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AutoShield Insurance
        </Typography>
        <Button color="inherit">1-888-SHIELD-1</Button>
        <Button color="inherit">quotes@shieldauto.com</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
