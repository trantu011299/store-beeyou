import Slider from "react-slick";
import ImageSlide from "../../../assets/images/slider.png"
import ImageSlideMobile from "../../../assets/images/slider-mobile.png"
import { SLIDERS } from "../../../data/data"

const SlickSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
        <Slider {...settings}>
          {
            SLIDERS.map((index) => {
                return (
                    <div key={index} className="slider">
                        <img className="image-desktop" src={ImageSlide} alt="banner"/>
                        <img className="image-mobile" src={ImageSlideMobile} alt="banner"/>
                    </div>
                )
              })
          }
        </Slider>
    );
}

export default SlickSlider