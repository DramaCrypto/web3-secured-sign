import React from 'react'
import Carousel from 'react-multi-carousel'
import Streamer from './Streamer'
import SectionTitleTypo from '../SectiontTitleTypo'
import { SectionContainer } from '../../styles/components/bestStreamers'
import { bestStreamersResponsive } from '../../config/constants'

const BestStreamers = () => {
  return (
    <SectionContainer>
      <SectionTitleTypo>Best Streamers</SectionTitleTypo>
      <Carousel
        arrows={true}
        infinite={true}
        responsive={bestStreamersResponsive}
        autoPlay={false}
        swipeable={true}
        partialVisbile={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={['superSmallMobile', 'tablet', 'mobile']}
        itemClass='carousel-item'
      >
        <Streamer
          img='/gamers/s1.png'
          name='Ivan'
        />
        <Streamer
          img='/gamers/s2.png'
          name='Maisy'
        />
        <Streamer
          img='/gamers/s3.png'
          name='Fifi'
        />
        <Streamer
          img='/gamers/s4.png'
          name='Charlie'
        />
        <Streamer
          img='/gamers/s5.png'
          name='Jac'
        />
        <Streamer
          img='/gamers/s1.png'
          name='Ivan'
        />
        <Streamer
          img='/gamers/s2.png'
          name='Maisy'
        />
        <Streamer
          img='/gamers/s3.png'
          name='Fifi'
        />
        <Streamer
          img='/gamers/s4.png'
          name='Charlie'
        />
        <Streamer
          img='/gamers/s5.png'
          name='Jac'
        />
        <Streamer
          img='/gamers/s1.png'
          name='Ivan'
        />
        <Streamer
          img='/gamers/s2.png'
          name='Maisy'
        />
        <Streamer
          img='/gamers/s3.png'
          name='Fifi'
        />
        <Streamer
          img='/gamers/s4.png'
          name='Charlie'
        />
        <Streamer
          img='/gamers/s5.png'
          name='Jac'
        />
      </Carousel>
    </SectionContainer>
  )
}

export default BestStreamers
