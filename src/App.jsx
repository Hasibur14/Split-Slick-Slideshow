import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

const App = () => {
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);

  useEffect(() => {
    const handleMouseWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        // Scroll down
        sliderLeftRef.current.slickNext();
        sliderRightRef.current.slickPrev(); // Sync reverse slider
      } else {
        // Scroll up
        sliderLeftRef.current.slickPrev();
        sliderRightRef.current.slickNext(); // Sync reverse slider
      }
    };

    // Add event listener for mouse wheel
    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  const settingsLeft = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: false,
    speed: 1000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  const settingsRight = {
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#110101]">
      {/* Left Slideshow (Top-Down) */}
      <div className="absolute inset-0 z-10 slideshow slideshow-left w-1/2">
        <Slider {...settingsLeft} ref={sliderLeftRef}>
          <div className="item h-screen">
            <div className="left-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg"
                className="object-cover w-full h-full"
                alt="slide-1"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="left-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg"
                className="object-cover w-full h-full"
                alt="slide-2"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="left-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg"
                className="object-cover w-full h-full"
                alt="slide-3"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="left-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg"
                className="object-cover w-full h-full"
                alt="slide-4"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Right Slideshow (Bottom-Up) */}
      <div className="absolute inset-0 z-10 slideshow slideshow-right w-1/2 right-0">
        <Slider {...settingsRight} ref={sliderRightRef}>
          <div className="item h-screen">
            <div className="right-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg"
                className="object-cover w-full h-full"
                alt="slide-1-reverse"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="right-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg"
                className="object-cover w-full h-full"
                alt="slide-2-reverse"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="right-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg"
                className="object-cover w-full h-full"
                alt="slide-3-reverse"
              />
            </div>
          </div>
          <div className="item h-screen">
            <div className="right-half">
              <img
                src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg"
                className="object-cover w-full h-full"
                alt="slide-4-reverse"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default App;
