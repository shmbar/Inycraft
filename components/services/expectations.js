import { expectations } from '@/components/text';
import { MotionView } from '@/utils/utils';

const Expectations = () => {
	return (
		<div className="bg-slate-100 py-20">
			<div className="container mx-auto">
				<div className="text-center mb-6">
					<p className="text-3xl md:text-5xl font-semibold">
						What You Should 
						<span className="text-red-600"> Expect</span> From Us
					</p>
				</div>
				<div className="text-center">
					<p className="text-lg md:text-xl">
						These are the reasons why our clients have entrusted us
					</p>
				</div>

				<div className="grid grid-cols-2 gap-6 p-4 md:p-6 mt-6">
					{expectations.map((x, i) => {
						return (
							<div className="col-span-2 md:col-span-1 " key={i}>
								<MotionView dr={0.5} dl={0} yIn="2rem">
									<div className="p-2 md:p-6 flex gap-4 justify-center">
										<div className="p-3">{x.src}</div>
										<div className="max-w-sm">
											<p className=" font-bold text-3xl text-cyan-800 pb-3">
												{x.ttl}
											</p>
											<p className=" text-md ">{x.txt}</p>
										</div>
									</div>
								</MotionView>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Expectations;