import { Box, styled } from '@mui/material'

export const SectionContainer = styled(Box)({
  paddingTop: '80px',
})

export const GameWrapper = styled(Box)({
  transition: 'all .2s ease-in-out',
  cursor: 'pointer',
  paddingRight: '30px',

  '@media screen and (max-width: 375px)': {
    paddingRight: 0,
  },

  '&:hover': {
    transformOrigin: 'center 30%',
    transform: 'scale(1.15)',
  }
})
