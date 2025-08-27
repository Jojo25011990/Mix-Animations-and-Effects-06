import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import Pokeball from "./components/Pokeball";
import Title from "./components/Title";
import Accordion from "./components/Accordion";

const App = () => {
	return (
		<>
			{/* Section Button */}
			<section className="relative w-full h-screen flex items-center justify-center bg-[#222]">
				<Title text={"Glowing Button"} />
				<Button />
			</section>
			{/* End of Section Button */}

			{/* Section Pokeball */}
			<section className="relative w-full h-screen flex items-center justify-center bg-[#222]">
				\
				<Title text={"CssBattle Pokeball"} />
				<Pokeball />
			</section>
			{/* End of Section Pokeball */}

			{/* Section Image Card */}
			<section className="relative w-full h-screen flex items-center justify-center bg-[#222]">
				\
				<Title text={"Image Card"} />
				<ImageCard isSection={false} />
			</section>
			{/* End of Section Image Card */}

			{/* Section Accordion */}
			<section className="relative w-full h-screen flex items-center justify-center bg-[#222]">
				\
				<Title text={"Accordion"} />
				<Accordion />
			</section>
			{/* End of Section  Accordion */}
		</>
	);
};

export default App;
