import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import finance from '@/public/service_images/Services/financeDash.jpg'
import Image from 'next/image';

const items = [
	'Simplified lead & customer management',
	'Financial transactions can be done anytime & anywhere',
	'Dashboard charts with graph representation of all the Cash flows and transactions',
	'Close monitoring of business operations',
	'Multiple currency support and easy automatic live currency conversion',
];

const Teaching = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">Finance and Banking</p>
				<p className="text-lg pt-4">
				We develop systems that monitor business transactions involving multiple forex currencies. 
				Our financial apps efficiently track and manage currency flows, compare actual and budget data, 
				and generate analytics on cash inflow and outflow. Additionally, we provide monitoring, tracking, 
				exporting, and importing functionalities for user's financial data.
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
						<Image src={finance} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Teaching;