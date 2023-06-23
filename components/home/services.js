import { MotionView } from '@/utils/utils.js';
import { Srvcs } from '@/components/text.js';
import Image from 'next/image'
import Experience from './exprCirlces.js';
import srvsPic from '@/public/home_images/srvsPic.png';

const Services = () => {
	return (
		<div className="bg-slate-100">
			<div className="container mx-auto p-4 py-20 ">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="text-center text-3xl lg:text-5xl px-4">
						<p className="leading-[2.5rem] lg:leading-[4rem]">
							Our Software Development & Digital Transformation{' '}
							<span className="font-bold text-red-600">Services </span>
						</p>
					</div>
					<div className="text-lg text-center mt-6">
						<p className="text-2xl font-bold text-cyan-700">
							We develop reliable, scalable and secure data management solutions for
							any business.
						</p>
						<p className="text-lg md:text-xl mt-2 ">
							We bring together deep industry expertise and the latest IT advancements
							to deliver custom solutions and products that perfectly fit the needs
							and behavior of their users.
						</p>
					</div>
				</MotionView>
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="gap-8 p-4 mt-10 justify-center flex flex-wrap xl:px-24">
						{Srvcs.map((x, i) => {
							return (
								<div className="lg:max-w-md " key={i}>
									<div>
										<Image src={x.src} alt="" className="" />
									</div>
									<p className="text-xl font-bold mt-2">{x.ttl}</p>
									<div className="w-16 bg-red-700 rounded-lg h-1 mb-2 "></div>
									<p className="text-lg mt-4">{x.txt}</p>
								</div>
							);
						})}
					</div>
				</MotionView>
			</div>
			<div className="bg-slate-200 py-16">
				<div className='container mx-auto'>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 justify-center flex mt-8 mb-10 gap-5 md:gap-10 items-center">
							<div className="col-span-2 md:col-span-1 justify-center items-center flex h-fit">
								<Image src={srvsPic} alt="" className="w-1/2" />
							</div>
							<div className="col-span-2 md:col-span-1 items-center flex">
								<div className="text-left md:max-w-[30rem] p-4">
									<p className="text-lg md:text-xl leading-8">
										Be it custom{' '}
										<span className="font-bold text-red-600">
											Web Applications Development,{' '}
										</span>
										eCommerce website development or informative lead generation
										site, our attitude, when it comes to web development,
										is to build solutions by prioritizing the context and needs of
										the end-users, ensuring meaningful results.
									</p>
								</div>
							</div>
						</div>
						<Experience />
					</MotionView>
				</div>
			</div>
		</div>
	);
};

export default Services;