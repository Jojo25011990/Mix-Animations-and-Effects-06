const Button = ({ isSection = true }) => {
	return isSection ? (
		<a
			href="#"
			className="relative z-10 inline-block text-5xl font-bold uppercase text-red-primary py-[2.5rem] px-[4rem] border-2 transition-all duration-500 delay-[0s]   cursor-pointer glowing-button"
		>
			Button
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</a>
	) : (
		<a
			href="#"
			className="text-xl font-bold uppercase py-5 px-10 bg-red-primary transition-all duration-200 opacity-0"
		>
			See more
		</a>
	);
};

export default Button;
