import { MotionView } from '@/utils/utils';
import check from '@/public/images/Others/check.png';
import ecommerce from '@/public/service_images/Services/ecommerceDash.jpg';
import Image from 'next/image';

const items = [
	'Swift buying process',
	'Store and product listing creation',
	'Flexibility for customers',
	'Cost reduction',
	'24/7 remote shopping',
];

const Teaching = () => {
	return (
		<div className="container mx-auto justify-center p-4 md:p-8 ">
			<MotionView dr={0.5} dl={0} yIn="3rem">
				<p className="text-4xl font-bold">eCommerce</p>
				<p className="text-lg pt-4">
				We develop e-commerce web products with modern features and latest technologies which 
				encompasses the following sales activities:  a wish list, order tracking, 
				easy-to-navigate shopping cart solutions, user profiles, multiple payment options and more.
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
						<Image src={ecommerce} alt="" className="w-full md:w-9/12 rounded-xl shadow-2xl " />
					</div>
				</div>
			</MotionView>
		</div>
	);
};

export default Teaching;