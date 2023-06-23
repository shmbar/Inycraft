import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import tourismDash from '@/public/service_images/Services/tourismDash.png'
import Image from 'next/image';

const items = [
	'Optimization of customer experience',
	'Interactive user interface for agents and visitors',
	'Multiple payment options',
	'Efficient booking process',
	'Simple check-in and check-out'
];

const Tourism = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">Tourism</p>
				<p className="text-lg pt-4">
				We provide the best digital solution for an exhilarating experience on people’s travel and adventure. 
				The app also empowers travel and hospitality companies with corporate solutions, 
				customer portals and bank office systems. Our app improves the channel of communication between the travel service provider, 
				staff and clientele.  Tourists are encouraged to discover and avail of exciting offers from the travel service provider.
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
				<div className='flex justify-center md:justify-end mt-4'>
					<Image src={tourismDash} alt='' className='w-full md:w-9/12 rounded-xl shadow-2xl ' />
				
				</div>
			</MotionView>
		</div>
	);
};

export default Tourism;