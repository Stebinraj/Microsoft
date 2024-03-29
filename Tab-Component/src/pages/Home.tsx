import { useState } from "react";
import carouselData from "../json/Home/carouselData";
import Carousel from "../components/Home/Carousel";
import CarouselContent from "../components/Home/CarouselContent";

const Home = () => {
	const [index, setIndex] = useState(0);

	return (
		<>
			<br />
			<Carousel data={carouselData} setIndex={setIndex} activeIndex={index} />
			<br />
			<CarouselContent data={carouselData} index={index} />
		</>
	);
};

export default Home;
