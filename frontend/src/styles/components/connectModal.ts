import { Box, Button, Link, styled, Typography } from '@mui/material'

export const ModalContentBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'rgb(25, 27, 31)',
  border: '1px solid var(--black-color-100)',
  borderRadius: '6px',
  padding: '20px 32px',
})

export const HeadContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 0 24px',
})

export const TitleTypography = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: 1.2,
  marginLeft: 'auto',
  color: '#fff',
})

export const CloseButton = styled(Button)({
  padding: 0,
  marginLeft: 'auto',
  minWidth: 0,
  color: '#fff',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: 'transparent',
    color: 'var(--yellow-color-400)',
  }
})

export const NetworkContainer = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px 20px',
})

export const ItemContainer = styled(Box)({
  border: '1px solid rgb(64, 68, 79)',
  backgroundColor: 'rgb(44, 47, 54)',
  borderRadius: '6px',
  padding: '15px 0',
  cursor: 'pointer',

  '&:hover': {
    borderColor: 'var(--yellow-color-400)',
    color: 'var(--yellow-color-400)',

    '.MuiTypography-root': {
      color: 'var(--yellow-color-400)',
    }
  },
})

export const ItemLink = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
})

export const ItemTitleTypography = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.2,
  color: '#fff',
})
