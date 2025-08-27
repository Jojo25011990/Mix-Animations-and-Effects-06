const Message = ({ text, isAccordion = null }) => {
	return (
		<p
			className={`w-10/12 text-2xl  transition-opacity duration-200 ${
				isAccordion
					? "w-full lowercase opacity-100 pt-5"
					: "uppercase opacity-0"
			}`}
		>
			{text}
		</p>
	);
};

export default Message;
