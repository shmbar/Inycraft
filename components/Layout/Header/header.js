'use client'
import { useEffect, useState, useRef } from 'react';
import useWindowSize from '../../screensize.js';
import menuIcon from '@/public/images/Others/menuIcon.png';
import IYNlogo from '@/public/images/Logo/IYNlogo.png';
import IYNlogoWhite from '@/public/images/Logo/IYNlogoWhite.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { hdr, hdr1 } from '../../text';
import { motion } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';

import styles from '@/components/Layout/layout.module.css'

const Header = (props) => {
	const size = useWindowSize();
	const [scrnMobile, setScrnMobile] = useState(null);
	const [showMenusm, setShowMenusm] = useState(false);

	const router = useRouter();
	const ref = useRef();
	useClickOutside(ref, () => setShowMenusm(false));

	useEffect(() => {
		size.width < 720 ? setScrnMobile(true) : setScrnMobile(false);
	}, [size]);

	return (
		<div
			className={`w-full h-16 mx-auto px-10 xl:px-60 flex items-center fixed bg-white z-10 ${
				styles.headerTransition
			} gap-4 ${props.scroll ? 'top-0' : styles.down}
			 `} //
			style={
				props.headerView
					? { backgroundColor: 'transparent' }
					: { backgroundColor: 'rgb(255 255 255)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }
			}
		>
			<div
				className="justify-start items-center cursor-pointer hover:opacity-75"
				onClick={() => router.push('/')}
			>
				<Image
					src={props.headerView ? IYNlogoWhite : IYNlogo}
					alt="IYNlogo"
					width="100"
					className="scale-150 opacity-80"
				//	priority
					 placeholder="blur"
  					blurDataURL={'../../../images/Logo/IYNlogo.png'}
				/>
			</div>
			{!scrnMobile ? ( // not mobile resolution
				<div className="flex w-full justify-center gap-16 items-center">
					{hdr1.map((x, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: '-1rem' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: i - 0.9 * i }}
						>
							<Link
								className={`cursor-pointer whitespace-nowrap hover:opacity-60 font-medium ${
									props.headerView
										? 'text-white hover:opacity-70'
										: 'text-inherit'
								}								`}
								href={x.link}
								key={i}
							>
								{x.txt}
							</Link>
						</motion.div>
					))}
				</div>
			) : (
				<div className="flex w-full justify-end">
					<Image
						src={menuIcon}
						alt="menuIcon"
						width="35"
						height="auto"
						onClick={() => setShowMenusm(!showMenusm)}
						className={`cursor-pointer ${
							showMenusm
								? '-rotate-170 duration-1000 pointer-events-none'
								: 'rotate-180 duration-200'
						} `}
					/>
					{showMenusm && ( //show mobile Menu
						<div
							className="absolute mr-1 mt-12 rounded-lg drop-shadow-2xl animate-menuBar bg-gray-500"
							ref={ref}
						>
							{hdr.map((x, i) => (
								<Link
									className={`opacity-80 cursor-pointer text-base text-white p-3 pl-2 grid grid-flow-col ${
										i !== hdr.length - 1 ? 'border-b border-gray-200' : null
									}`}
									key={i}
									href={x.link}
									onClick={() => setShowMenusm(false)}
								//	as={'/' + x.txt}
								>
									{x.txt}
								</Link>
							))}
						</div>
					)}
				</div>
			)}
			{size?.width>720 && (
				<Link
					className="bg-red-600 p-1 rounded-3xl px-4 cursor-pointer opacity-80 shad hover:opacity-60"
					href="/contact"
				//	as={'/contact'}
				>
					<p className="whitespace-nowrap text-white font-semibold ">Contact Us</p>
				</Link>
			)}
		</div>
		//
	);
};

export default Header;