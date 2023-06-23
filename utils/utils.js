'use client'
import { useRef } from 'react';
import useWindowSize from '../components/screensize';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export const SetFontSize = (sm, md, lg) => {
	const size = useWindowSize();

	return size.width > 1400 ? lg : size.width <= 1400 && size.width > 992 ? md : sm;
};

///////////////////////////////////////////////////////////////////////

export const MotionFrame = ({ dr, dl, yIn, children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: yIn }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: dr, delay: dl }}
		>
			{children}
		</motion.div>
	);
};

export const MotionView = ({ children, dr, dl, yIn, tf }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: tf==null? true: false, margin: '-150px 0px' });

	return (
		<section ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: yIn }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yIn }}
				transition={isInView && { duration: dr, delay: dl,}}	

			>
				{children}
			</motion.div>
		</section>
	);
};
////////////////////////////////////////////////////////////////////////////
export const MotionViewRL = ({ children, dr, dl, xIn }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

	return (
		<section ref={ref}>
			<motion.div
				initial={{ opacity: 0, x: xIn }}
				animate={isInView && { opacity: 1, x: 0 }}
				transition={isInView && { duration: dr, delay: dl }}
			>
				{children}
			</motion.div>
		</section>
	);
};

export const MotionViewRotate = ({ children, dl, dr, rt}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

	return (
		<section ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: '2rem', rotate: rt }}
				animate={isInView && { opacity: 1, y: 0, rotate: 0 }}
				transition={isInView && { duration: dr, delay: dl }}
			>
				{children}
			</motion.div>
		</section>
	);
};
