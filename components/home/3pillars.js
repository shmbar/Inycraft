import { Plrs } from '@/components/text.js';
import { MotionView } from '@/utils/utils';
import plrsImg from '@/public/home_images/pillarsImg.png';
import Image from 'next/image'

const Pillars = () => {
	return (
		<div className="">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="container mx-auto p-4 py-20 ">
					<div className="text-center text-3xl lg:text-5xl px-4">
						<p className='leading-[2.5rem] lg:leading-[4rem]'>We Love Transforming Product Ideas To <span className='font-bold text-red-600'>Digital Realities </span></p>
					</div>
					<div className="text-lg text-center mt-6">
						<p className="text-2xl font-bold text-cyan-700">
							We take pride in developing enterprise web services and small business
							web solutions to meet your specific needs.
						</p>
						<p className="mt-2">
							Smart choices of latest technologies and deployment of standardized
							coding frameworks, help us ensure that our processes and solutions are
							scalable and future-proof, enhancing the user experience. Invariably,
							the result is a powerful software to the world.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-8 p-0 md:p-4 mt-10 ">
						<div className="col-span-2 lg:col-span-1 p-6 bg-slate-50 rounded-2xl">
							{Plrs.map((x, i) => {
								return (
									<div className="mb-12 " key={i}>
										<p className="text-4xl font-bold">{x.ttl}</p>
										<p className="text-lg mt-4">{x.txt}</p>
									</div>
								);
							})}
						</div>
						<div className="col-span-2 lg:col-span-1 justify-center flex">
							<div className='w-4/5 '>
								<Image src={plrsImg} alt="" className="rounded-2xl shad mt-10" />
							</div>
						</div>
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Pillars;