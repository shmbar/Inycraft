import { blogs } from '@/components/blogArr.js';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link'
import { MotionView } from '@/utils/utils';
import Image from 'next/image'

const LatestBlogs = () => {
	const arr = blogs.slice(0, 3);
	return (
		<div className="bg-slate-100">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="container mx-auto flex flex-col py-16">
					<div className="justify-center flex p-4">
						<p className="text-5xl">
							Our Latest <span className="font-bold text-red-600">Blogs</span>
						</p>
					</div>
					<div className="grid grid-cols-3 m-auto p-4 pt-10 justify-center flex gap-6 lg:px-20">
						{arr.map((x, i) => {
							return (
								<div
									className="col-span-3 md:col-span-1 rounded-2xl shad drop-shadow-2xl bg-slate-50 md:max-w-[26rem] md:h-[30rem] xl:h-[38rem]" //max-w-[26rem] h-[38rem]
									key={i}
								>
									<Link
										className="md:h-48 xl:h-72 flex cursor-pointer"
										href={'/blog/' + x.to} 
									>
										<Image src={x.src} alt="" className="rounded-t-2xl" />
									</Link>
									<div className="p-6 ">
										<Link href={'/blog/' + x.to} className="w-fit flex">
											<p className="text-xl font-bold opacity-90 cursor-pointer text-slate-900 hover:text-red-600">
												{x.ttl}
											</p>
										</Link>

										<p className="text-lg opacity-90 blogCube pt-4">{x.txt}</p>
										<Link
											className="mt-6 cursor-pointer flex text-red-600 items-center md:absolute bottom-10 2xl:bottom-20"
											href={'/blog/' + x.to}
										>
											<p className="">Read More</p>
											<FaLongArrowAltRight className="ml-1" />
										</Link>
									</div>
								</div>
							);
						})}
					</div>
					<div className="justify-center flex flex-wrap mt-12">
						<Link href="/blog">
							<button className="w-52 h-16 bg-red-500 text-xl text-white rounded-xl shad">
								View Other Blogs
							</button>
						</Link>
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default LatestBlogs;