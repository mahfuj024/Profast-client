import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="mt-4 md:mt-8 lg:mt-14">
            <Carousel autoPlay showArrows={false} showThumbs={false} stopOnHover infiniteLoop showStatus={false} showIndicators={false}>
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
            </Carousel>
        </div>
    )
}

export default Banner