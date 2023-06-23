import Accordion from '@/components/faqs/accordion';
import ContactUs from '@/components/contactus';
import { MotionView } from '@/utils/utils';
import Banner from '@/components/banner';


const Faqs = () => {
	return (
		<div>
			<Banner
				ttl=""
				txt="Frequently Asked Questions"
				bg="bg-FaqsBG"
			/>
			
			<div className="container mx-auto py-16">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<div className="container mx-auto text-center">
						<p className="text-3xl md:text-5xl font-semibold">
							Do You Have Any Inquiries About{' '}
							<span className="text-red-600">Working With Us</span>?
						</p>
					</div>
				</MotionView>
				<div className='mt-6 p-4'>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-xl text-center">
							Here we answer some of the frequently asked questions about software
							development services.
						</p>
					</MotionView>
				</div>
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<Accordion />
				</MotionView>
			</div>

			<ContactUs />
		</div>
	);
};

export default Faqs;

//