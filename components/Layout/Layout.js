'use client'
import { useState, useEffect } from 'react';
import Footer from './Footer/footer';
import { usePathname } from 'next/navigation';
import Header from './Header/header';
import useScroll from '../useScroll';

const Layout = ({ children }) => {

	const pathname = usePathname();
	let scroll = useScroll();
	const [headerView, setHeaderView] = useState(true); //not transparent

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 150) {
				setHeaderView(false);
			} else {
				setHeaderView(true);
			}
		});
	}, []);

	return (
		<div>
			{pathname !== '/terms-of-Use' ? (
				<Header scroll={scroll} headerView={headerView} />
			) : null}
				{children}
			{pathname !== '/terms-of-Use' ? <Footer /> : null}
		</div>
	);
};

export default Layout;