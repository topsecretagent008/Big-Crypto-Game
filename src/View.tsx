import * as React from "react";
import Box from "@mui/material/Box";

import {
  Container,
  Grid
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "./actions/contractActions";
import { useTheme, useMediaQuery } from "@mui/material";

import AppBar from "./component/AppBar/AppBar";
import SecurityAlert from "./component/SecurityAlert/SecurityAlert";
import Introduction from "./component/Introduction/Introduction";
import Tokenomics from "./component/Tokenomics/Tokenomics";
import TimeContent from "./component/Status/TimeContent";
import Instructions from "./component/Tokenomics/Instructions";
import Footer from "./component/Footer/Footer";

const View = () => {
  const theme = useTheme();
  const isSmallerThanMD = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isSmallerThanMD) {
      dispatch(updateStore({ isSmallerThanMD: isSmallerThanMD }));
    }
  }, [isSmallerThanMD]);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#151617",
      }}
    >
      <AppBar />
      <Container maxWidth="lg" sx={{ marginTop: {xs: '140px', sm: '80px'}}}>
        <SecurityAlert />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8} sx={{ flexBasis: {xs: '100%', md: '66.66%'}, maxWidth: {xs: '100%', md: '66.66%'}}}>
              <Introduction />
              <Tokenomics />
              <Instructions />
            </Grid>
            <Grid item xs={4} className="sticky" sx={{ flexBasis: {xs: '100%', md: '33.33%'}, maxWidth: {xs: '100%', md: '33.33%'}}}>
              <TimeContent />
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default View;
