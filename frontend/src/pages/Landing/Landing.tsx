import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../../components/Header";
import PopularGames from "../../components/PopularGames";
import BestStreamers from "../../components/BestStreamers";
import GameTabs from "../../components/GameTabs";
import InfoPanel from "../../components/InfoPanel";
import Swap from "../../components/Swap";
import { usePollUserData } from "state/user/hooks";
import { useEagerConnect } from "hooks/useEagerConnect";

const Landing = () => {
  useEagerConnect();
  // usePollUserData();

  return (
    <Box>
      <Box sx={{ bgcolor: "var(--black-color-800)" }}>
        <Container>
          <Header />
        </Container>
      </Box>

      <Box sx={{ borderBottom: "1px solid var(--black-color-800)" }}>
        <Container>
          <InfoPanel />
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
