import aboutUs1 from '@/public/images/Others/aboutUs1.png';
import aboutUs2 from '@/public/images/Others/aboutUs2.png';
import aboutUs3 from '@/public/images/Others/aboutUs3.png';


import enthusiasm from '@/public/images/About/enthusiasm.png';
import client from '@/public/images/About/client.png';
import pricing from '@/public/images/About/price.png';
import flexible from '@/public/images/About/flexible.png';
import innovation from '@/public/images/About/innovation.png';
import integrity from '@/public/images/About/integrity.png';
import quality from '@/public/images/About/quality.png';
import performance from '@/public/images/About/performance.png';

import customWebDev from '@/public/service_images/Services/customWebDev.jpg';
import webDev from '@/public/service_images/Services/webDev.jpg';
import uxui from '@/public/service_images/Services/uxui.jpg';
import webPortal from '@/public/service_images/Services/webPortal.jpg';
import ecommerce from '@/public/service_images/Services/ecommerce.jpg';
import bigData from '@/public/service_images/Services/bigData.jpg';
import responsive from '@/public/service_images/Services/responsive.jpg';
import budget from '@/public/service_images/Services/budget.jpg';

import ideas from '@/public/service_images/ProcessPics/ideas.jpg';
import ux from '@/public/service_images/ProcessPics/ux.jpg';
import development from '@/public/service_images/ProcessPics/development.jpg';
import testing from '@/public/service_images/ProcessPics/testing.jpg';
import launch from '@/public/service_images/ProcessPics/launch.jpg';
import maintenance from '@/public/service_images/ProcessPics/maintenance.jpg';


import firstPic from '@/public/service_images/SolutionsPics/firstPic.png';
import secondPic from '@/public/service_images/SolutionsPics/secondPic.png';
import thirdPic from '@/public/service_images/SolutionsPics/thirdPic.png';
import fourthPic from '@/public/service_images/SolutionsPics/fourthPic.png';
import fifthPic from '@/public/service_images/SolutionsPics/fifthPic.png';
import sixthPic from '@/public/service_images/SolutionsPics/sixthPic.png';



import WebAppDev from '@/public/home_images/webAppDev.png';
import Soft_Dev from '@/public/home_images/soft_Dev.png';
import WebRedesign from '@/public/home_images/webRedesign.png';
import Crm from '@/public/home_images/crm.png';


import { FaCertificate, FaSolarPanel, FaMoneyCheckAlt, FaSlack } from 'react-icons/fa';

export const cmpName='Inycraft';

export const aboutUs = [
	{
		ttl: 'Who We Are', src: aboutUs1,
		txt:
			'We are a web apps development company, founded in 2018 which comprises of a team of professional web engineers who had a vision to create a software that would cater to and provide technical application solutions for real- world business technical glitches and challenges from web to the mobile. We have a solid development structure with agile methods that ensure value for your users and customers through fast deliverables.',
	},
	{
		ttl: 'How We Do It', src: aboutUs2,
		txt:
			'We use our technical expertise, knowledge and skills acquired through years of experience in building effective API-based web applications as well as custom/enterprise web applications by combining intelligent design and attentive engineering. Our products are created to provide seamless interactivity and easy usability with responsive UI and UX designs. It is our zeal to help our clients achieve their global pursuit for digital transformation by providing them with excellent intelligent software development products and services.',
	},
	{
		ttl: 'Our Service Roadmap', src: aboutUs3,
		txt:
			'To bring added value to your business, digitize your business process, broaden the scope of your activity so you can benefit from a competitive position in the global market, our UX/UI designers and developers work together to design a dynamic web application for you, with responsive user interfaces.',
	},
];



export const HowCanWeHelpYou = [
	{
		ttl: 'Enthusiasm',
		icn: enthusiasm,
		txt: (
			<>
				Thanks to the passion and experience of our team, 
				we ensure that our developers improve their skills continuously to offer quality solutions 
				at the cutting edge of the latest technologies.
			</>
		),
	},
	{
		ttl: 'Client-First Approach',
		icn: client,
		txt: (
			<>
				Our client-first approach aims to make you our priority. As our business partner, 
				your needs and business goals comes in first! Our digital products and services intends 
				to assure your success!  
			</>
		),
	},
	{
		ttl: 'Fair Pricing',
		icn: pricing,
		txt:
			'We offer competitive pricing thanks to the reasonable rates of our software professionals. We stick to your budget without sacrificing quality.',
	},
	{
		ttl: 'Flexibility and Agility',
		icn: flexible,
		txt:
			'We enable direct communication with your assigned team to provide personalized service from the very start thus ensuring confidentiality of every message relayed. Your ideas and projects are safe with us!',
	},
	{
		ttl: 'Innovation',
		icn: innovation,
		txt:
			'We adapt to major technological changes! We rely on our young and dynamic creative technical team. Our specialists are determined and always ready to offer you effective solutions.',
	},
	{
		ttl: 'Integrity',
		icn: integrity,
		txt:
			'We intend to gain your trust and confidence by establishing a business relationship founded on honesty and mutual respect. Our mission is to provide you with digital products and services that will land you on the map of global digital market.  ',
	},
	{
		ttl: 'Quality',
		icn: quality,
		txt:
			'In the pursuit of excellence, we guarantee the sustainability of the services delivered! All development services and support are unique. Services are customized according to your needs. Our goal is the realization of your business objectives. ',
	},
	{
		ttl: 'Trusted Performance',
		icn: performance,
		txt:
			'We take pride in everything we do. We are one team directed to a common vision of providing excellent digital products and services for our business partners.',
	},
];

export const hdr = [
	{ link: '/about', txt: 'About Us' },
	{ link: '/services', txt: 'Services' },
	{ link: '/blog', txt: 'Blog' },
	{ link: '/faqs', txt: 'Faqs' },
	{ link: '/contact', txt: 'Contact Us' },
];

export const hdr1 = [
	{ link: '/about', txt: 'About Us' },
	{ link: '/services', txt: 'Services' },
	{ link: '/blog', txt: 'Blog' },
	{ link: '/faqs', txt: 'Faqs' },
];


export const ourServices = [
	{
		ttl: 'Custom Web Application Development',
		txt:
			'We offer end-to-end customized web app development services, tailored to your specifications. Our services encompass consultation, development, migration, and support.',
		src: customWebDev,
	},
	{
		ttl: 'Website Design and Development',
		src: webDev,
		txt:
			'We offer a wide range of solutions, spanning all development and design phases, including adaptive, responsive tailor-made web applications, e-commerce solutions, website revamping, maintenance, etc.',
	},
	{
		ttl: 'UI & UX Design',
		src: uxui,
		txt:
			'We design and implement UI/UX optimization changes to enhance usability, improve intuitive user interface navigability, and enhance the overall site experience, all while aligning with your business goals.',
	},
	{
		ttl: 'Web Portal Development',
		src: webPortal,
		txt:
			'We provide a full range of portal development services, including user-centered web portal design, responsive digital products, portal modernization with progressive engineering tools, and effective consulting for digital strategy, product development, and innovation.',
	},
	{
		ttl: 'Ecommerce Development',
		src: ecommerce,
		txt:
			'We develop device-agnostic web stores, coupon and drop shipping applications to ensure a consistent positive buying experience for your customers near me and at any location.',
	},
	{
		ttl: 'Big Data and Analytics',
		src: bigData,
		txt:
			'We develop intuitive tools for data collection and analysis, processing them into relevant results for each user. We efficiently manage and organize a vast influx of data from a wide market of end users.',
	},
	{
		ttl: 'Responsive Web applications',
		src: responsive,
		txt:
			'We build responsive web applications which are visually pleasing to the eyes as well as digitally efficient on any screen of any size and device by adapting menus and controls.',
	},
	{
		ttl: 'On Budget',
		src: budget,
		txt:
			'We provide personalized quotes tailored to fit within each client`s budgetary constraints. Your future application will be customized based on your financial capabilities.',
	},
];


export const process = [
	{
		ttl: 'IDEATION',
		txt: [
			'Conducting competitive analysis',
			'Identifying the target audience, understanding their wants and needs',
			'Defining customer acquisition, conversion, and retention strategies',
			'Defining the software monetization model',
			'Feasibility analysis',
		],
		src: ideas,
	},
	{
		ttl: 'DESIGN',
		txt: [
			'Conducting UX and UI research',
			'Describing how a user will interact with the software product',
			'Creating and combining wireframes that demonstrate content layout on each screen',
			'Performing the prototype user testing',
			'Transforming software prototypes into full-color graphic interface mockups',
			'Integrating animation and special effects',
		],
		src: ux,
	},
	{
		ttl: 'DEVELOPMENT',
		txt: [
			'Establishing development and delivery automation environments',
			'Writing server-side code and APIs',
			'Turning static user interface mockups as provided by UI designers into the fully functional GUI',
			'Conducting unit testing and static code analysis',
			'Detailed database design',
		],
		src: development,
	},
	{
		ttl: 'TESTING',
		txt: [
			'Establishing a test plan with a testing scope which addresses software requirements and reports procedures',
			'Creating test cases and checklists',
			'Implementing web and API testing automation',
			'Carrying out functionality, performance, security, integration testing',
			'Fixing bugs detected by testing',
		],
		src: testing,
	},
	{
		ttl: 'LAUNCH',
		txt: [
			'Deploying software in the production environment',
			'On-site user training sessions',
			'Fixing bugs that users discover',
			'Gathering customer feedback',
			'Marketing and advertising consultation',
		],
		src: launch,
	},
	{
		ttl: 'MAINTENANCE',
		txt: [
			'Continuous updates and bug sanitization',
			'Customer based upgrades based on user feedback ',
			'Enhancement of existing features and development new programs to increase digital relevance',
			'Increasing system performance',
			'Implementaion of new ideas',
		],
		src: maintenance,
	},
];


export const solutions = [
	{
		ttl: 'You no longer need to switch between different apps',
		txt:
			'We will help you keep your tasks, conversations, and documents in one place. Everything is integrated so you don’t have to jump between tabs and windows anymore.',
		bg: '#ea80fc',
		src: firstPic,
		w: '10rem'
	},
	{
		ttl: 'Your team will always be on the same page',
		txt:
			'Technological data consolidation enables efficient support for the platform, ensuring that the team shares a common goal through a universal language.',
		bg: '#00b0ff',
		src: secondPic,
		w: '10rem'
	},
	{
		ttl: 'You won’t get lost in a complicated UI',
		txt:
			'While some tools may be capable, nobody enjoys using complicated software. That`s why we prioritize seamless scalability of our app, allowing you to navigate the web with ease and convenience.',
		bg: '#ff9100',
		src: thirdPic,
		w: '8rem'
	},
	{
		ttl: 'You will need less meetings and check-ins',
		txt:
			'Organize your projects with us and effectively focus on other relevant business matters.',
		bg: '#4caf50',
		src: fourthPic,
		w: '10rem'
	},
		{
		ttl: 'Your projects will be completed on time',
		txt:
			'Communication and deadlines are essential components for lucrative project delivery. We serve to help you with both.',
		bg: '#2c387e',
		src: fifthPic,
		w: '8rem'
	},
	{
		ttl: 'Your software is secured and protected from attacks',
		txt:
			'Software security is our strength. Our mission is to protect your business with dependable software.',
		bg: '#ff784e',
		src: sixthPic,
		w: '12rem'
	}
];


export const expectations = [
	{
		ttl: 'Certified professionals', src: <FaCertificate className='w-12 h-12 text-cyan-600'/>, 
		txt:
			'The professionals you will work with passed a strict certification process. Depending on your project, we choose the most suitable talent to carry out your project.',
	},
	{
		ttl: 'Competitive pricing', src: <FaMoneyCheckAlt className='w-12 h-12 text-cyan-600' />,
		txt:
			'We offer competitive pricing – thanks to the realistic rates of our certified professionals and the offshoring of resources. Stay within your budget without sacrificing quality.',
	},
	{
		ttl: 'Transparency', src: <FaSolarPanel className='w-12 h-12 text-cyan-600' />,
		txt:
			'Communicate directly with your assigned team from the start. Go over the details of your project with them without worrying, your idea is safe with us.',
	},
	{
		ttl: 'Agility', src: <FaSlack className='w-12 h-12 text-cyan-600' />,
		txt:
			'We detect your needs and assign you to the right team in an agile way. If you want to get started as soon as possible, we always have professionals available.',
	},
];


export const Plrs=[{ttl: 'Scalability and flexibility', txt:'We use best practices around cloud-based infrastructure creation and management, DevOps, legacy modernization, quality assurance, and system integration to create fault-tolerant solutions. Your web app will function without a hitch right after the deployment and in future, as your business grows.'},
			   {ttl: 'High performance', txt:'We make the most of performance engineering to ensure utmost performance of your web apps. Whether it’s a data management app to run and manage your business data or an e-commerce platform that has to withstand Black Friday rush, we’re here to enable glitch-free experiences.'},
			   {ttl: 'Rock-solid security', txt:'Security is our priority in web app development. End-to-end encryption, two-factor authentication, robust user access management, biometrics-based security, penetration and vulnerability testing, our experts will implement this and more to protect your users, processes, and data.'}]



export const Srvcs =[{ttl: 'Web Application Development', src: WebAppDev,
					  txt:'We build responsive web apps that look great and work perfectly on any screen, designed specifically for your business needs and use technologies and development practices to create custom web applications for your business.'},
					   {ttl: 'Software Development', src: Soft_Dev,
						txt:'Get the custom functionality and features required to meet your business or industry`s unique needs. Our custom software solutions help you address your present needs and, more importantly, your needs for the future.'},
					   {ttl: 'Website Redesign', src: WebRedesign,
						txt:'We provide tailor-made web redesign solutions, new visual & technical architectures and scalable remote maintenance to renew your software/website.'},
					   {ttl: 'CRM Development', src: Crm,
						txt:'We offer you CRM solutions that help your business to interact permanently with its customers and improve its profitability.'}
			]