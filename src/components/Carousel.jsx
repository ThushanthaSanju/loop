import { Carousel } from "antd";
import img1 from "./../assets/img1.jpg";
import img2 from "./../assets/img2.jpg";
import img3 from "./../assets/img3.jpg";

const imageStyle = {
  width: "100%",
  height: "300px", // Set to desired height
  objectFit: "cover",
};

const CarouselImage = () => (
  <Carousel autoplay autoplaySpeed={1500}>
    <div>
      <img src={img1} alt="Image 1" style={imageStyle} />
    </div>
    <div>
      <img src={img2} alt="Image 1" style={imageStyle} />
    </div>
    <div>
      <img src={img3} alt="Image 1" style={imageStyle} />
    </div>
  </Carousel>
);
export default CarouselImage;
