'use client';

import {motion} from 'framer-motion';

import {textContainer, textVariant2} from "../utils/motion"

export const TypingText = ({title, textStyles}) => (
	<motion.p
		variants={textContainer}
		className={`font-normal text-3xl text-secondary-white ${textStyles}`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span
				key={index}
				variants={textVariant2}
			>
				{letter === " " ? "\u00A0" : letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({title, textStyles}) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView={"show"}
		className={`mt-2 font-bold md:text-[84px] text-[60px] text-white ${textStyles}`}
	>
		{title}
	</motion.h2>
);
