import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import web from '@/public/blogs_images/images/web.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const arr1 = [
	{
		bld: '',
		txt: 'Reusable components',
	},
	{
		bld: '',
		txt: 'JS libraries',
	},
	{
		bld: '',
		txt: 'Comes with a browser extension named React Developer Tools',
	},
];

const arr2 = [
	{
		bld: '',
		txt: 'JSX as a barrier',
	},
	{
		bld: '',
		txt: 'Non-vigilant focus on the user interface',
	},
];

const arr3 = [
	{
		bld: '',
		txt: 'Sites with a high level of user involvement',
	},
	{
		bld: '',
		txt: 'Complicated web pages',
	},
	{
		bld: '',
		txt: 'Dynamic web development',
	},
];
const arr4 = [
	{
		bld: '',
		txt: 'Developed and maintained by Google',
	},
	{
		bld: '',
		txt: 'Dependency injection',
	},
];

const arr5 = [
	{
		bld: '',
		txt: 'High memory consumption',
	},
	{
		bld: '',
		txt: 'Hierarchical tree-like structure',
	},
];

const arr6 = [
	{
		bld: '',
		txt: 'Web apps for businesses',
	},
	{
		bld: '',
		txt: 'Dynamic apps',
	},
	{
		bld: '',
		txt: 'Progressive apps',
	},
];
const arr7 = [
	{
		bld: '',
		txt: 'Code readability and flexibility',
	},
	{
		bld: '',
		txt: 'Reusability of components',
	},
	{
		bld: '',
		txt: 'Rendering and performance of virtual DOM',
	},
];
const arr8 = [
	{
		bld: '',
		txt: 'Reactivity complexity',
	},
	{
		bld: '',
		txt: 'Risk of over flexibility',
	},
];

const arr9 = [
	{
		bld: '',
		txt: 'Scalable web applications',
	},
	{
		bld: '',
		txt: 'Interactive web apps',
	},
];

const arr10 = [
	{
		bld: '',
		txt: 'Visual Studio Integrated Development Environment (IDE)',
	},
	{
		bld: '',
		txt: 'Asynchronous support',
	},
	{
		bld: '',
		txt: 'Automatic monitoring',
	},
];

const arr11 = [
	{
		bld: '',
		txt: 'Object-relational support issues',
	},
	{
		bld: '',
		txt: 'Vendor lock-in',
	},
];

const arr12 = [
	{
		bld: '',
		txt: 'Web applications',
	},
	{
		bld: '',
		txt: 'Mobile back-ends',
	},
	{
		bld: '',
		txt: 'IoT apps',
	},
	{
		bld: '',
		txt: 'Hybrid apps',
	},
	{
		bld: '',
		txt: 'Web services',
	},
];

const arr13 = [
	{
		bld: '',
		txt: 'Single Programming Language',
	},
	{
		bld: '',
		txt: 'Advantage of caching',
	},
	{
		bld: '',
		txt: 'Fullstack JavaScript',
	},
];

const arr14 = [
	{
		bld: '',
		txt: 'API instability',
	},
	{
		bld: '',
		txt: 'Model for asynchronous programming',
	},
];
const arr15 = [
	{
		bld: '',
		txt: 'Event-driven, non-blocking services',
	},
	{
		bld: '',
		txt: 'Back-end API services',
	},
	{
		bld: '',
		txt: 'Traditional web pages',
	},
];

const arr16 = [
	{
		bld: '',
		txt: 'Interpreted language',
	},
	{
		bld: '',
		txt: 'Dynamically typed',
	},
	{
		bld: '',
		txt: 'Portability',
	},
];

const arr17 = [
	{
		bld: '',
		txt: 'Not easy to integrate with other languages',
	},
	{
		bld: '',
		txt: 'Weak in mobile computing',
	},
];

const arr18 = [
	{
		bld: '',
		txt: 'System development',
	},
	{
		bld: '',
		txt: 'Cloud-native development',
	},
	{
		bld: '',
		txt: 'Computing without a server',
	},
	{
		bld: '',
		txt: 'Applications for the IoT',
	},
	{
		bld: '',
		txt: 'Business applications',
	},
];

const lst = (arr) => {
	return arr.map((x, i) => {
		return (
			<li className="text-lg leading-10 flex pl-1 list-item" key={i}>
				<span className="font-bold">{x.bld}</span> {x.txt}
			</li>
		);
	});
};

const WebStack = () => {
	return (
		<div>
			<Banner ttl="" txt="How We Choose Our Development Stack?" bg="bg-BlogStackBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-center">
								<Image src={web} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1">
								<p className="leading-8 text-lg">
									Web development has grown to be essential to every industry’s
									success. And good technology stacks ensure high-quality products
									that meet your consumers’ expectations. So, choosing the best
									tech stack for web development that is in line with your
									product’s demands eliminates many future complications,
									including fixing or updating cases. This may undoubtedly help
									you save a lot of time and money.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-12">
							With a pool of web development stacks, selecting a suitable combination
							of application development technologies is challenging regarding the
							resources invested and quality produced. To make 2022 and 2023 a
							flourishing year, you must choose the right tech stack for web
							development before you hire web developers. And to help you, here, we
							have curated a detailed guide and coupled it with the list of the top
							web development stack for 2022 and 2023. Read on.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">What is a web development stack?</p>

						<p className="leading-8 text-lg mt-6">
							A tech stack refers to a set of technologies an organization uses to
							build a web or mobile app. It is a combination of programming languages,
							libraries, frameworks, servers, patterns, UI/UX solutions, tools, and
							software developers use.
						</p>
						<p className="leading-8 text-lg mt-8">
							Different tech stacks exist for every development need, and the right
							tech stack depends on your project requirements. Consider your project
							requirements and choose a suitable tech stack accordingly.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What are the most popular web stacks?
						</p>
						<p className="leading-8 text-lg mt-6">
							Different tech stacks can handle different web application development
							and operations tasks.
						</p>
						<p className="leading-8 text-lg mt-6">
							Following are some top stacks for front-end and back-end in 2022 and
							2023.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							Top front-end stack to use in 2022 -23
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">React.js</p>
						<p className="leading-8 text-lg mt-6">
							React is an open-source and flexible JavaScript library allowing you to
							develop simple, fast, and scalable front-end interfaces for single-page
							or multi-page applications. Also, it will enable you to create large web
							apps that can change data without reloading the page.
						</p>
						<p className="leading-8 text-lg mt-6">
							React supports JavaScript libraries and frameworks, including Backbone,
							jquery, and Angular in MVC. So, you can use it efficiently.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr1)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr2)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr3)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Angular</p>
						<p className="leading-8 text-lg mt-6 ">
							Angular is a front-end programming framework based on TypeScript. It is
							used to develop dynamic and highly responsive web applications and SPAs.
						</p>
						<p className="leading-8 text-lg mt-6">
							But Angular 13, the latest version of this web development stack, claims
							to represent the future of enterprise-grade web app development
							solutions.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr4)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr5)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr6)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Vue.js</p>
						<p className="leading-8 text-lg mt-6">
							Vue.js is an open-source, lightweight, and user-friendly JavaScript
							framework that uses Model-View-ViewModel (MVVM) architectural patterns.
						</p>
						<p className="leading-8 text-lg mt-6">
							It is a hybrid of heavier web stack technologies and has extensive HTML
							capabilities.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr7)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr8)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr9)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							Top back-end tech stack to use in 2022 and 2023
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">ASP.NET</p>
						<p className="leading-8 text-lg mt-6">
							ASP.NET is a cross-platform, open-source framework for back-end
							development. It allows you to use a variety of libraries, languages, and
							editors.
						</p>
						<p className="leading-8 text-lg mt-6">
							Also, it supports the Common Language Interface (CLI) but follows the
							best practices when using the method you prefer to develop an
							application.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr10)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr11)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr12)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Node.js</p>
						<p className="leading-8 text-lg mt-6">
							Node.js is an open-source programming language that supports JavaScript
							runtime settings on Chrome V8 and allows you to develop fast and
							scalable web apps.
						</p>
						<p className="leading-8 text-lg mt-6">
							It employs a “single-threaded event loop” and uses the Google V8
							JavaScript engine.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr13)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr14)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr15)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Python</p>
						<p className="leading-8 text-lg mt-6">
							Python is an object-oriented and high-level programming language and is
							also the preferred language for feature-rich websites, machine-learning
							apps, data analysis, task automation, and software testing.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Advantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr16)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">Disadvantages</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr17)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-2xl font-bold mt-12">
							When to use this tech stack for web app
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-4">{lst(arr18)} </ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Modern Web Development Stacks</p>
						<p className="leading-8 text-lg mt-6">
							The increasing demand for app-driven business processes has led to the
							emergence of different tools, techniques, and mechanisms for
							implementing web apps for various use cases. So, every company/developer
							prefers a web development tech stack to solve purposes effectively.
						</p>

						<p className="leading-8 text-lg mt-6">
							Nowadays, many developed frameworks and tools focus on various critical
							aspects, including user-friendliness, scalability, stability, and
							expandability of web applications. For beginners, it may be challenging
							to choose the right tech stack. But considering the key things mentioned
							above helps them make the right choice.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>
						<p className="leading-8 text-lg mt-6">
							When choosing the right web stack, consider your project requirements,
							stack characteristics, and development cost to ensure a seamless web
							development project. Don’t just run behind something in trend but not in
							sync with your project.
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default WebStack;

//