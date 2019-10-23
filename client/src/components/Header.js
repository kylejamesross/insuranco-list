import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => (
  <header>
    <Typography variant="h2" component="h2">
      Insuranco-list{" "}
      <span role="img" aria-label="sunglasses-emoji">
        😎
      </span>
    </Typography>
    <Typography variant="h5" component="h5" gutterBottom>
      Coolest list app on the web!
    </Typography>
  </header>
);

export default Header;
