import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div className="">
        <img
          className="h-96 lg:h-[500px] object-cover"
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-96 lg:h-[500px] object-cover"
          src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-96 lg:h-[500px] object-cover"
          src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default MainSlider;
