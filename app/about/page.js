'use client'
import { MotionView } from '@/utils/utils';
import TitlePart from '@/components/title';
import { aboutUs, HowCanWeHelpYou } from '@/components/text';
import Image from 'next/image';
import ContactUs from '@/components/contactus';
import CollageAbout from '@/public/images/About/CollageAbout.jpg';
import worldmap from '@/public/images/About/worldmap.png';
import useWindowSize from '@/components/screensize';
import { SiPowerautomate } from 'react-icons/si';
import { SiAtlassian } from 'react-icons/si';
import { SiFsecure } from 'react-icons/si';
import Banner from '@/components/banner';

const About = () => {
	const size = useWindowSize();

	const benefits1 = [
		'No installation required for users',
		'More frequent updates',
		'An optimized user experience',
		'Increased security and data protection',
		'Reduced maintenance cost',
	];

	const benefits2 = [
		'Mutual respect',
		'Transparent contracts',
		'One stop shop',
		'Customer service',
		'More manageable and deployable',
	];

	const whatWeCanDo4you = [
		{
			ttl: 'Automate',
			src: <SiPowerautomate className="w-8 h-8 text-cyan-700" />,
			txt:
				'Your business will have the requisite speed, accuracy, and insight to scale up with apt software solutions in place.',
		},
		{
			ttl: 'Implement',
			src: <SiAtlassian className="w-8 h-8 text-cyan-700" />,
			txt:
				'We ensure on-time delivery and user trainings for smooth change management and quick user adoption.',
		},
		{
			ttl: 'Secure',
			src: <SiFsecure className="w-8 h-8 text-cyan-700" />,
			txt:
				'Secured culture build-up programs to minimize cyber threats and ensure organization-wide security and governance.',
		},
	];

	return (
		<div>
			<Banner ttl="About Us" txt="Adding value through digital expertise" bg="bg-AboutBG" />
			<div className="container flex flex-wrap justify-center bg-white mx-auto my-20 ">
				<TitlePart title="Our Story" />

				<div className="container mx-auto">
					{aboutUs.map((x, i) => {
						return (
							<MotionView dr={0.5} dl={0} yIn="2rem" key={i}>
								<div
									className="grid grid-cols-2 gap-8 w-full flex flex-wrap pt-6 md:pt-16 p-4 items-center"
									key={i}
								>
									<div
										className="col-span-2 lg:col-span-1 p-4 md:p-10 items-center bg-slate-100 rounded-xl justify-center shadow-lg hover:bg-slate-300 transition-all h-fit"
										style={i === 1 && size.width >= 1024 ? { order: 9999 } : {}}
									>
										<p className="text-3xl lg:text-4xl leading-relaxed font-bold ">
											{x.ttl}
										</p>
										<div className=" w-32 h-1 rounded-xl bg-fuchsia-400 mb-6"></div>
										<p className="tracking-normal text-lg leading-8">{x.txt}</p>
									</div>
									<div className="col-span-2 lg:col-span-1 flex justify-center items-center">
										<Image
											src={x.src}
											alt=""
											className="m-auto w-3/5 lg:w-full xl:w-3/5"
										/>
									</div>
								</div>
							</MotionView>
						);
					})}
				</div>
			</div>

			<div className="bg-slate-50 py-24">
				<div className="container mx-auto justify-center flex text-center">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<TitlePart title="Our Ethics And Our Values" />
						<p className="text-lg md:text-xl p-1 ">
						We believe in forging relationships beyond contracts and building bridges 
						of partnerships that  inspire us to deliver tangible results by caring for our partners, 
						clientele and team members alike
						</p>
						<p className="p-1 pb-16 text-2xl text-red-600 font-bold mt-2">
						This is the reason why we are trusted by our partners!
						</p>
						<div className="flex flex-wrap gap-6 justify-center p-4 md:p-0">
							{HowCanWeHelpYou.map((x, i) => {
								return (
									<div
										key={i}
										className="text-center p-4 md:p-8 md:max-w-xs border rounded-3xl bg-violet-50 shadow-xl md:hover:scale-[1.1] hover:opacity-60 transition"
									>
										<div className="flex justify-center pb-2 ">
											<Image src={x.icn} alt="" className="w-12 h-12" />
										</div>
										<div className="pb-4 font-semibold text-lg">{x.ttl}</div>
										<div>{x.txt}</div>
									</div>
								);
							})}
						</div>
					</MotionView>
					<div></div>
				</div>
			</div>
			<ContactUs />

			<div className="bg-slate-100 py-28">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="text-center p-4">
						<p className="text-5xl font-bold">
							<span className="text-red-600">What</span> we can do for your business?
						</p>
					</div>
					<div className="container mx-auto grid grid-cols-3 lg:col-span-2 flex gap-6 mt-12 justify-center p-4">
						{whatWeCanDo4you.map((x, i) => {
							return (
								<div
									className="col-span-3 md:col-span-1 rounded-2xl shad drop-shadow-2xl bg-slate-50 p-6"
									key={i}
								>
									<div className="w-14 h-14 border-2 rounded-full bg-slate-200 flex justify-center items-center">
										{x.src}
									</div>
									<p className="text-2xl font-bold mt-4 text-red-600">{x.ttl}</p>
									<p className="text-lg mt-6">{x.txt}</p>
								</div>
							);
						})}
					</div>
				</MotionView>
			</div>

			<div className="py-28 p-4">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="container mx-auto grid grid-cols-2 gap-8 md:gap-2">
						<div className="col-span-2 lg:col-span-1 flex justify-center items-center">
							<Image src={CollageAbout} alt="" style={{ width: '24rem' }} />
						</div>
						<div className="col-span-2 lg:col-span-1">
							<div className="flex flex-wrap justify-center">
								<p className="text-5xl font-bold pb-8">Our Benefits</p>
								<p className="text-lg md:text-xl ">
									Developing a business web application for your company will enable you to stay on 
									par with the competition.
								</p>
								<div className="block md:flex w-full pt-3 gap-8">
									<ul className="max-w-sm list-outside list-disc ml-7">
										{benefits1.map((x, i) => {
											return (
												<li
													className="flex items-center  list-item pl-1"
													key={i}
												>
													<p className="text-lg leading-10">{x}</p>
												</li>
											);
										})}
									</ul>
									<ul className="max-w-sm list-outside list-disc ml-7">
										{benefits2.map((x, i) => {
											return (
												<li
													className="flex items-center list-item pl-1"
													key={i}
												>
													<p className="text-lg leading-10">{x}</p>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</MotionView>
			</div>
			<div className="border-t border-slate-200">
				<div className="py-20 p-4 container mx-auto block ">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-5xl font-bold text-center mb-6">
							More than <span className="text-red-600">30 satisfied clients</span>{' '}
							around the world
						</p>
						<Image src={worldmap} alt="" className="pt-4" />
					</MotionView>
				</div>
			</div>
		</div>
	);
};

export default About;