import React from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import dateFormat from "dateformat";
import SectionTitleTypo from "../SectiontTitleTypo";
import {
  CardBox,
  ScoreRow,
  SectionContainer,
  SubtitleTypography,
  Value1Typography,
  Value2Typography,
} from "../../styles/components/infoPanel";
import { useUserData } from "state/user/hooks";
import Swap from "components/Swap";
import { getBalanceNumber } from "utils/formatBalance";

const InfoPanel = () => {
  const [filter, setFilter] = React.useState("");
  const { coinBalance, games, history } = useUserData();

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <SectionContainer>
      <Grid item sm={12} md={12}>
        <CardBox>
          <SectionTitleTypo>Personal Data</SectionTitleTypo>
          <Swap />
        </CardBox>
      </Grid>
    </SectionContainer>
  );
};

export default InfoPanel;
