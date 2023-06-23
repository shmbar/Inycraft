
import { MotionView } from '@/utils/utils';
import Link from 'next/link'
import Image from 'next/image'
import consulting from '@/public/home_images/consulting.png';
import prdDesign from '@/public/home_images/prdDesign.png';
import softdev from '@/public/home_images/softdev.png';

const whatweDo = [
	{
		ttl: 'Software Development',
		txt: 'Our end-to-end software solutions enable businesses to maximize their efficiency.',
		src: softdev,
	},
	{
		ttl: 'Product Design',
		txt:
			'Designing delightful experiences with a human approach by involving human perspective.',
		src: prdDesign,
	},
	{
		ttl: 'Tech Consulting',
		txt: 'Digital transformation is the key to maintain your business at a high level.',
		src: consulting,
	},
];

const WhatWeDo = () => {
	return (
		<div className="relative z-0">
			<div className="container mx-auto flex justify-center py-20">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="grid grid-cols-3 gap-10 p-4 z-10">
						<div className="col-span-3 lg:col-span-1 flex items-center justify-center">
							<div className="w-[34rem] lg:w-[22rem] ">
								<div>
									<p className="text-5xl font-bold">What We Do</p>
									<p className="text-lg mt-8">
										We proactively design and scale robust software solutions which
										 fuel product innovation and deliver digital success!
									</p>
								</div>
							</div>
						</div>
						<div className="col-span-3 lg:col-span-2 flex flex-wrap md:flex-nowrap gap-6">
							{whatweDo.map((x, i) => {
								return (
									<div className="md:w-[14.5rem] drop-shadow-2xl" key={i}>
										<div className="border rounded-xl p-6 border-slate-200 h-full hover:bg-slate-50 drop-shadow-lg transition-all">
											<div>
												<Image src={x.src} alt="" className="w-12" />
											</div>
											<p className="text-2xl font-bold mt-6">{x.ttl}</p>
											<p className="text-lg mt-8">{x.txt}</p>

											<div className="group w-fit">
												<Link href="/services" >
													<p className=" font-semibold text-cyan-700 text-lg mt-8 hover:opacity-70 cursor-pointer ">
														See More
													</p>
												</Link>
												<div className="w-0 bg-slate-500 rounded-lg h-1 mb-2 group-hover:w-24 transition-all"></div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</MotionView>
			</div>

			<div className="bg-cyan-400 blr z-0" />
		</div>
	);
};

export default WhatWeDo;