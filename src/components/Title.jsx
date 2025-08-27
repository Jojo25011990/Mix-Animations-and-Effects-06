const Title = ({ text, isSection = true, isAccordion = null }) => {
	return isSection ? (
		<h2 className="w-full absolute top-20 left-1/2 -translate-x-1/2 text-9xl font-bold text-center -tracking-[.1rem] title-01">
			{text}
		</h2>
	) : (
		<h3
			className={`w-full text-4xl font-bold uppercase  transition-opacity duration-200 ${
				isAccordion ? "opacity-0 text-center" : "opacity-100 text-left"
			}`}
		>
			{text}
		</h3>
	);
};

export default Title;
