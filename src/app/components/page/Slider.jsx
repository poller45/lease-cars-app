import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const Slider = () => {
	return (
		<div className="slider">
			<Swiper
				modules={[Navigation, Autoplay, EffectFade]}
				navigation
				autoplay={true}
				effect={"fade"}
				speed={800}
				slidesPerView={1}
				loop
			>
				<SwiperSlide>
					<img src="images/slide-1.jpg" alt="slide" className="swiper-slide" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="images/slide-2.jpg" alt="slide" className="swiper-slide" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="images/slide-3.jpg" alt="slide" className="swiper-slide" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
