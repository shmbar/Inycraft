'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { solutions } from '@/components/text';



const Crsl = () => {

	return ( 
		<div className="w-[22rem] sm:w-4/5 m-auto"> 
			<Carousel
				showArrows={true}
				showThumbs={false}
				autoPlay
				infiniteLoop
				showStatus={false}
				stopOnHover
				interval="5000"
				transitionTime="1000"
			>
				{solutions.map((x, i) => {
					return (
						<div className='p-12 h-full'  style={{ background: x.bg }} key={i}>
							<div className="w-full justify-start flex ">
								<Image src={x.src} alt="" className="-mt-28" style={{ width: x.w }} />
							</div>

							<div className=" w-[18rem] md:w-[25rem] mt-5">
								<p className="text-white text-3xl font-semibold text-left">
									{x.ttl}
								</p>
							</div>
							<div className="mt-6 w-[18rem] md:w-[25rem]">
								<p className="text-white text-lg text-left">{x.txt}</p>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Crsl;