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
  Button,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import ReactPlayer from "react-player/youtube";

export default function Introduction() {
  return (
    <Box className="card card-padding">
      <Box className="flex">
        <Typography variant="h5" className="white-text bold-text">
          Big Crypto Game Presale
        </Typography>
      </Box>
      <Box className="flex justify-between mt-10" sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
        <Box className="flex">
          <Link href="https://bigcrypto.game/" target="_blank" className="icon-style">
            <LanguageIcon
              sx={{ color: "#35bcff", width: "25px", height: "25px" }}
            />
          </Link>
          <Link href="https://www.bigcrypto.game/t" target="_blank" className="icon-style">
            <TelegramIcon
              sx={{ color: "#35bcff", width: "25px", height: "25px" }}
            />
          </Link>
        </Box>
        <Box className="flex">
          <Link
            href="https://www.bigcrypto.game/certik/"
            className="no-decoration"
            target="_blank"
          >
            <Button
              variant="contained"
              className="text-small"
              sx={{ margin: "0 10px", backgroundColor: "#003ab4", 
                "&:hover": {
                  backgroundColor: '#195ab4'
                } }}
            >
              Audit by Certik
            </Button>
          </Link>
          <Link
            href="https://www.bigcrypto.game/certik/"
            className="no-decoration"
            target="_blank"
          >
            <Button
              variant="contained"
              className="text-small"
              sx={{ margin: "0 10px", backgroundColor: "#003ab4", "&:hover": {
                backgroundColor: '#195ab4'
              } }}
            >
              KYC by SolidProof
            </Button>
          </Link>
        </Box>
      </Box>
      <Typography variant="subtitle2" className="main-text mt-10">
        The Big Crypto Game is a cutting edge Play-To-Earn NFT game on the BSC
        network, with a genius Omni-Balanced Oracle™️ system for a sustainable
        game economy. By just playing a few minutes each day, you can earn
        $CRYPTO tokens, which you can convert into any currency you
        want. Our ambition is to create the longest lasting play-to-earn NFT
        game on the BSC network with a lucrative ROI for players.
      </Typography>
      <Box id="main-trailer">
        <Box>
          <ReactPlayer
            url="https/youtube://www.youtube.com/watch?v=GiJyDYNjv6A"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Typography variant="h5" className="white-text bold-text">
        What's so special about this game?
      </Typography>
      <Typography variant="subtitle1" className="main-text">
        1. Play Forever Earn Forever with our automated Reincarnation system,
        enabling players to vote about the economy
        <br />
        2. A brand new Smart Claim System with variable taxes depending on
        player's investment behaviour
        <br />
        3. An advanced in-game Referral System with two tiers, making it easy to
        refer friends and earn passive commissions
        <br />
        4. Our proven Omni-Balanced Oracle™ with an upgraded transparent economy
        status information panel Read more in our
        <Link
          href="https://docs.bigcrypto.game/"
          className="no-decoration"
          target="_blank"
          sx={{ color: "#35bcff"}}
        >
          &nbsp;Whitepaper&nbsp;
        </Link>
      </Typography>
      <TableContainer
        component={Paper}
        className="table-container"
        sx={{ marginTop: "10px" }}
      >
        <Table size="small" aria-label="">
          <TableBody>
            <TableRow>
              <TableCell scope="row">Soft Cap</TableCell>
              <TableCell align="right">160,000 BUSD</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Hard Cap</TableCell>
              <TableCell align="right">230,000 BUSD</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Presale Start Time</TableCell>
              <TableCell align="right">2022.11.23 at 3:00pm (UTC)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                Tier 1 Round (Guaranteed whitelist for approx 240 wallets, 750 BUSD max each, around 180,000 BUSD max in total)
              </TableCell>
              <TableCell align="right">60 minutes duration from start</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                Tier 2 Round (Guaranteed whitelist for approx 960 wallets, 50 BUSD max each, 48,000 BUSD max in total)
              </TableCell>
              <TableCell align="right">60 minutes duration from start</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                Tier 3 &amp; Tier 4 Round (Non-Guaranteed whitelist for approx 300 wallets, some 750 BUSD, some 50 BUSD max each, 60,000 max in total)
              </TableCell>
              <TableCell align="right">30 minutes duration after T1 &amp; T2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Presale End Time</TableCell>
              <TableCell align="right">2022.11.23 at 5:00pm (UTC)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Listing On</TableCell>
              <TableCell align="right">
                <Link href="https://pancakeswap.finance/swap?outputCurrency=0xF0997486D784C0EC4aD2ee5B413bD318813dd518&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" target="_blank" sx={{ color: "#35bcff"}}>
                  Pancakeswap
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Liquidity Percent</TableCell>
              <TableCell align="right">70%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Liquidity Lock</TableCell>
              <TableCell align="right">
                6 months
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Whitelisted Wallets</TableCell>
              <TableCell align="right">
                <Link href="https://www.bigcrypto.game/whitelistv1" target="_blank" sx={{ color: "#35bcff"}}>
                  Show list of wallets
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
