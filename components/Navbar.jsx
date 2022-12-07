'use client';

import {motion} from 'framer-motion';

import styles from "../styles"
import {navVariants} from "../utils/motion"

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial="hidden"
		whileInView={"show"}
		className={`${styles.xPaddings} py-8 relative`}
	>
		<div className='absolute w-1/2 inset-0 gradient-01' />
		
		<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
			<img
				src="/search.svg"
				alt="search"
				className={`${styles.animateHover} w-6 h-6 object-contain`}
			/>

			<h2 className='font-extrabold text-2xl leading-8 text-white cursor-pointer z-50'>
				LOGO
			</h2>

			<img
				src="/menu.svg"
				alt="menu"
				className={`${styles.animateHover} w-6 h-6 object-contain`}
			/>
		</div>
	</motion.nav>
);

export default Navbar;
