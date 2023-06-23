'use client'

import aws from '@/public/images/Features/aws.png';
import azure from '@/public/images/Features/azure.png';
import googlecloud from '@/public/images/Features/googlecloud.png';
import mongodb from '@/public/images/Features/mongodb.png';
import sanity from '@/public/images/Features/sanity.png';

import javascript from '@/public/images/Features/javascript.png';
import angular from '@/public/images/Features/angular.png';
import firebase from '@/public/images/Features/firebase.png';
import python from '@/public/images/Features/python.png';
import mui from '@/public/images/Features/mui.svg';
import nodejs from '@/public/images/Features/nodejs.png';
import react from '@/public/images/Features/react.png';
import vuejs from '@/public/images/Features/vuejs.png';
import stripe from '@/public/images/Features/stripe.png';
import prime from '@/public/images/Features/prime.png';
import tailwind from '@/public/images/Features/tailwind.png';
import graphql from '@/public/images/Features/graphql.png';

import { MotionViewRotate, MotionView, SetFontSize } from '@/utils/utils';
import Image from 'next/image'


const crlcArr = [
	{ src: javascript, txt: 'JavaScript', rot: 0, w: 5, z: 0 },
	{ src: angular, txt: 'Angular', rot: 19, w: 5.2, z: 1 },
	{ src: firebase, txt: 'Firebase', rot: 39, w: 5.4, z: 2 },
	{ src: python, txt: 'Python', rot: 60, w: 5.6, z: 3 },
	{ src: mui, txt: 'MaterialUI', rot: 82, w: 5.8, z: 4 },
	{ src: nodejs, txt: 'Node.js', rot: 105, w: 6, z: 5 },
	{ src: mongodb, txt: 'MongoDB', rot: 129, w: 6.2, z: 6 },
	{ src: vuejs, txt: 'Vue', rot: 154, w: 6.4, z: 5 },
	{ src: stripe, txt: 'Stripe', rot: 178, w: 6.6, z: 4 },
	{ src: tailwind, txt: 'Tailwindcss', rot: 203, w: 6.8, z: 3 },
	{ src: prime, txt: 'PrimeReact', rot: 229, w: 7, z: 2 },
	{ src: graphql, txt: 'GraphQL', rot: 255, w: 7.2, z: 1 },
	{ src: react, txt: 'React', rot: 282, w: 7.4, z: 0 },
];

const crclCoud = [
	{ cl: 'cloudCircle group z-20', src: aws, txt: 'Amazon Web Services' },
	{ cl: 'cloudCircle group', src: azure, txt: 'Microsoft Azure' },
	{ cl: 'cloudCircle group', src: googlecloud, txt: 'Google Cloud' },
	{ cl: 'cloudCircle group', src: sanity, txt: 'Sanity' },
];

const Features = () => {
	const CrclDiv = ({ className, img, txt }) => {
		return (
			<div className={className}>
				<Image
					src={img}
					alt=""
					className="absolute object-cover 
                                group-hover:opacity-50"
				/>
				<div
					className="transition-all transform w-fit whitespace-nowrap 
								translate-y-8 opacity-0
								group-hover:opacity-100
								group-hover:-translate-y-16 bg-slate-300  rounded-lg p-2"
					style={{
						boxShadow:
							'0px 3px 5px rgb(0 0 0 / 6%), 0px 7px 9px rgb(0 0 0 / 12%), 0px 20px 25px -8px rgb(0 0 0 / 18%)',
					}}
				>
					<h5 className="text-sm text-black">{txt}</h5>
				</div>
			</div>
		);
	};

	const CrclDiv1 = ({ className, img, txt, rot, w, z }) => {
		return (
			<div
				className={className}
				style={{
					transform: `rotate(${rot}deg) translate(270px) rotate(-${rot}deg)`,
					width: `${w}rem`,
					height: `${w}rem`,
					zIndex: z,
				}}
			>
				<Image
					src={img}
					alt=""
					className="absolute object-cover 
                                group-hover:opacity-50"
				/>
				<div
					className="transition-all transform w-fit whitespace-nowrap 
								translate-y-8 opacity-0
								group-hover:opacity-100
								group-hover:-translate-y-16 bg-slate-300  rounded-lg p-2"
					style={{
						boxShadow:
							'0px 3px 5px rgb(0 0 0 / 6%), 0px 7px 9px rgb(0 0 0 / 12%), 0px 20px 25px -8px rgb(0 0 0 / 18%)',
					}}
				>
					<h5 className="text-sm text-black">{txt}</h5>
				</div>
			</div>
		);
	};

	return (
		<div className="pb-20 pt-44 md:pb-44 lg:pt-28">
			<div className="grid grid-cols-3 gap-16 md:gap-32 lg:gap-2 container mx-auto flex flex-wrap md:pb-24 lg:pb-10 lg:pt-44  relative">
				{/* left side */}
				<div className="col-span-3 lg:col-span-1 p-4 md:p-3 flex items-center">
					<MotionView dr={0.5} dl={0.5} yIn="2rem">
						<p
							className="font-semibold mb-3"
							style={{ fontSize: SetFontSize('1.125rem', '1.225rem', '1.325rem') }}
						>
							Our stack contains the most progressive technologies today to build and
							design modern web applications.
						</p>

						<p className="text-lg tracking-wider mb-3">
							We take pride in developing enterprise web services and small business
							web solutions to meet your specific needs.
						</p>

						<p className="text-lg tracking-wider mb-3">
							Smart choices of latest technologies and deployment of standardized
							coding frameworks, help us ensure that our processes and solutions are
							scalable and future-proof, enhancing the user experience.
						</p>
					</MotionView>
				</div>
				<div className="col-span-3 lg:col-span-2 md:p-4 lg:p-2 justify-center items-center  md:mt-20 lg:mt-0 hidden md:flex">
					<MotionViewRotate dr={0.4} rt={45} dl={0.5}>
						<div className="sepia-0 relative left-36">
							{crlcArr.map((x, i) => {
								return (
									<CrclDiv1
										key={i}
										className="circle1   drop-shadow-lg group"
										rot={x.rot}
										txt={x.txt}
										img={x.src}
										w={x.w}
										z={x.z}
									/>
								);
							})}
						</div>
					</MotionViewRotate>
					<MotionViewRotate dr={0.4} rt={-45} dl={0.5}>
						<div className="w-72 h-72 rounded-full z-20 sepia-0 customShadow bg-slate-100 shadow-md mainCircle hidden md:flex">
							{crclCoud.map((x, i) => {
								return <CrclDiv key={i} className={x.cl} img={x.src} txt={x.txt} />;
							})}

							<div
								className="top-28 font-black text-2xl text-center opacity-50"
								style={{ right: '4.3rem' }}
							>
								<p>
									Cloud Based
									<br />
									Apps
								</p>
							</div>
						</div>
					</MotionViewRotate>
				</div>

				<div className="bg-indigo-600 blr" style={{ bottom: '-6rem' }}></div>
			</div>

			{/******************************************************* small Screen */}
			
			<div
				className="w-60 h-60 rounded-full z-20 sepia-0 customShadow bg-slate-100 shadow-md m-auto
							justify-center items-center flex md:hidden mt-16 relative"
			>
				<CrclDiv className="cloudCircle -top-16 left-16" img={aws} />
				<CrclDiv className="cloudCircle -left-12" img={azure} />
				<CrclDiv className="cloudCircle -bottom-12" img={googlecloud} />
				<CrclDiv className="cloudCircle -right-12" img={sanity} />
				<div className="font-black text-lg text-center opacity-50">
					<p>
						Cloud Based
						<br />
						Apps
					</p>
				</div>
			</div>

			<div className=" flex flex-wrap p-4 mt-16 flex md:hidden justify-center">
				{crlcArr.map((x, i) => {
					return (
						<div
							key={i}
							className="w-20 h-20 border-4 border-slate-200 bg-white rounded-full m-2 flex items-center"
						>
							<Image src={x.src} alt="" className="scale-75" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Features;