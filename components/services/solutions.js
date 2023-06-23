import Crsl from './Carousel/carousel';
import { MotionView } from '@/utils/utils';


const Solutions = () => {
	return (
		<div className="container mx-auto mt-16 md:mt-28">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="text-center mb-6">
					<p className="text-3xl md:text-5xl font-semibold">
						Some things should be easier.{' '}
						<span className="text-red-600">And they are!</span>
					</p>
				</div>
			</MotionView>
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<div className="px-4 lg:px-40 2xl:px-80">
					<p className="text-lg text-center">
					You'll be pleased to know that you can achieve your business objectives with the right toolset, 
					whether it's for personal projects, remote work, or team collaboration. 
					We have the solutions to your problems!
					</p>
				</div>
			</MotionView>
			<div className="container mx-auto mt-20">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<Crsl /> 
				</MotionView>
			</div>
		</div>
	);
};

export default Solutions;