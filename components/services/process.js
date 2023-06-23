'use client'
import { useEffect, useState } from 'react';
import { MotionView } from '@/utils/utils';
import { process } from '@/components/text.js';
import useWindowSize from '@/components/screensize';
import styles from '@/app/services/services.module.css';

import Image from 'next/image';

const Process = () => {
	const size = useWindowSize();
	const [smScrn, setSmScrn] = useState();

	useEffect(() => {
		size.width < 1330 ? setSmScrn(true) : setSmScrn(false);
	}, [size]);

	return (
		<div className={`py-24 ${styles.processBG}`} style={{}}>
			<div className="container mx-auto text-center">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<p className="text-white text-5xl font-bold">
						Software Product Development Methodology
					</p>
				</MotionView>
				<div className="grid grid-cols-2 gap-4 mt-12 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="col-span-2 lg:col-span-1 hidden md:block">
							<p className="text-white text-4xl font-semibold lg:pb-5 text-left lg:text-center">
								Our Process
							</p>
							<p className="text-white text-2xl font-semibold text-left lg:text-center">
								Apps Development
							</p>
						</div>
					</MotionView>
					<div className="col-span-2 lg:col-span-1 max-w-2xl">
						<MotionView dr={0.5} dl={0} yIn="2rem">
							<p className="text-white text-lg text-left">
							The specific development of web applications is at the core of our business. 
							Our approach revolves around understanding your unique needs and requirements, 
							allowing us to develop the most appropriate tailor-made solution for your business. 
							With a focus on security, reliability, and efficiency, 
							we design and develop solutions that precisely align with your activities. 
							Here's a glimpse into how our process works:
							</p>
						</MotionView>
					</div>
				</div>

				<div className="flex gap-4 mt-20">
					{smScrn ? ( //if mobile screen
						<div className="grid grid-cols-2 gap-8 p-6 w-full">
							{process.map((x, i) => {
								return (
									<div className="col-span-2 lg:col-span-1 " key={i}>
										<MotionView dr={0.5} dl={0} yIn="2rem">
											<div className="w-full rounded-md mb-6" key={i}>
												<p className="text-white text-left font-bold text-2xl pb-2 ">
													{x.ttl}
												</p>
												<ul className="list-disc">
													{x.txt.map((y, k) => {
														return (
															<li
																className="text-white text-lg text-left leading-8 list-outside left-5 relative"
																key={k}
															>
																{y}
															</li>
														);
													})}
												</ul>
											</div>
										</MotionView>
									</div>
								);
							})}
						</div>
					) : (
						process.map((x, i) => {
							return (
								<div
									className="flex w-1/6 h-96 rounded-lg transition-all duration-700 ease-in-out hover:w-1/2 group relative"
									key={i}
								>
									<Image
										alt=""
										src={x.src}
										placeholder="blur"
										fill
										sizes="(min-width: 1em)"
										style={{
											objectFit: 'cover',
											position: 'absolute',
										}}
									/>

									<div className="hidden group-hover:block transition-all p-6 ">
										<MotionView dr={0.5} dl={0.45} yIn="2rem" tf={false}>
											<p className="text-white text-left font-bold text-2xl pb-2 relative">
												{x.ttl}
											</p>

											<ul className="list-disc ">
												{x.txt.map((y, k) => {
													return (
														<li
															className="text-white text-xl text-left leading-8 list-outside left-5 relative "
															key={k}
														>
															{y}
														</li>
													);
												})}
											</ul>
										</MotionView>
									</div>

									<div className="flex absolute h-full ml-10">
										<p
											className=" text-white text-4xl font-bold group-hover:opacity-0 transition-all"
											style={{ writingMode: 'vertical-lr' }}
										>
											{x.ttl}
										</p>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default Process;