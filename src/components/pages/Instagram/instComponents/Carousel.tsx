import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasicExample(): JSX.Element {
  return (
    <>
      <TECarousel
        // showControls
        // showIndicators
        // ride="carousel"
        className="h-full"
      >
        <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left h-full -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              className="block w-full h-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left h-full hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full h-full"
              alt="..."
              style={{ height: "100%" }}
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left h-full -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full h-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
