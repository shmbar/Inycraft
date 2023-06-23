'use client'
import { useState } from 'react';
import TitlePart from '@/components/title';
import { MotionView } from '@/utils/utils';

import react from '@/public/images/Features/react.png';
import angular from '@/public/images/Features/angular.png';
import vuejs from '@/public/images/Features/vuejs.png';

import python from '@/public/images/Features/python.png';
import nodejs from '@/public/images/Features/nodejs.png';
import javascript from '@/public/images/Features/javascript.png';

import aws from '@/public/images/Features/aws.png';
import azure from '@/public/images/Features/azure.png';
import googlecloud from '@/public/images/Features/googlecloud.png';
import Image from 'next/image';

const frontEnd = [
	{
		src: react,
		ttl: 'React',
		txt:
			'Our proven expertise using React enables us to build flexible, robust, secure, and efficient web applications and scale your existing projects to another level.',
	},
	{
		src: angular,
		ttl: 'Angular',
		txt:
			'Angular development is aimed at building large-scale dynamic applications. Created by Google, Angular is an open-source framework offering a rich toolset that helps write less code, make it well-structured, easy to test, reuse and maintain.',
	},
	{
		src: vuejs,
		ttl: 'Vue',
		txt:
			'Vue is known as two-way binding which makes it easy to update components and track data updates. Bound data can be updated the same way as DOM objects, so Vue is especially agile when working with applications that incorporate real-time updates.',
	},
];
const backEnd = [
	{
		src: python,
		ttl: 'Python',
		txt:
			'We offer on-time delivery and high productivity. Our flexible services stretch from filling specific Python skill gaps to providing self-managed Python development expertise.',
	},
	{
		src: nodejs,
		ttl: 'Node.js',
		txt:
			'Node.js is a JavaScript runtime used for server-side development of software that can efficiently operate in a real-time, data-intensive environment. We use Node.js to deliver fast, scalable web applications.',
	},
	{
		src: javascript,
		ttl: 'JavaScript',
		txt:
			'JavaScript is a client-side development language that helps create dynamic website content. Powered by Node.js, JavaScript serves as a fast server-side language for the entire application to be coded in JavaScript.',
	},
];
const srvrs = [
	{
		src: aws,
		ttl: 'Amazon Web Services',
		txt:
			'AWS provides on-demand cloud computing with APIs deliver complete control and power to host your web assets with robust long-term support.',
	},
	{
		src: azure,
		ttl: 'Microsoft Azure',
		txt:
			'With Microsoft Azure you get feasibility assessment, consultations to the executive staff in the form of Q&A sessions, emails, design, infrastructure configuration and code reviews.',
	},
	{
		src: googlecloud,
		ttl: 'Google Cloud',
		txt:
			'Build programs, run tests, deploy assets, and manage apps and services via Google Clooud data centers, deliver powerful cloud computing and enjoy web development services.',
	},
];
const list = [...frontEnd, ...backEnd, ...srvrs];

const Webstack = () => {
	const [num, setNum] = useState(0);

	return (
		<div className="container mx-auto py-20">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="text-center p-4">
					<TitlePart title="Web Development Technology Stack" />
				</div>
			</MotionView>

			<div className="px-4 lg:px-40 2xl:px-80">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<p className="text-lg md:text-xl text-center">
						Building business-focused solutions leveraging the latest programming
						possibilities that thrive on pioneering tech platforms and resources
					</p>
				</MotionView>
			</div>

			<div className="grid grid-cols-3 gap-20 lg:gap-8 mt-24 p-4">
				<div className="col-span-3 lg:col-span-1 justify-center flex">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div>
							<p className="font-semibold text-2xl">Front-End</p>
							<div className="flex gap-8 mt-5">
								{frontEnd.map((x, i) => {
									return (
										<div
											className="w-16 rounded-lg border bg-slate-50 cursor-pointer hover:drop-shadow-xl hover:bg-slate-100 transition-all p-1"
											key={i}
											onClick={() => setNum(i)}
										>
											<Image src={x.src} alt="" />
										</div>
									);
								})}
							</div>
						</div>

						<div className="mt-12">
							<p className="font-semibold text-2xl">Back-End</p>
							<div className="flex gap-8 mt-5">
								{backEnd.map((x, k) => {
									return (
										<div
											className="w-16 border rounded-lg bg-slate-50 cursor-pointer hover:drop-shadow-xl hover:bg-slate-100 transition-all p-1"
											key={k}
											onClick={() => setNum(k + 3)}
										>
											<Image src={x.src} alt="" />
										</div>
									);
								})}
							</div>
						</div>

						<div className="mt-12">
							<p className="font-semibold text-2xl">Servers</p>
							<div className="flex gap-8 mt-5">
								{srvrs.map((x, z) => {
									return (
										<div
											className="w-16 border rounded-lg bg-slate-50 cursor-pointer hover:drop-shadow-xl hover:bg-slate-100 transition-all p-1"
											key={z}
											onClick={() => setNum(z + 6)}
										>
											<Image src={x.src} alt="" />
										</div>
									);
								})}
							</div>
						</div>
					</MotionView>
				</div>
				<div className="col-span-3 lg:col-span-2 justify-center flex items-center">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="relative z-0">
							<div
								className="w-40 h-40 bg-amber-600 rounded-full absolute z-0"
								style={{ top: '-60px', left: '30px' }}
							></div>
							<div className="max-w-[42rem]  bg-slate-200 self-center p-8  rounded-xl shadow shadow-slate-500/40 relative z-10">
								<div className="flex space-x-4">
									<Image src={list[num].src} alt="" className="w-12" />
									<p className="text-2xl self-center font-bold ">
										{list[num].ttl}
									</p>
								</div>
								<div className="pt-4">
									<p className="text-lg self-center">{list[num].txt}</p>
								</div>
							</div>
							<div
								className="w-40 h-40 bg-cyan-600 rounded-full absolute z-0"
								style={{ bottom: '-60px', right: '30px' }}
							></div>
						</div>
					</MotionView>
				</div>
			</div>
		</div>
	);
};

export default Webstack;