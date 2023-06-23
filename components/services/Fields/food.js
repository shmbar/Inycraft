import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import foodDash from '@/public/service_images/Services/foodDash.jpg';
import Image from 'next/image';


const items = [
	'Direct online ordering system',
	'Online presence, reviews and ratings',
	'No more waiting for long queues to place an order',
	'Increased transparency in pricing',
	'Efficient running costs',
];

const Food = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">Food</p>
				<p className="text-lg pt-4">
				We build innovative on-demand food web products with intuitive features which includes order tracking, 
				multiple payment options, vendor management, and delivery tracking.
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
						<Image src={foodDash} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Food;