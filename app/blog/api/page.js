import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import api from '@/public/blogs_images/images/api.jpg';
import api1 from '@/public/blogs_images/images/api1.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const arr1 = [
	{
		bld: '',
		txt: 'What Exactly is an API?',
	},
	{
		bld: '',
		txt: 'API and the Restaurant Analogy',
	},
	{
		bld: '',
		txt: 'How an API Works? ',
	},
	{
		bld: '',
		txt: 'Why Does API Matters? ',
	},
];

const arr2 = [
	{
		bld: '',
		txt: 'You act as an API customer that sends out the request.',
	},
	{
		bld: '',
		txt:
			'The waiter is the API, who takes your request to the kitchen and brings your food back to you.',
	},
	{
		bld: '',
		txt:
			'And the kitchen is a large database that contains all the ingredients needed to make your food.',
	},
];

const arr3 = [
	{
		bld: '',
		txt:
			'Public APIs are open to anyone and can be used without restrictions. They are often used by companies to make their products and services available to the general public. ',
	},
	{
		bld: '',
		txt:
			'Private APIs are only accessible by authorized users and may be subject to usage restrictions. They are typically used by companies to provide access to their internal data and systems for authorized employees and partners.',
	},
	{
		bld: '',
		txt:
			'Partner APIs are available to authorized partners of the API provider and may have special terms and conditions associated with their use.',
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

const Html = () => {
	return (
		<div>
			<Banner ttl="" txt="What Is an API And What Does it Do?" bg="bg-BlogApiBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={api} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="leading-8 text-lg">
									As developers, we are often asked to do the impossible. Deliver
									more, faster. But with the help of APIs, we can bridge the gap
									between what businesses are asking for and what is actually
									possible.
								</p>
								<p className="leading-8 text-lg">
									Thanks to APIs which is known as “Application Programming
									Interface”, we can reduce repetitive yet complex processes and
									dramatically speed up our application development processes.
								</p>
								<p className="leading-8 text-lg">
									Are you ready to start getting acquainted with HTML? Let’s go.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-12">
							By reusing existing code via APIs, we can focus on meeting the unique
							needs of each individual business rather than rewriting code for every
							project. APIs help us close the IT delivery gap and meet the
							ever-growing needs of businesses. So the next time you’re building an
							app, website, or program, remember to thank APIs for all they do to help
							us speed up our development process!
						</p>

						<p className="leading-8 text-lg mt-8">
							In the article, we will cover the following topics
						</p>

						<div className="leading-8 text-lg mt-4 ">
							<ul className="list-outside list-disc ml-8">{lst(arr1)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">What Exactly is an API</p>

						<p className="leading-8 text-lg mt-8">
							API stands for “Application Programming Interface”. It is a set of
							protocols and rules that allow software applications to communicate with
							each other. An API simplifies software development by enabling different
							pieces or apps that are built on top each other; they also help
							businesses open up its platforms so external developers may work
							separately while still retaining control over who has access – whether
							you’re sharing information across departments internally at your company
							HQ., partnering together outside vendors providing services specific
							needs like customer support tickets handled remotely via chatbots.
						</p>
						<p className="leading-8 text-lg mt-8">
							APIs have been a huge player in simplifying and increasing innovation.
							They enable companies to open up their applications’ data for external
							third-party developers, business partners or internal departments of the
							same company with ease by documenting what functions each API provides
							so that any developer can easily use them without needing knowledge on
							how it’s implemented which saves time when developing new products
							instead having someone who does know all about these details figure out
							where things go wrong before you even start building your product from
							scratch!
						</p>
						<p className="leading-8 text-lg mt-8">
							Developers can easily connect any application with another through APIs.
							This makes it possible for companies to share data and functionality
							between their applications, which in turn creates new ways of innovation
							within the business world as well!
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							API and the Restaurant Analogy
						</p>
						<p className="leading-8 text-lg mt-6">
							We are going to use the famous “Restaurant Analogy” to illustrate what
							API does.
						</p>
						<p className="leading-8 text-lg mt-6">
							Application Programming Interface or also known as “API”, they work
							behind the scenes everyday to make communication and information
							exchange easier between different computers.
						</p>
						<p className="leading-8 text-lg mt-6">
							You can imagine API as a waiter in a restaurant, and you are being
							seated at the able and a waiter called API comes to you with a menu.
							After placing your order, the waiter API passes it to the kitchen for
							further processing. When the order is ready, the waiter returns to you
							with your order food.
						</p>
						<p className="leading-8 text-lg mt-6">In this API Restaurant Analogy,</p>
						<div className="leading-8 text-lg mt-4 ">
							<ul className="list-outside list-disc ml-8">{lst(arr2)}</ul>
						</div>

						<p className="leading-8 text-lg mt-6">
							Let’s get back to the a real life example – the use of whether data.
							Most of the time when you see weather widgets on websites like Google,
							they are actually sourcing information from third-party with API. The
							weather API helps to send the latest weather details to the websites.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">How an API Works</p>
						<p className="leading-8 text-lg mt-6">
							As stated the above paragraph, APIs are set of defined rules that
							explain how application talking with one another. They’re here in order
							for developers, engineers and other professionals who want access but
							can’t always see inside their own programs or apps how they work so as
							not break anything! APIs sit between an application& web servers acting
							as intermediaries during data transfer processings between systems. A
							great API can really help make things easier when building software
							because instead of having hundreds (or even thousands)of lines just
							trying get something done yourself – all they’ll need from developers is
							a few lines!
						</p>

						<p className="leading-8 text-lg mt-6">
							Here is how an API works in general:
						</p>

						<p className="leading-8 text-lg mt-6">
							1) A client application requests information via an API, it is processed
							by the server and sent to one or more applications behind. The Uniform
							Resource Identifier (URI) specifies which applications will receive this
							request including together with the request verb, header and payloads.
						</p>
						<p className="leading-8 text-lg mt-6">
							2) The server sends a response and transfer data to the API with the
							requested information from the applications behind.
						</p>
						<p className="leading-8 text-lg mt-6">
							APIs provide a means of security by design because they act as an
							intermediary between two systems, which removes the chance that either
							party will have access to sensitive information directly. APIs usually
							include authorization credentials so calls can only be made with correct
							permissions and/or limits on what’s being requested from middleware
							components like header fields or query string parameters for additional
							protection during exchanges over HTTP requests within sessions.
						</p>
						<div className=" justify-center items-start">
							<Image src={api1} alt="" className="w-3/5" />
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							Different Types of APIs – Public API, Private API & Partner API
						</p>
						<p className="leading-8 text-lg mt-6">
							There are also different types of APIs depends on it usage and setting –
							Public API, Private API & Partner API.
						</p>
						<div className="leading-8 text-lg mt-4 ">
							<ul className="list-outside list-disc ml-8">{lst(arr3)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Why Does API Matters</p>
						<p className="leading-8 text-lg mt-6">
							API is the backbone of how businesses operate and communicate with one
							another. They make it possible for companies to share data and
							functionality between their applications, which in turn creates new ways
							of innovation within the business world as well. Without APIs, the world
							would be a very different place – businesses would be much less
							efficient and communication would be more difficult.
						</p>
						<ul className="list-outside list-disc ml-8 mt-2">{lst(arr2)}</ul>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							API Improve Collaborations
						</p>
						<p className="leading-8 text-lg mt-6">
							API developers create code that allows applications to exchange data and
							functionality. This enables companies to develop new ways of working
							together and improves collaboration. For example, imagine a customer
							service application that needs to access data from a CRM system. The
							customer service application would use an API to request the data from
							the CRM system, and the CRM system would then provide the data via the
							API.
						</p>
						<p className="leading-8 text-lg mt-6">
							APIs are the driving force behind integration and seamless communication
							between different platforms. This enables automation of workflows,
							improved collaboration within an organization as well more information
							sharing among enterprises which improves productivity while also
							resulting in better performance for each company involved.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							API Make Innovation Easier
						</p>
						<p className="leading-8 text-lg mt-6">
							API’s have made innovation easier by allowing different companies to
							connect with each other. This has allowed for companies to diversify
							their services and access new markets. API’s have also driven digital
							transformation by allowing companies to more easily adopt new
							technologies.
						</p>
						<p className="leading-8 text-lg mt-6">
							APIs are the lifeblood of modern business. They allow companies to
							integrate their platforms and apps together, improving workplace
							productivity by automating workflows or providing access information
							from different sources in one place – without APIs you’re left with
							informational silos which compromise performance!
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							API Make Algorithm and Data Monetisation Possible
						</p>

						<p className="leading-8 text-lg mt-6">
							Many companies are making their APIs available for free so that they can
							build an audience around their brand and forge relationships with
							potential business partners. However, if the API grants access to
							valuable digital assets then you could monetise it by selling usage
							rights in those resources.
						</p>
						<p className="leading-8 text-lg mt-6">
							API monetisation is the process of generating revenue from an API. This
							can be done in a number of ways, including charging for access to the
							API, charging for usage of the API, selling data accessed through the
							API, or selling API-based services. API monetisation is becoming
							increasingly important as companies look for new ways to generate
							revenue.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>

						<p className="leading-8 text-lg mt-6">
							So, what is an API? In a nutshell, it’s the bridge behind how
							applications talk to each other. By understanding how APIs work and why
							they matter, you can start building your own—and reap all of the
							benefits that come with better collaborations, innovation, and data
							monetisation. Ready to get started?
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default Html;

//