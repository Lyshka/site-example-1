'use client';

import {motion} from 'framer-motion';

import styles from "../styles"
import {fadeIn} from "../utils/motion"

const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className={`relative ${
			active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
			} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
		onClick={() => handleClick(id)}
	>
		<img
			src={imgUrl}
			alt={title}
			className="absolute w-full h-full object-cover rounded-[24px]"
		/>

		{active !== id ? (
			<h3 className='font-semibold sm:text-[26px] text-lg text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
				{title}
			</h3>
		) : (
				<div className='absolute bottom-0 flex p-8 justify-center items-center w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] hover:opacity-20'>
					<div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-4`}>
						<img
							src="/headset.svg"
							alt="headset"
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>

					<p className='font-bold text-base leading-5 text-white uppercase'>
						View
					</p>

					<h2 className='mt-6 font-semibold sm:text-4xl text-2xl text-white'>
						{title}
					</h2>
				</div>
		)}
	</motion.div>
);

export default ExploreCard;
