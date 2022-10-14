import { Box, Stack, styled, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import AlbumIcon from '@mui/icons-material/Album'

export const SectionContainer = styled(Box)({
  width: '100%',
  paddingTop: '60px',
  paddingBottom: '80px',

  '.MuiTab-root': {
    textTransform: 'none',
    color: 'var(--light-white-color)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 800,
    lineHeight: 1.0,
    paddingBottom: '0px',
    padding: '1px 0',
    minWidth: 0,

    '&.Mui-selected': {
      color: '#fff',
    },
  },

  '.MuiTab-root + .MuiTab-root': {
    marginLeft: '36px',
  },

  '.MuiTabs-indicator': {
    background: 'var(--yellow-color-400)',
    height: '3px',
    borderRadius: '2px',
    boxShadow: '0px 1px 4px #fff',
  },
})

export const GameWrapper = styled(Stack)({
  paddingRight: '20px',

  '@media screen and (max-width: 375px)': {
    paddingRight: 0,
  },
})

export const GameInfoWrapper = styled(Stack)({
  backgroundColor: 'var(--black-color-200)',
  borderRadius: '12px',
  padding: '10px 12px',
})

export const ScoreIcon = styled(RemoveRedEyeIcon)({
  color: '#58eeff',
  width: '16px',
  height: '16px',
})

export const LiveIcon = styled(AlbumIcon)({
  color: '#e24757',
  width: '16px',
  height: '16px',
})

export const GameTitleTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1.2,
  color: '#fff',
})

export const GameInfoTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: 'var(--light-white-color)',
  lineHeight: 'normal',
})
