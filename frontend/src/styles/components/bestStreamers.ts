import { Box, Stack, styled, Typography } from '@mui/material'

export const SectionContainer = styled(Box)({
  paddingTop: '80px',
  paddingBottom: '80px',
})

export const StreamerWrapper = styled(Stack)({
  paddingRight: '16px',

  '@media screen and (max-width: 375px)': {
    paddingRight: 0,
  },
})

export const StreamerNameTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1.5,
  color: '#fff',
})
