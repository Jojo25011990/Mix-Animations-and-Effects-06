import Button from "./Button";
import Message from "./Message";
import Title from "./Title";
import MickeyImg from "../assets/Mickey Mouse Css Art.png";

const ImageCard = () => {
	return (
		<div className="relative w-full max-w-[450px] h-[300px] border-[5px] border-white  text-white overflow-hidden container">
			<img src={MickeyImg} alt="Mickey Mouse Face Css Art" />

			<div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col justify-around items-center text-center text-neutral-50">
				<Title
					text={"Mickey Mouse"}
					isSection={false}
					isAccordion={true}
				/>
				<Message text={"Css Art Mickey Mouse Face ❤️"} />
				<Button isSection={false} />
			</div>
		</div>
	);
};

export default ImageCard;
