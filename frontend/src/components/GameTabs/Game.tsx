import React from 'react'
import { Box, Stack } from '@mui/material'
import { GameInfoTypography, GameInfoWrapper, GameTitleTypography, GameWrapper, LiveIcon, ScoreIcon } from '../../styles/components/gameTabs'

interface Props {
  img: string
  title: string
  score: number
  live: boolean
}
const Game: React.FC<Props> = (props) => {
  const { img, score, live, title } = props

  return (
    <GameWrapper direction='column' spacing={1} borderRadius={3}>
      <Box borderRadius={4}>
        <img className='rounded-img' src={`/games/${img}`} alt='IMG' width='100%' />
      </Box>

      <GameInfoWrapper direction='column' spacing={1}>
        <GameTitleTypography>{title}</GameTitleTypography>

        <Stack direction='row' spacing={2}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <ScoreIcon />
            <GameInfoTypography>{score}</GameInfoTypography>
          </Stack>
          
          <Stack direction='row' alignItems='center' spacing={1}>
            <LiveIcon />

            {live && (<GameInfoTypography>Live</GameInfoTypography>)}
          </Stack>
        </Stack>
      </GameInfoWrapper>
    </GameWrapper>
  )
}

export default Game
