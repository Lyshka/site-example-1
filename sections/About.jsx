'use client';

import {motion} from 'framer-motion';

import {TypingText} from "../components"
import styles from "../styles"
import {fadeIn, staggerContainer} from "../utils/motion"

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className='gradient-02 z-0' />

		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView={"show"}
			viewport={{once: false, amount: 0.25}}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TypingText
				title="| About"
				textStyles={"text-center"}
			/>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-2 font-normal sm:text-[20px] text-[18px] text-center text-secondary-white leading-10"
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet molestiae ipsam atque accusamus repudiandae excepturi quasi nihil harum.<span className='font-extrabold text-white'>Expedita at error minus aspernatur</span> numquam officia id ullam temporibus? Esse repellendus ea libero deleniti quisquam amet quasi aliquid obcaecati corrupti tempore? Mollitia, dignissimos voluptatem. Reprehenderit <span className='font-extrabold text-white'>commodi, perferendis quod accusamus natus quo dolorum</span> corrupti est nesciunt placeat quidem consequatur architecto debitis deserunt fugiat, vitae, iste tempore a? Nisi voluptas saepe nihil cupiditate, exercitationem dolor temporibus minima repellat. Vero obcaecati porro, fugit dolorum officiis voluptates esse eos officia iusto quia architecto tempore atque corrupti, <span className='font-extrabold text-white'>commodi, perferendis quod</span> accusamus natus quo dolorumpossimus accusantium exercitationem in praesentium numquam, commodi modi?
			</motion.p>

			<motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				src="/arrow-down.svg"
				alt="Arrow Down"
				className="w-5 h-7 object-contain mt-12"
			/>
		</motion.div>
	</section>
);

export default About;
