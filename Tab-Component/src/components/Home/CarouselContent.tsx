import type { Carousel } from "../../json/Home/carouselData";

type Props = {
	data: Carousel[];
	index: number;
};

const CarouselContent = ({ data, index }: Props) => {
	const { title, subTitle, image } = data[index];
	return (
		<div className="container">
			<h3 className="text-center">{subTitle}</h3>
			<p className="text-center">{title}</p>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<img
					src={image}
					alt=""
					className="object-cover"
					style={{ width: "60%", height: "60%", borderRadius: "20px" }}
				/>
			</div>
		</div>
	);
};

export default CarouselContent;
