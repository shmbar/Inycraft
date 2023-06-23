import Image from 'next/image';
import BnHome from '@/components/home/bannerHome';
import WhatWeDo from '@/components/home/whatwedo';
import Services from '@/components/home/services';
import Pillars from '@/components/home/3pillars';
import Contactus from '@/components/contactus';
import Views from '@/components/home/views';
import PassionGoald from '@/components/home/passionGoal';
import Ftrs from '@/components/home/features';
import LatestBlogs from '@/components/home/latestBlogs';
import './home.css';

export default function Home() {
	return (
		<div>
			<div className="flex flex-wrap z-0 bannerStyle bg-HomeBG">
				<BnHome />
			</div>
			<WhatWeDo />
			<Services />
			<Pillars />
			<Contactus />
			<Views />
			<PassionGoald />
			<Ftrs />
			<LatestBlogs />
		</div>
	);
}