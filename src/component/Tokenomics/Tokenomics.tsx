import * as React from "react";
import {
  Box,
  Link,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

export default function Tokenomics() {

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Box className="card-head card-padding">
      <Typography variant="h5" className="white-text bold-text">
          Tokenomics
        </Typography>
      </Box>
      <Box className="card-body card-padding">
        <TableContainer
          component={Paper}
          className="table-container"
          sx={{ marginTop: "10px" }}
        >
          <Table size="small" aria-label="">
            <TableBody>
              <TableRow>
                <TableCell scope="row">Token Name</TableCell>
                <TableCell align="right">Big Crypto Game Token</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Token Symbol</TableCell>
                <TableCell align="right">$CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Token Decimals</TableCell>
                <TableCell align="right">18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Token Address</TableCell>
                <TableCell align="right">
                  <Link href="https://bscscan.com/address/0xF0997486D784C0EC4aD2ee5B413bD318813dd518" target="_blank" sx={{ wordBreak: 'break-all', color: "#35bcff" }} >
                    0xF0997486D784C0EC4aD2ee5B413bD318813dd518
                  </Link>
                  <Typography className="help">
                    (Do not send BUSD to the token address!)
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Total Supply</TableCell>
                <TableCell align="right">5,000,000 $CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Tokens For Presale</TableCell>
                <TableCell align="right">335,800 $CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Tokens For Liquidity</TableCell>
                <TableCell align="right">223,612 $CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Price during Presale</TableCell>
                <TableCell align="right">1 BUSD = 1.46 $CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Starting price at market listing</TableCell>
                <TableCell align="right">1 BUSD = 1.39 $CRYPTO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Locked Tokens Schedule</TableCell>
                <TableCell align="right">
                  <Link href="https://docs.bigcrypto.game/transparent-tokenomics" target="_blank" sx={{ color: "#35bcff"}}>
                    See Tokenomics in our Whitepaper
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
