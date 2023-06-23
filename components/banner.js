'use client'
import { useEffect } from 'react';
import Image from 'next/image';

const Banner = ({ ttl, txt, bg }) => {
	const handleScroll = () => {
		const scrollPosition = window.pageYOffset;
		const banner = document.querySelector('#banner1');
		if (banner) {
			banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		
		<div
			id="banner1"
			className={`flex justify-center items-center z-0 h-[30rem] md:h-[46rem] bannerStyle ${bg}`}
		>
			<div className="container mx-auto p-4 z-10">
				<p className="text-red-600 text-3xl md:text-4xl font-bold ">{ttl}</p>

				<p className="text-white text-4xl md:text-6xl font-semibold mt-8 ">{txt}</p>
			</div>
		</div>
	);
};
export default Banner;