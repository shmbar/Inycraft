import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import react from '@/public/blogs_images/images/react.jpg';
import react1 from '@/public/blogs_images/images/react1.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const Web3 = () => {
	return (
		<div>
			<Banner ttl="" txt="What React Is: The Basics Of React" bg="bg-BlogReactBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-center">
								<Image src={react} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1">
								<p className="leading-8 text-lg">
									React is one of the most popular and widely used tools for
									building modern web apps right now. At least 68.9% of the
									developers who work on React say they enjoy using this library
									and plan to keep doing so. As web development is the backbone of
									most businesses nowadays, it’s important for us to know exactly
									what React is.
								</p>
								<p className="leading-8 text-lg">
									Let’s start this part of the post by talking about the
									definition of React.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold  mt-12">What Is React?</p>
						<p className="leading-8 text-lg mt-6">
							The user interface development library called React is written in
							JavaScript. It is run by Facebook in collaboration with an open-source
							developer community. Even though React is a library and not a language,
							it is quite popular in the field of web development. The library
							appeared for the first time in May 2013, and since then it has become
							one of the most popular front-end libraries for web development.
						</p>
						<p className="leading-8 text-lg mt-8">
							A library is not the same thing as a development framework, which is a
							set of ideas and a plan for addressing and meeting the needs of
							development. A library is simply a collection of books and other
							materials. When building an application with React.js, you can choose
							from a number of different Javascript frameworks. Some examples of these
							frameworks are Create React App, Shards React, Redux, and React DnD.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">The 5 Things To Like About React</p>

						<p className="leading-8 text-lg mt-6">
							The React front-end development framework is now more popular than any
							other front-end development framework. This could happen for a few
							different reasons.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							1. React Is Easy To Learn
						</p>
						<p className="leading-8 text-lg mt-6">
							Angular and Ember are “Domain-specific Languages,” which means that they
							are hard to learn. React, on the other hand, is easy to understand for
							anyone with even a basic background in programming. All you need to know
							to use react is the basics of CSS and HTML.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							2. Improved Performance
						</p>
						<p className="leading-8 text-lg mt-6">
							Since React uses Virtual DOM, making web apps is faster because of it.
							Instead of updating all the components again, as most web apps do,
							Virtual DOM looks at the previous states of the components and only
							updates the parts of the Real DOM that have changed. Traditional web
							apps, on the other hand, update all of the parts at the same time.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">3. High Testability</p>
						<p className="leading-8 text-lg mt-6">
							It’s very easy to test applications made with ReactJS. Since React views
							are functions of the state, we can change the state in the ReactJS view
							and then look at the output and any actions, events, functions, etc.
							that come from that.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							4. Reusable Components
						</p>
						<p className="leading-8 text-lg mt-6">
							Components are the basic building blocks of every React app. Most of the
							time, a single app will have many different components. These parts have
							their own logic and controls, and they can be used over and over again
							in the app. Because of this, a lot less time is necessary to design the
							application.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">5. One-way Data Flow</p>
						<p className="leading-8 text-lg mt-6">
							React follows a data flow in only one direction. This means that when
							making a React project, developers usually put child components inside
							their respective parent components. Since data only goes in one
							direction, it is much easier to fix bugs and figure out where a problem
							is in an application.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							The 3 Significant Features Of React
						</p>
						<p className="leading-8 text-lg mt-6">
							React comes with important features that make it attractive to
							JavaScript developers. One of these is the availability of reusable
							React library code, which speeds up development and makes it less likely
							that mistakes will exist in the code.
						</p>
						<div className="justify-center items-center">
							<Image src={react1} alt="" className="w-3/5" />
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">1. JSX</p>
						<p className="leading-8 text-lg mt-6">
							Instead of the more common JavaScript, JSX is for creating templates in
							React. JSX is a simple JavaScript add-on that makes it possible to quote
							HTML and render subcomponents using HTML tag syntax. We use JavaScript
							to turn the HTML syntax into calls to the React Framework. We can also
							write in the standard JavaScript language.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">2. Virtual DOM</p>
						<p className="leading-8 text-lg mt-6">
							The Real DOM is what the Virtual DOM in React is based on. The Virtual
							DOM is a lighter version of the Real DOM. Real DOM manipulation is much
							slower than virtual DOM manipulation. When the status of an object
							changes, Virtual DOM will only change the representation of that object
							in the real DOM, not all of them.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">3. Extensions</p>
						<p className="leading-8 text-lg mt-6">
							React can be used as a user interface (UI) framework, but it also has a
							number of add-ons that allow it to be used for the whole application
							architecture. It provides server-side rendering and makes it easier to
							build mobile apps. You can add to React in many ways, such as by using
							Flux and Redux.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							The 4 Common Threats To Watch Out For
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							1. Cross-site Scripting (XSS)
						</p>
						<p className="leading-8 text-lg mt-6">
							The act of putting a malicious script into the source code of an online
							application is X-site-stuffing, or XSS for short. This script is picked
							up by the browser, which thinks it is safe, and then the bad code is run
							as part of an application. If an XSS attack works, the attacker might be
							able to steal user passwords
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							2. Distributed Denial of Service (DDoS)
						</p>
						<p className="leading-8 text-lg mt-6">
							DDoS attacks flood a web app’s infrastructure with more users than it
							can handle, which makes the app crash. Their goal is to stop an
							application from working and make it inaccessible to its users. Some of
							the most common ways to do a distributed denial of service attack are
							with UDP, ICMP, SYN, and HTTP request flooding. An attacker will try to
							use up as many resources as possible, like memory and CPU processing
							time, because a server and firewall must respond to each request.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							3. XML External Entity Attack (XXE)
						</p>
						<p className="leading-8 text-lg mt-6">
							Most of the time, this kind of React attack is made on a text-based
							language called extensible markup that is used by a web application. The
							attacker falls into the extensible markup text-based language (XML)
							parser to turn XML into readable code. Even though the language is used
							during the conversion process to store and unify the data, XXE is still
							put into the system. To avoid this kind of vulnerability, you should
							store any sensitive data in JSON format and use SAST tools to find any
							XXE code in your apps. You should also keep your system up-to-date.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							4. Cross-Site Request Forgery (CSRF)
						</p>
						<p className="leading-8 text-lg mt-6">
							In this type of React cyberattack, the person who did it gets the user
							to do something on the web app that the attacker wants. This may involve
							the user sending money or agreeing to do something. Social engineering
							is the name for this kind of cyberattack. The main reason why people do
							things that are bad for themselves is how the bid is made. In fact, many
							of these bad requests come with the help of the programming language
							JavaScript to trick the user into falling into a trap. There are things
							that can be done to protect against this, like making sure that CSRF
							tokens are read from cached apps. In contrast, the server should be
							issued an authenticated request in order to permit only relevant
							headers.
						</p>
						<p className="leading-8 text-lg mt-6">
							Other types of cyberattacks include SQLi, CSV injection, arbitrary code
							execution, Zip-Slip arbitrary file write via archive, unsecured
							randomization, resource downloaded using an insecure protocol, and many
							more. Most cyberattacks take one of these four forms.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Conclusion</p>
						<p className="leading-8 text-lg mt-6">
							With React, it’s possible to make corporate apps, web apps, and mobile
							apps that all work well. It is easy to use and can help you in many ways
							with the tasks you are doing. In addition, it lets you work with a large
							number of developers who enjoy working with the library.
						</p>
						<p className="leading-8 text-lg mt-6">
							The React framework also has features that make it possible to make user
							interfaces that are easy to understand and applications that are fast,
							scalable, and efficient. React makes it easy for developers to work with
							HTML and Javascript, and it allows them to build libraries of reusable
							components, which saves them time.
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default Web3;

//