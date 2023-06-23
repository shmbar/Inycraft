'use client'
import { useState } from 'react';
import TitlePart from '@/components/title';
import { MotionView } from '@/utils/utils';

import Tourism from './Fields/tourism'
import Food from './Fields/food'
import Teaching from './Fields/teaching'
import Ecommerce from './Fields/ecommerce'
import Health from './Fields/health'
import HR from './Fields/hr'
import Finance from './Fields/finance'

const sectors = ['Tourism', 'eCommerce', 'HR', 'Health', 'Finance', 'Education', 'Food'];

const Expertise = () => {

	const [sector, setSector] = useState(0)


	return (
		<div className="container mx-auto justify-center py-20">
			<MotionView dr={0.5} dl={0} yIn="2rem">
				<TitlePart title="Sectores We Excel In" />
			</MotionView>

			<div className="px-4 md:px-20 xl:px-58 text-left md:text-center pb-7">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<p className="text-lg md:text-xl">
						We offer effective digital solutions which are crucial to the understanding of different sectors of web activities.
					</p>
					<p className="text-lg md:text-xl">
					We have developed the appropriate skillset and mastery of each specific sector due to our 
					historical presence in the business. 
					<br/>
					Here are the sectors in which we excel:
					</p>
				</MotionView>
			</div>

			<div className="grid grid-cols-3 gap-6 p-4 md:p-6 flex">
				<div className="col-span-3 md:col-span-1">
					{sectors.map((x, i) => {
						return (
							<MotionView dr={0.5} dl={0} yIn="2rem" key={i}>
								<div className={`text-center p-4 m-3 md:m-6 border rounded-2xl border-slate-400 cursor-pointer group hover:bg-blue-400 transition-all 
								drop-shadow-md ${i === sector ? 'bg-blue-600 opacity-70' : ''} `} onClick={() => setSector(i)}>
									<p className={`text-2xl font-bold group-hover:text-white ${i === sector ? 'text-white' : ''}`}>{x}</p>
								</div>
							</MotionView>
						);
					})}
				</div>

				<div className="col-span-3 md:col-span-2">
					{sector === 0 ? <Tourism /> :
						sector === 1 ? <Ecommerce /> :
							sector === 2 ? <HR /> :
								sector === 3 ? <Health /> :
									sector === 4 ? <Finance /> :
										sector === 5 ? <Teaching /> :
											sector === 6 ? <Food /> : null}
				</div>

			</div>
		</div>
	);
};

export default Expertise;