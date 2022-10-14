import React from 'react'
import { StreamerNameTypography, StreamerWrapper } from '../../styles/components/bestStreamers'

interface Props {
  img: string
  name: string
}

const Streamer: React.FC<Props> = ({ img, name }) => {
  return (
    <StreamerWrapper
      direction='column'
      alignItems='center'
      spacing={1}
    >
      <img src={img} alt="Avatar" width='100%' />
      <StreamerNameTypography>
        {name}
      </StreamerNameTypography>
    </StreamerWrapper>
  )
}

export default Streamer
