import { Box, Select, styled, Typography } from "@mui/material";

export const SectionContainer = styled(Box)({
  paddingTop: "40px",
  paddingBottom: "80px",
});

export const CardBox = styled(Box)({
  backgroundColor: "var(--black-color-200)",
  borderRadius: "12px",
  padding: "30px 34px 30px 30px",
});

export const ScoreRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "20px",
  paddingBottom: "5px",
  borderBottom: "1px solid #242020",
});

export const SubtitleTypography = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: 1.5,
  color: "var(--light-white-color)",
});

export const FilterSelect = styled(Select)({
  color: "var(--light-white-color)",
  backgroundColor: "rgb(25, 27, 31)",
  borderRadius: "12px",

  "&:hover": {
    backgroundColor: "rgb(33, 35, 40)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: 1,
    borderColor: "rgb(64, 68, 79)",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(64, 68, 79)",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(64, 68, 79)",
  },
  ".MuiSvgIcon-root": {
    color: "var(--light-white-color)",
  },
});

export const Value1Typography = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: 1.5,
  color: "#fff",
});

export const Value2Typography = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: 1.5,
  marginLeft: "20px",
  color: "#fff",
});
