import React from "react";
import Carousel from "react-multi-carousel";
import Game from "./Game";
import { gameTabsResponsive } from "../../config/constants";

const HighlightPanel = () => {
  return (
    <Carousel
      arrows={true}
      infinite={true}
      responsive={gameTabsResponsive}
      autoPlay={false}
      swipeable={true}
      partialVisible={false}
      shouldResetAutoplay={false}
      removeArrowOnDeviceType={["superSmallMobile", "tablet", "mobile"]}
      itemClass="carousel-item"
    >
      <Game
        img="/g4.png"
        title="Pac Man - World Cup 2022"
        score={4256}
        live={true}
      />
      <Game img="/g2.png" title="Super Mario Race" score={3244} live={true} />
      <Game
        img="/g3.png"
        title="Mega Man - Impact Man"
        score={1249}
        live={true}
      />
      <Game
        img="/g1.png"
        title="Earthworm Jim - All Bosses"
        score={10245}
        live={true}
      />
    </Carousel>
  );
};

export default HighlightPanel;
