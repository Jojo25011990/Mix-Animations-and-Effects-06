const Pokeball = () => {
	return (
		<div className="relative w-[200px] h-[200px]">
			<div className="absolute top-[50%] left-[50%] translate-[-50%] z-20 w-[60px] h-[60px] rounded-full border-[10px] border-[#781728] bg-[#F6DF96]"></div>
			<div className="absolute top-[50%] left-[50%] translate-[-50%] z-[5] w-[180px] h-[20px] bg-[#781728] line"></div>
			<div className="absolute left-[50%] translate-x-[-50%] w-[200px] h-[100px] bg-[#D25B70] half-circle-01"></div>
			<div className="absolute bottom-0 left-[50%] translate-x-[-50%] rotate-[180deg] w-[200px] h-[100px] bg-[white] half-circle-02"></div>
		</div>
	);
};

export default Pokeball;
