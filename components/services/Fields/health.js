import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import healthDash from '@/public/service_images/Services/healthDash.jpg';
import Image from 'next/image';

const items = [
	'Online appointment booking system',
	'Automatic monitoring of medical staff schedules',
	'Tracking of your daily progress and calories',
	'Simplified paramedical tasks',
];

const Teaching = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">Health and Fitness</p>
				<p className="text-lg pt-4">
				We specialize in digitizing medical records and processes to offer comprehensive public health solutions. 
				Our platform enables users to set their own medical appointments, 
				track fitness goals and health activities, 
				all while ensuring the utmost privacy and security of their health information.
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
				</div>
				<div className="flex justify-center md:justify-end mt-4">
					<Image src={healthDash} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
				</div>
			</MotionView>
		</div>
	);
};

export default Teaching;