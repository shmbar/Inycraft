'use client'
import { SetFontSize, MotionFrame } from '@/utils/utils';
import Btn from '@/components/btn';
import { useRouter } from 'next/navigation';
import homeBannerPic from '@/public/home_images/homeBannerPic.png';
import Image from 'next/image';

const Welcome = () => {
	const router = useRouter();

	return (
		<div className="w-full relative overflow-hidden justify-center flex">
			<div className="w-[55rem] h-[55rem] bg-red-400 absolute -right-[15rem] border-2 opacity-10 absolute rounded-full scale-[1.8]"></div>
			<div className="container lg:mx-auto p-1 mt-12 flex flex-wrap z-0 py-16">
				<div className="grid grid-cols-2 gap-10">
					<div className="col-span-2 lg:col-span-1">
						<div
							className="p-8"
							//	style={size.width > 1022 ? { width: '70%' } : { width: '100%' }}
						>
							<MotionFrame dr={0.5} dl={0.6} yIn="2rem">
								<p
									className="font-medium  mb-10 text-white opacity-90 leading-tight"
									style={{ fontSize: SetFontSize('35px', '3.5vw', '68px') }}
								>
									We create{' '}
									<span className="text-teal-400"> web applications </span>to
									manage your data.
								</p>
							</MotionFrame>

							<MotionFrame dr={0.5} dl={0.8} yIn="2rem">
								<p
									className="font-medium mb-6 text-white opacity-70"
									style={{ fontSize: SetFontSize('18px', '1.6vw', '25px') }}
								>
									We are a software company specializing in building various web
									products for your needs. We provide seamless custom web
									applications to help your business grow.
								</p>
							</MotionFrame>
							<br />
							<div
								className="w-full justify-center md:justify-start flex"
								onClick={() => router.push('/contact', '/contact')}
							>
								<MotionFrame dr={0.5} dl={1} yIn="2rem">
									<Btn />
								</MotionFrame>
							</div>
						</div>
					</div>
					<div className="col-span-2 lg:col-span-1 justify-center flex items-center">
						<MotionFrame dr={0.5} dl={0.8} yIn="2rem">
							<div className="w-full justify-center flex h-fit p-6">
								<Image src={homeBannerPic} alt="" className="" priority/>
							</div>
						</MotionFrame>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
