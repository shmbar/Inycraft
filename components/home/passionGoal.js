import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { MotionView } from '@/utils/utils';
import paasPic from '@/public/home_images/passionGoalPic.jpg'
import Image from 'next/image'

const PassionGoal = () => {
	return (
		<div className="bg-slate-200 passionGoalDiv z-0 relative">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="container mx-auto flex grid grid-cols-2 gap-10 p-4 pt-28 ">
					<div className="col-span-2 lg:col-span-1 justify-center items-center flex z-10 relative">
						<Image src={paasPic} alt='' className='w-full md:w-4/5 rounded-xl shad' />
					</div>
					<div className="col-span-2 lg:col-span-1 z-10 relative">
						<div className="max-w-xl">
							<p className="text-4xl ">
								Building a meaningful connection between our{' '}
								<span className="text-red-600 font-bold">passion and your goal.</span>
							</p>
						</div>

						<div className="max-w-2xl mt-8">
							<p className="text-lg ">
								We firmly believe that the true value of a solution lies in its effectiveness in 
								meeting the needs of its intended users. At our company, we go above and beyond our 
								contractual obligations to cultivate lasting relationships with all stakeholders. 
								Our approach centers around building enduring connections that are grounded in 
								trust and fostered through collaboration.
							</p>
						</div>

						<Link
							className="mt-6 cursor-pointer flex text-red-600 items-center w-fit"
							href="/about" 
						>
							<p className="">Explore about us</p>
							<FaLongArrowAltRight className="ml-1" />
						</Link>
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default PassionGoal;