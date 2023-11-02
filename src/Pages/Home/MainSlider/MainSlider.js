import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../Assets/Main-Slider/img1.jpg";
import img2 from "../../../Assets/Main-Slider/img2.jpg";
import img3 from "../../../Assets/Main-Slider/img3.jpg";
import img4 from "../../../Assets/Main-Slider/img4.jpg";

const MainSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={false}
      showThumbs={false}
      swipeable={true}
      useKeyboardArrows={true}
      showStatus={false}
      showArrows={true}
      showIndicators={true}
      emulateTouch={true}
    >
      <div>
        <img className="h-96 lg:h-[500px] object-cover" src={img3} alt="" />
      </div>
      <div>
        <img className="h-96 lg:h-[500px] object-cover" src={img1} alt="" />
      </div>
      <div>
        <img className="h-96 lg:h-[500px] object-cover" src={img2} alt="" />
      </div>
      <div>
        <img className="h-96 lg:h-[500px] object-cover" src={img4} alt="" />
      </div>
    </Carousel>
  );
};

export default MainSlider;
