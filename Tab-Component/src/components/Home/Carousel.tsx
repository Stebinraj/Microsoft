import Slider from "react-slick";
import settings from "../../json/Home/slickSliderSettings";
import type { Carousel } from "../../json/Home/carouselData";

type Props = {
	data: Carousel[];
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	activeIndex: number;
};

const Carousel = ({ data, setIndex, activeIndex }: Props) => {
	return (
		<div className="slider-container container">
			<Slider {...settings}>
				{data.map(({ title }, index) => {
					return (
						<div
							className={`card text-center text-decoration-none ${
								index === activeIndex && "active"
							}`}
							key={title}
							onClick={() => setIndex(index)}
						>
							<h6>{title}</h6>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Carousel;
