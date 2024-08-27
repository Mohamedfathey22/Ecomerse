
import Slider from "react-slick";
import slider1 from "./../../assets/images/slider-image-1.jpeg"
import slider2 from "./../../assets/images/slider-image-2.jpeg"
import slider3 from "./../../assets/images/slider-image-3.jpeg"

import image1 from "./../../assets/images/blog-img-1.jpeg"
import image2 from "./../../assets/images/blog-img-2.jpeg"
export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
  };
  return (
    <section className="pb-5 px-4">

      <div className="flex flex-wrap justify-center items-center">
        <div className="w-2/3">
        <Slider {...settings}>
<div>
  <img src={slider1} className=" w-full h-[400px] " alt="" />
</div>
<div>
  <img src={slider2} className=" w-full h-[400px] " alt="" />
</div>
<div>
  <img src={slider3} className=" w-full h-[400px] " alt="" />
</div>
    </Slider>
        </div>
        <div className="w-1/3">
        <div>
          <img src={image1} className="w-full block h-[200px]" alt="" />
        </div>
        <div>
          <img src={image2} className="w-full block h-[200px]" alt="" />
        </div>
        
        </div>
      </div>
     
    </section>

  );
}