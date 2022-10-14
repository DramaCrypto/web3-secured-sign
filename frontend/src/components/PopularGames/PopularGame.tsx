import { Typography } from '@mui/material'
import { GameConfig } from 'config/types'
import React from 'react'
import { GameWrapper } from '../../styles/components/popularGames'

const PopularGame: React.FC<GameConfig> = ({ image, name, link }) => {
  return (
    <GameWrapper>
      <a href={link} target='_blank'>
        <img src={`/games/${image}`} alt='IMG' width='100%' className='pop_game' />
        <Typography sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
        }}>{name}</Typography>
      </a>
    </GameWrapper>
  )
}

export default PopularGame
