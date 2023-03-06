import React from "react";
import { easeInOut, motion, Variants } from "framer-motion";

const clapVariants: Variants = {
	initial: {
		rotate: 0,
		x: 0,
		y: 0,
	},
	final: {
		rotate: 30.52,
		x: "-77px",
		y: -23,
	},
};

function Clap() {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			width='243'
			height='288'
			fill='none'
			viewBox='0 0 243 288'>
			<motion.g
				variants={clapVariants}
				initial='initial'
				animate='final'
				className='!origin-bottom-left'
				transition={{ duration: 0.2, ease: easeInOut, delay: 4 }}>
				<rect
					width='215'
					height='25.061'
					x='2.079'
					y='111.241'
					fill='#fff'
					stroke='#000'
					strokeWidth='3'
					rx='3.5'
					transform='rotate(-30.52 2.079 111.241)'></rect>
				<path
					fill='#000'
					d='M4.025 115.778H9.873000000000001V149.77800000000002H4.025z'
					transform='rotate(-81.163 4.025 115.778)'></path>
				<path
					fill='#000'
					d='M21.025 103.778H26.872999999999998V137.77800000000002H21.025z'
					transform='rotate(-81.163 21.025 103.778)'></path>
				<path
					fill='#000'
					d='M40.025 92.778H45.873V126.778H40.025z'
					transform='rotate(-81.163 40.025 92.778)'></path>
				<path
					fill='#000'
					d='M58.025 81.778H63.873V115.778H58.025z'
					transform='rotate(-81.163 58.025 81.778)'></path>
				<path
					fill='#000'
					d='M77.025 70.778H82.873V104.778H77.025z'
					transform='rotate(-81.163 77.025 70.778)'></path>
				<path
					fill='#000'
					d='M96.025 59.778H101.873V93.77799999999999H96.025z'
					transform='rotate(-81.163 96.025 59.778)'></path>
				<path
					fill='#000'
					d='M113.025 49.778H118.873V83.77799999999999H113.025z'
					transform='rotate(-81.163 113.025 49.778)'></path>
				<path
					fill='#000'
					d='M129.025 39.778H134.87300000000002V73.77799999999999H129.025z'
					transform='rotate(-81.163 129.025 39.778)'></path>
				<path
					fill='#000'
					d='M146.025 29.778H151.87300000000002V63.778H146.025z'
					transform='rotate(-81.163 146.025 29.778)'></path>
				<path
					fill='#000'
					d='M163.025 20.778H168.87300000000002V54.778H163.025z'
					transform='rotate(-81.163 163.025 20.778)'></path>
			</motion.g>
			<rect
				width='217'
				height='144'
				x='12.525'
				y='142.5'
				stroke='#000'
				strokeWidth='3'
				rx='5.5'></rect>
			<rect
				width='215'
				height='25.061'
				x='13.798'
				y='144.617'
				fill='#fff'
				stroke='#000'
				strokeWidth='3'
				rx='3.5'
				transform='rotate(.065 13.798 144.617)'></rect>
			<path
				fill='#000'
				d='M13.165 149.514H19.012999999999998V183.514H13.165z'
				transform='rotate(-50.577 13.165 149.514)'></path>
			<path
				fill='#000'
				d='M33.906 147.833H39.754V181.833H33.906z'
				transform='rotate(-50.577 33.906 147.833)'></path>
			<path
				fill='#000'
				d='M55.859 148.032H61.707V182.032H55.859z'
				transform='rotate(-50.577 55.86 148.032)'></path>
			<path
				fill='#000'
				d='M76.952 147.721H82.8V181.721H76.952z'
				transform='rotate(-50.577 76.952 147.721)'></path>
			<path
				fill='#000'
				d='M98.906 147.919H104.754V181.919H98.906z'
				transform='rotate(-50.577 98.906 147.919)'></path>
			<path
				fill='#000'
				d='M120.859 148.117H126.707V182.117H120.859z'
				transform='rotate(-50.577 120.859 148.117)'></path>
			<path
				fill='#000'
				d='M140.582 148.159H146.43V182.159H140.582z'
				transform='rotate(-50.577 140.582 148.159)'></path>
			<path
				fill='#000'
				d='M159.444 147.691H165.292V181.691H159.444z'
				transform='rotate(-50.577 159.444 147.691)'></path>
			<path
				fill='#000'
				d='M179.167 147.733H185.01500000000001V181.733H179.167z'
				transform='rotate(-50.577 179.167 147.733)'></path>
			<path
				fill='#000'
				d='M198.382 148.635H204.23000000000002V182.635H198.382z'
				transform='rotate(-50.577 198.382 148.635)'></path>
			<path stroke='#000' d='M12.016 192.5L228.016 188.5'></path>
			<path stroke='#000' d='M75.525 195L75.525 243'></path>
			<path stroke='#000' d='M165.525 192.99L166.525 242.99'></path>
			<path stroke='#000' d='M11.02 256.5L228.02 254.5'></path>
		</motion.svg>
	);
}

export default Clap;
