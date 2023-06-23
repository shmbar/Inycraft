import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import teaching from '@/public/service_images/Services/teachingDash.jpg';
import Image from 'next/image';


const items = [
	'Online education platforms',
	'Electronic library for managing notes and tutorials',
	'Live lessons and online exams',
	'Remote tutorial',
	'eLearning is possible anytime and anywhere'
];

const Teaching = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">Education</p>
				<p className="text-lg pt-4">
				Our solutions are tailored to meet the requirements of training providers and their customers alike. 
				With our solutions, we target efficient delivery of learning materials with acknowledgment of a 
				trainee’s specific requirements and previous knowledge.
				</p>

				<div className="pt-2">
					{items.map((x, i) => {
						return (
							<div className="flex items-center" key={i}>
								{' '}
								<Image src={check} alt="" className="w-10 pr-3" />
								<p className="text-lg leading-10">{x}</p>
							</div>
						);
					})}
					<div className="flex justify-center md:justify-end mt-4">
						<Image src={teaching} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Teaching;