import { Box, Button, styled, Typography } from '@mui/material'

export const HeaderContainer = styled(Box)({
  position: 'relative',
  borderRadius: '24px',
  padding: '30px 40px 25px 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  
  '@media screen and (min-width: 576px)': {
    flexDirection: 'row',
    gap: 0,
  },
})

export const TitleTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '38px',
  fontWeight: 700,
  lineHeight: 1.5,
  color: '#fff',
})

export const SubtitleTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.2,
  color: '#6e8aba',
})

export const ConnectButton = styled(Button)({
  color: 'var(--purple-color-200)',
  background: 'var(--yellow-color-400)',
  borderRadius: '24px',
  textTransform: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.5,
  padding: '10px 24px',
  boxShadow: '0px 4px 6px #10213f, -3px -2px 5px #324566, 2px -2px 8px #324566',
  
  '&:hover': {
    background: 'var(--purple-color-200)',
    color: 'var(--yellow-color-400)',
    boxShadow: '0px 4px 6px #10213f, -3px -2px 5px #324566, 2px -2px 8px #324566',
  },
})
