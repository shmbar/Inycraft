import { ourServices } from '@/components/text';
import TitlePart from '@/components/title';
import { MotionView } from '@/utils/utils';
import servicesIntro from '@/public/service_images/Services/servicesIntro.png';
import ContactUs from '@/components/contactus';
import Expertise from '@/components/services/expertise';
import Process from '@/components/services/process';
import Solutions from '@/components/services/solutions';
import Webstack from '@/components/services/webstack';
import Expectations from '@/components/services/expectations';
import Banner from '@/components/banner';
import Image from 'next/image';

const Services = () => {
	return (
		<div>
			<Banner
				ttl="Services"
				txt="We devise solutions to maximize your business efficiency"
				bg="bg-ServicesBG"
			/>
			<div className="container mx-auto flex justify-center py-16">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="grid grid-cols-2 gap-4 ">
						<div className="col-span-2 lg:col-span-1 md:p-4 flex justify-center items-center">
							<Image
								src={servicesIntro}
								alt=""
								className="w-4/5 lg:w-full 2xl:w-4/5"
							/>
						</div>
						<div className="col-span-2 lg:col-span-1 p-4 ">
							<p className="leading-8 lg:leading-8 text-lg">
								<span className="text-lg font-semibold">
									Are you looking for a solution to optimize your activities,
									increase your turnover and attract more customers?{' '}
								</span>
								Developing a custom web application is one of the most effective
								tools to achieve your goals.
							</p>
							<p className="text-lg leading-8 lg:leading-8">
								Our team is made up of passionate developers, able to help you
								create a personalized application that will support your activities.
								We develop solutions for businesses of all sizes and whatever their
								field of activity.
							</p>
							<p className="leading-8 lg:leading-8 text-lg mt-3">
								<span className="font-semibold">
									Have a new idea, but don't know where to start? {''}
								</span>
								We will help you turn your digital vision into reality. 
								We use the latest digital technologies designed for your custom-built platforms, 
								whether it's progressive interactive web applications, API integration, 
								or third-party tools. We will provide you with the best technology suited 
								to your business goals and budget.
							</p>
						</div>
					</div>

					<Solutions />
				</MotionView>
			</div>

			<div className="bg-slate-100 py-16">
				<div className="container mx-auto justify-center ">
					<div className="px-4">
						<MotionView dr={0.5} dl={0} yIn="2rem">
							<TitlePart title="Our Web Application Development Services" />
						</MotionView>
					</div>

					<div className="px-4 md:px-20 xl:px-60 text-left md:text-center pb-7">
						<MotionView dr={0.5} dl={0} yIn="2rem">
							<p className="text-xl">
							Merging the benefits of mobile modality with web apps, 
							we take pride in delivering progressive web app development services that are fast, 
							engaging and reliable.
							</p>
						</MotionView>
					</div>

					<div className="grid grid-cols-2 gap-7 p-4 md:p-6">
						{ourServices.map((x, i) => {
							return (
								<div className="col-span-2 lg:col-span-1  " key={i}>
									<MotionView dr={0.5} dl={0} yIn="2rem">
										<div className="shadow-xl min-h-[14rem] border rounded-3xl  bg-slate-200 group hover:bg-slate-400 hover:ring-sky-500 transition duration-500">
											<div className="grid grid-cols-5 gap-4 ">
												<div className="sm:col-span-2 col-span-5 flex justify-center">
														<Image
															src={x.src}
															alt=""
															className="rounded-t-3xl sm:rounded-none sm:rounded-l-3xl
															object-cover min-h-[15rem] w-full group-hover:opacity-60"
														/> 
												</div>
												<div className="sm:col-span-3 col-span-5 p-6">
													<p className=" font-semibold text-xl group-hover:text-white">
														{x.ttl}
													</p>
													<div className="w-16 bg-red-700 rounded-lg h-1.5 mb-2  group-hover:w-48 transition-all"></div>
													<p className=" text-md group-hover:text-white mt-3">
														{x.txt}
													</p>
												</div>
											</div>
										</div>
									</MotionView>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<ContactUs />
			<Expertise />
			<Process />
			<Webstack />
			<Expectations />
		</div>
	);
};

export default Services;

//