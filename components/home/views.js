'use client'

import { useState } from 'react';
import { MotionView } from '@/utils/utils';
import { TbBoxSeam } from 'react-icons/tb';
import { BiRightArrow } from 'react-icons/bi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
import { MdOutlineTableChart } from 'react-icons/md';
import { MdOutlineCalendarToday } from 'react-icons/md';

import calendar from '@/public/home_images/calendar.png';
import table from '@/public/home_images/table.png';
import dashboard from '@/public/home_images/dashboard.png';
import kanban from '@/public/home_images/kanban.png';
import project from '@/public/home_images/project.png';
import Image from 'next/image'

const vs = [
	{ ttl: 'Project View', src: <TbBoxSeam /> },
	{ ttl: 'Dashboard View', src: <MdOutlineDashboardCustomize /> },
	{ ttl: 'Board View', src: <TbLayoutDashboard /> },
	{ ttl: 'Table View', src: <MdOutlineTableChart /> },
	{ ttl: 'Calendar View', src: <MdOutlineCalendarToday /> },
];

const Img = (x) => {
	return (
		<div className="h-[18rem] lg:h-[28rem]">
			<Image src={x} alt="" className="md:w-[54rem] rounded-lg shad" />
		
		</div>
	)

};
const Views = () => {
	const [view, setViews] = useState(0);

	return (
		<div className="bg-slate-100">
			<div className="container mx-auto flex justify-center py-6 md:py-16">
				<MotionView dr={0.5} dl={0} yIn="2rem">
					<p className="text-center text-4xl px-4 sm:px-10 lg:px-50">
						How fast do you want to{' '}
						<span className="font-bold">transform your new ideas into reality</span>?
					</p>
					<p className="text-center text-3xl mt-5 font-semibold px-4 text-cyan-700">
						Your business deserves the right tool to help it win.
					</p>
					<p className="text-center text-lg md:text-xl mt-3 px-4">
						We provide miltiple{' '}
						<span className="text-red-600 font-semibold">Kanban</span> board views,{' '}
						<span className="text-red-600 font-semibold">Dashboards</span>, functional{' '}
						<span className="text-red-600 font-semibold">Table</span> views with custom
						fields and <span className="text-red-600 font-semibold">Calendar</span>{' '}
						views.
					</p>

					<div className="grid grid-cols-3 gap-6 p-4 md:p-6 flex mt-8">
						<div className="col-span-3 md:col-span-1">
							{vs.map((x, i) => {
								return (
									<MotionView dr={0.5} dl={0} yIn="2rem" key={i}>
										<div
											className={`border rounded-xl text-left mt-4 p-3  font-semibold cursor-pointer group transition-all flex items-center relative
														${
															i === view
																? 'border-slate-200 h-full bg-slate-50 shad transition-all opacity-80 text-cyan-700'
																: 'border-transparent opacity-30'
														}
														`}
											onClick={() => setViews(i)}
										>
											{x.src}
											<p className="text-lg ml-3">{x.ttl}</p>
											<BiRightArrow
												className={`absolute right-3 ${
													i === view ? 'block' : 'hidden'
												}`}
											/>
										</div>
									</MotionView>
								);
							})}
						</div>

						<div className="col-span-3 md:col-span-2">
							{view === 0	? Img(project) :
								view === 1
								? Img(dashboard)
								: view === 2
								? Img(kanban)
								: view === 3
								? Img(table)
								: view === 4
								? Img(calendar)
								: null}
						</div>
					</div>
				</MotionView>
			</div>
		</div>
	);
};
export default Views;