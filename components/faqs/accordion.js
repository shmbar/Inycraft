'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import  Link  from 'next/link';
import styles from '@/app/faqs/faqs.module.css'

const hiddenTexts = [
	{
		label: 'What is a web application?',
		value:
			'A web application is an interactive app built using web development technologies that users can access from their browser.',
	},
	{
		label: 'What are progressive web apps?',
		value:
			'Progressive web apps (PWAs) combine desirable features of both native and hybrid apps. They can be installed and accessed quickly like a mobile app while still maintaining the general characteristics of a traditional website.',
	},
	{
		label: 'What is the difference between a web app and a website?',
		value:
			'The difference between a web application and a website is that web apps place a certain focus on user interaction akin to a mobile app, while traditional websites don`t necessarily prioritize user engagement.',
	},
	{
		label: 'What is full stack development?',
		value:
			'Full stack development is what happens when you have a software development team that approaches software development at every angle. A full stack is composed of all the components necessary for the front-end and back-end of development.',
	},
	
	{
		label: 'What is front-end development?',
		value:
			'Front-end development mostly has to do with managing what people interact with and see in a software application.',
	},
	{
		label: 'What is back-end development?',
		value:'Back-end development handles everything that the user typically does not see. As such, back-end developers play a necessarily humble role behind the scenes. But their work guarantees the functionality of every software project.'
	},
	{
		label:'What is the cost of web app development?',
		value:'The cost of developing an interactive, feature-rich web app will also depend on the complexity of the app and your overall preferences. Some of the additional factors include any special feature included, the selection of the platform, the technology, and the expertise of the web app development team. You can know about the estimated price of your project with our help.',
	},
		{
		label: 'What is digital transformation?',
		value:'Digital transformation enables companies to integrate digital technology smartly into all business areas to drive fundamental change and deliver value to customers. The benefits include greater business agility, increased efficiency, and unlocking the new value of employees, customers, and shareholders.'
	},
	
	
	{
		label: 'How can I reach you?',
		value:
			<span>At this moment, you can only reach us by filling the contact form <Link className='text-blue-800 cursor-pointer font-semibold' href='/contact'>here </Link></span>,
	},
	{
		label: 'What is agile software development?',
		value:
			'Agile software development is a combination of iterative and incremental process models with focus on process adaptability and customer satisfaction by rapid delivery of working software product. Agile Methods break the product into small incremental builds. These builds are provided in fortnightly iterations.',
	},
	{
		label: 'Why outsource software development?',
		value:
			'There are numerous advantages to outsourcing software development. The most obvious being you can switch us “on” and “off” as needed to match your projects requirements. Also, by outsourcing to an established and trusted software house you are gaining access to our talented team. We have everything needed for quality end to end software development.',
	},
	
	{
		label: 'What are your working methods?',
		value:
			'We apply Agile methodology to most of the projects. There"ll be sprint meetings and reviews so that everything is transparent. Besides, we also code in pair to improve productivity and reduce errors.',
	},
	{
		label: 'How long will it take to build the software?',
		value:
			'It depends on the requirements of your project. It can be as quick as a couple of months for smaller projects. On average, we aim for 6 months for larger projects, and resource the team appropriately to deliver in this timescale. Much larger projects, or those with a complex “critical path”, can take much longer, or be “ongoing” projects with regular releases.',
	},
	
	{
		label: 'What’s the current technical stack of your company?',
		value:
			'React, Angular, Meteor, Golang, Docker, Node.',
	},
	{
		label: 'I want to build a new product, what documents should I send you?',
		value: 'You can answer our questionnaire as well as send us related documents about the product (requirements, timeline, mockups, designs, etc.)',
	},
	{
		label: 'We have sent the requirements/specs to your team. When can I expect a reply?',
		value: 'Typically, we will reply shortly and it will take about 1-2 working days for us to provide you with our rough estimation.',
	},
	{
		label: 'May I see some of the case studies?',
		value: <span>Here are a few of our recent works: <br/>
		https://www.guestodo.com <br/> https://www.alufclean.club </span>
	},
	{
		label: 'How can we sign contracts without a face-to-face meeting?',
		value: <span>We have a very flexible way to sign contracts as most oversea clients do it via the Internet:
		<br/>Firstly, please print the contract you will be provided with and sign, then scan the paper and email it to us.
		<br/>We will sign the scanned contract and send you the scanned contract with both parties' signitures.
		<br/>In case you want to have physical form, please address your requirement to us.</span>
	},
	{
		label: 'Once the project is finished, how will the maintenance look?',
		value: <span>There are 3 types of maintenance:
		<br/>If there's a bug or any issue within the project scope in the contract, then we'll support to fix free within 3 months from the date of delivery.
		<br/>If you change a request or extra feature outside the project scope, we'll estimate and make a new contract, charging an additional amount.
		<br/>Timeline and project scope won't matter if you want to start a new hourly contract to maintain the product.</span>
	},

	
];

const AccordionApp = () => {
	return (
		<div className="m-auto max-w-3xl mt-8">
			<div className="text-lg">
				{hiddenTexts.map((x, i) => (
					<AccordionItem key={i} hiddenText={x} />
				))}
			</div>
		</div>
	);
};

const AccordionItem = (props) => {
	const { label, value } = props.hiddenText;
	const [visible, setVisible] = useState(false);


	const activeStatus = visible ? true : false;
	
	return (
		<div className='border-b border-b-indigo-100 relative z-0'>
			<button
				className="p-5 w-full flex justify-between items-center z-10 relative text-left"
				onClick={() => setVisible(!visible)}
			>
				<p className='font-medium text-cyan-700'>{label}</p>
				<span 
					 className={` ${
							visible
								? '-rotate-180 duration-700'
								: 'rotate-0 duration-200'
						} text-cyan-700 `} 
					>
					<FaChevronDown/> 
				</span>
			</button>
			<p className={` ${styles.accordion__content} ${activeStatus && styles.accordion__content_active} `}>{value}</p>
		</div>
	);
};

export default AccordionApp;