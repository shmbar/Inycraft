import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import hrDash from '@/public/service_images/Services/hrDash.jpg';
import Image from 'next/image';

const items = [
	'Automate common HR tasks',
	'Vast reach of various candidate pools during a recruitment phases',
	'Swift onboarding practice',
	'Efficient attendance tracking accuracy',
	'Paperless advantage',
];

const Teaching = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">HR</p>
				<p className="text-lg pt-4">
				We develop HR platforms that cater to the needs of organizations, regardless of their size. 
				Our platforms cover a wide range of HR functions, including performance management, employee engagement, 
				and employee development. With our tools, you can align individual developmental goals with the 
				company's vision. Our platform includes features such as personal and unit developmental objectives, 
				OKR management, performance reviews, employee engagement surveys, 360-degree feedback, recognition, 
				one-on-one meetings, employee onboarding, and learning.
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
						<Image src={hrDash} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Teaching;