import {
  Box,
  Button,
  FormHelperText,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";

export const SectionContainer = styled(Box)({
  borderBottom: "1px solid #242020",
  marginBottom: "24px",
});

export const CardBox = styled(Box)({
  backgroundColor: "var(--black-color-200)",
  borderRadius: "12px",
  marginTop: "40px",
  padding: "30px 14px 25px 30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TokenOutlinedInput = styled(OutlinedInput)({
  ".MuiOutlinedInput-input": {
    color: "#fff",
    borderWidth: 1,
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontWeight: 500,
    padding: '6px'
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--light-white-color)",
    borderWidth: 1,
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--light-white-color)",
    borderWidth: 1,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--light-white-color)",
    borderWidth: 1,
  },
});

export const TokenButton = styled(Button)({
  color: "#fff",
  backgroundColor: "rgb(44, 47, 54)",
  borderColor: "#fff",
  borderRadius: "4px",
  boxShadow: "rgb(0 0 0 / 8%) 0px 6px 10px",
  padding: "0 10px",
  height: "46px",

  "&:hover": {
    backgroundColor: "rgb(64, 68, 79)",
  },

  img: {
    marginRight: "6px",
  },
});

export const SwapBox = styled(Box)({
  backgroundColor: "var(--black-color-200)",
  borderRadius: "12px",
  padding: "30px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const SwapButton = styled(Button)({
  color: "var(--purple-color-200)",
  backgroundColor: "var(--yellow-color-400)",
  padding: "8px 40px",
  borderRadius: "16px",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: "none",

  "&:hover": {
    color: "var(--yellow-color-400)",
    backgroundColor: "var(--purple-color-200)",
  },
  "&:disabled": {
    color: "rgb(72 72 72)",
    backgroundColor: "rgb(31 38 48)",
    cursor: "not-allowed",
    pointerEvents: "all",
  },
});

export const ErrorHelperText = styled(FormHelperText)({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "var(--light-white-color)",
  textAlign: "right",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "4px",
  paddingright: "8px",
});

export const ErrorHighlight = styled(Typography)({
  color: "#cf4a4a",
  fontSize: "13px",
  bgcolor: "#b18991",
  borderRadius: "5px",
  padding: "0 6px",
});
