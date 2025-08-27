import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = () => {
	const [activeQuestion, setActiveQuestion] = useState(null);

	const accordionQuestions = [
		{
			id: 1,
			question: "Question 01",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			id: 2,
			question: "Question 02",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			id: 3,
			question: "Question 03",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
	];

	const toggleQuestion = (index) =>
		setActiveQuestion(activeQuestion === index ? null : index);

	return (
		<div className="w-full max-w-[500px] flex flex-col gap-10">
			{accordionQuestions.map((accordionQuestion, index) => {
				const isActiveQuestion = activeQuestion === index;
				return (
					<div
						key={accordionQuestion.id}
						className={`relative w-full bg-white text-black rounded-lg shadow-[0px_0px_5px_white] px-10 py-5 overflow-hidden transition-all duration-300 ${
							isActiveQuestion
								? "h-[100px] accordion-box"
								: "h-[50px]"
						}`}
					>
						<h3 className="w-full text-4xl font-bold uppercase">
							{accordionQuestion.question}
						</h3>
						<p className="w-full pt-5 text-2xl accordion-text">
							{accordionQuestion.answer}
						</p>

						<button
							type="button"
							className="absolute top-5 right-15 cursor-pointer p-0.5 transition-all duration-300"
							onClick={() => toggleQuestion(index)}
						>
							<FaPlus
								className={`absolute text-3xl transition-all duration-300 ${
									isActiveQuestion
										? "opacity-0 invisible"
										: "opacity-100 visible"
								}`}
							/>
							<FaMinus
								className={`absolute text-3xl transition-all duration-300 ${
									isActiveQuestion
										? "opacity-100 visible"
										: "opacity-0 invisiblee"
								}`}
							/>
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
