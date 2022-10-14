import { Box, Button, List, ListItemButton, OutlinedInput, styled, Typography } from '@mui/material'

export const ModalContentBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  backgroundColor: 'rgb(25, 27, 31)',
  border: '1px solid rgb(33, 36, 41)',
  borderRadius: '24px',
  padding: '10px 0 30px',
})

export const HeadContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 20px 20px',
})

export const TitleTypography = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.2,
  color: '#fff',
})

export const CloseButton = styled(Button)({
  padding: 0,
  minWidth: 0,
  color: '#fff',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: 'transparent',
  }
})

export const BodyContainer = styled(Box)({
  padding: '0 20px',
})

export const SearchInput = styled(OutlinedInput)({
  color: '#fff',
  fontSize: '18px',
  padding: '0 8px',
  borderRadius: '20px',
  
  '.MuiOutlinedInput-input::placeholder': {
    color: 'var(--light-white-color)',
    fontFamily: 'Inter, sans-serif',
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(64, 68, 79)',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(64, 68, 79)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(33, 114, 229)',
    borderWidth: 1,
  },
})

export const TokenButtonsWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '16px',
})

export const TokenButton = styled(Button)({
  borderRadius: '12px',
  padding: '4px 8px',
  borderColor: 'rgb(64, 68, 79)',
  color: '#fff',

  '&:hover': {
    backgroundColor: 'rgb(44, 47, 54)',
    borderColor: 'rgb(64, 68, 79)',
  },

  '&.active': {
    color: 'rgb(143, 150, 172)',
    backgroundColor: 'rgb(64, 68, 79)',
    filter: 'grayscale(1)',
  }
})

export const TokeButtonTypo = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  marginLeft: '8px',
})

export const ListContainer = styled(Box)({
  maxHeight: '450px',
  overflow: 'auto',
  borderBottom: '1px solid rgb(64, 68, 79)',
})

export const TokenList = styled(List)({
  width: '100%',
  height: '400px',
  backgroundColor: 'rgb(25, 27, 31)',
})

export const TokenListButton = styled(ListItemButton)({
  paddingLeft: '20px',

  '&:hover': {
    backgroundColor: 'rgb(44, 47, 54)',
  }
})

export const ListItemBody1Typo = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.2,
  color: '#fff',
})

export const ListItemBody2Typo = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.2,
  color: 'rgb(143, 150, 172)',
})

export const ListItemBalanceTypo = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.2,
  color: 'rgb(143, 150, 172)',
})
