'use client'
import TitlePart from '@/components/title';
import { MotionView } from '@/utils/utils';
import { blogs } from '@/components/blogArr.js';
import Banner from '@/components/banner';
import Btn from '@/components/btn.js';
import { useRouter } from 'next/navigation'
import cntct from '@/public/blogs_images/contactPic.png';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
	const router = useRouter();

	return (
		<div>
			<Banner ttl="" txt="Our Blogs" bg="bg-BlogsBG" />
			<div className="container mx-auto py-16">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="container mx-auto text-center">
						<TitlePart title="Our Blogs" />
					</div>
				</MotionView>
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="grid grid-cols-2 gap-8 ">
						<div className="col-span-2 lg:col-span-1">
							{blogs.map((x, i) => {
								return (
									<div className="p-2 md:p-4" key={i}>
										<MotionView dr={0.5} dl={0} yIn="2rem">
											<div className="border rounded-xl bg-slate-50 drop-shadow-md">
												<div className="grid grid-cols-5 gap-4 ">
													<div className="col-span-5 sm:col-span-2 flex justify-center">
														<Image
															src={x.src}
															alt=""
															className="rounded-t-md sm:rounded-none sm:rounded-l-md object-cover"
														/>
													</div> 
													<div className="sm:col-span-3 col-span-5 p-4">
														<Link
															className="text-md"
															href={'/blog/' + x.to}
														>
															<p className=" font-semibold text-xl hover:opacity-70 cursor-pointer ">
																{x.ttl}
															</p>
														</Link>
														<p
															className={`text-md mt-2 ${styles.rowAffect} h-24 relative overflow-hidden`}
														>
															{x.txt}
														</p>
														<div className="mt-4 w-fit">
															<Link
																className="text-md "
																href={'blog/' + x.to}
															>
																<p className="font-bold text-cyan-600">
																	READ MORE
																</p>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</MotionView>
									</div>
								);
							})}
						</div>
						<div className="col-span-2 lg:col-span-1 p-4 ">
							<div className="w-full py-8 bg-slate-50 drop-shadow-md rounded-xl border sticky top-20">
								<p className="text-2xl font-bold text-center p-2">
									Get smart solutions for your bisiness
								</p>
								<p className="text-lg text-center mt-4 px-4 md:px-10">
									Whether you’re large or small, blue-chip or not-for-profit,
									we’ll provide you with the same friendly, can-do, responsive and
									professional service.
								</p>
								<div className="mt-8 flex justify-center">
									<Image src={cntct} alt="" className="" />
								</div>
								<div
									className="mt-2 flex justify-center"
									onClick={() => router.push('/contact')}
								>
									<Btn />
								</div>
							</div>
						</div>
					</div>
				</MotionView>
			</div>
		</div>
	);
};

export default Blog;

//