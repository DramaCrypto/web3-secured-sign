import React from "react";
import Carousel from "react-multi-carousel";
import SectionTitleTypo from "../SectiontTitleTypo";
import PopularGame from "./PopularGame";
import { popularGameResponsive } from "../../config/constants";
import { SectionContainer } from "../../styles/components/popularGames";
import { useUserData } from "state/user/hooks";

const PopularGames = () => {
  const { games } = useUserData();

  return (
    <SectionContainer>
      <SectionTitleTypo>Popular Games</SectionTitleTypo>
      <Carousel
        arrows={true}
        infinite={true}
        responsive={popularGameResponsive}
        autoPlay={false}
        swipeable={true}
        partialVisbile={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={["superSmallMobile", "tablet", "mobile"]}
        itemClass="carousel-item"
        containerClass="popular-games-carousel-list"
      >
        {games.map((game, index) => (
          <PopularGame key={index} {...game} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default PopularGames;
