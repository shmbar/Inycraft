import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import fstackDev from '@/public/blogs_images/images/fstackDev.jpg';
import fstackDev1 from '@/public/blogs_images/images/fstackDev1.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const WebAppDev = () => {
	return (
		<div>
			<Banner ttl="" txt="What Is Full Stack Development?" bg="bg-BlogFullStackDevBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={fstackDev} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="leading-8 text-lg">
									<span className="font-bold">
										What is full stack development?{' '}
									</span>
									Full stack development is what happens when you have a software
									development team that approaches software development at every
									angle. No matter the method, neither the front-end nor back of
									development is neglected.
								</p>
								<p className="leading-8 text-lg">
									In most cases, full stack development is what’s required to make
									sure the needs of both the client-side and server-side are being
									fulfilled. To learn more about how this happens and what full
									stack development is, stay tuned.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">What Is Full Stack Development?</p>
						<p className="leading-8 text-lg mt-4">
							In the software world, the terminology is often influenced by English
							idioms — or expressions that say one thing and mean another. To be
							clear, it’s very likely that a developer of any kind has never come
							across a legitimate ‘stack’ in any of their code. Whether that’s a stack
							of pancakes or a stack of laundry, these are not important elements of
							coding.
						</p>

						<p className="leading-8 text-lg mt-4 ">
							That said, the stack is a relevant metaphor to describe the layers
							involved in software development. Integral to this idea, is that
							software development builds on top of itself rather than being linear.
						</p>

						<p className="leading-8 text-lg mt-4">
							Since a stack by definition is a large quantity of something, it makes
							sense that this term would be appropriate for software development.
							Because in this context, a stack in its fullest form has all the
							ingredients for a complete software project.
						</p>

						<p className="leading-8 text-lg mt-4">
							A full stack, for example, is composed of all the components necessary
							for the front-end and back-end of development. Clearly, front-end and
							back-end are idioms too, representing different parts of the stack that
							need to be addressed.
						</p>
						<p className="leading-8 text-lg mt-4">
							In addition to front-end and back-end development, the layers of a stack
							may or may not involve databases, DevOps, or features unique to mobile
							app development.
						</p>
						<p className="leading-8 text-lg mt-4">
							There are also full stack developers. While some consider these people
							to be a jack of all trades, master of none, you should understand that
							these developers are often masters of a few technologies, and
							comfortable with the rest.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-4">
							<span className="font=-bold">
								Full stack web development is pretty self-explanatory. It refers to
								the development that makes up a website.
							</span>{' '}
							On top of the layers of full stack development mentioned above, full
							stack web development would also intertwine networking, hosting, and
							server-related constituents.
						</p>

						<p className="leading-8 text-lg mt-4">
							A full stack developer will have knowledge of the various roles that
							enable full stack web development. This would mean having a deep
							knowledge of client software and server software, including of course
							web frameworks that will ease the software development process.
						</p>
						<p className="leading-8 text-lg mt-4">
							Although a team of full stack developers can work on a full stack web
							development project, your business can also hire a team of diversely
							skilled developers — both front-end and back-end developers — to
							complete the same project.
						</p>
						<p className="leading-8 text-lg mt-4">
							Unless a specific distinction is made between a web development project
							and a mobile app development project, full stack development and full
							stack web development are interchangeable and you should reference the
							same comprehension.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Full Stack vs. Front-End vs. Back-End
						</p>

						<p className="leading-8 text-lg mt-4">
							Your understanding of full stack development should be an amalgamation
							of what happens on the front-end and back-end. But how does that look in
							action? Take a look at the comparison below to gather some ideas.
						</p>
						<div className="justify-center items-start">
							<Image src={fstackDev1} alt="" className="w-3/5" />
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Full Stack</p>
						<p className="leading-8 text-lg mt-4">
							You’ve likely heard enough about full stack development. At any rate,
							here’s once more for good measure: full stack development refers to
							software development that happens on the front-end and back-end of a
							project.
						</p>
						<p className="leading-8 text-lg mt-4">
							For most software development projects, full stack development is a
							given. Front-end development would involve building a graphical user
							interface (UI).
						</p>
						<p className="leading-8 text-lg mt-4">
							This happens alongside back-end development which involves writing
							maintainable code, or the business logic, to make sure the application
							runs smoothly.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Front-End</p>
						<p className="leading-8 text-lg mt-4">
							Front-end development, as mentioned, mostly has to do with managing what
							people interact with and see in a software application.
						</p>

						<p className="leading-8 text-lg mt-4">
							Having web pages or mobile applications that are easily navigable and
							efficiently interactive is integral for users to continue to utilize
							your software.{' '}
						</p>
						<p className="leading-8 text-lg mt-4">
							Those who work on the front-end have knowledge of client software like
							HTML, CSS, and JavaScript.
						</p>
						<p className="leading-8 text-lg mt-4">
							Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS) are
							two of the core technologies for web pages. HTML determines the
							structure of a web page, and CSS influences the visual layout.
						</p>

						<p className="leading-8 text-lg mt-4">
							JavaScript is a programming language making for dynamic web pages. The
							simple interactions that you take for granted like dragging and dropping
							or scrolling, are all the trademarks of JavaScript programming.
						</p>
						<p className="leading-8 text-lg mt-4">
							Many JavaScript frameworks and libraries also exist to speed up and
							simplify the development process. Similarly, other technologies support
							HTML and CSS.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70"> Back-End</p>
						<p className="leading-8 text-lg mt-4">
							Back-end development handles everything that the user typically does not
							see. As such, back-end developers play a necessarily humble role behind
							the scenes. But their work guarantees the functionality of every
							software project.
						</p>
						<p className="leading-8 text-lg mt-4">
							To be clear, whatever front-end technology is being built for users to
							see, back-end developers are peeking out from the curtain directing
							these features with their code.
						</p>
						<p className="leading-8 text-lg mt-4">
							Server software would involve languages that perform well when it comes
							to servers and networking like Python or C++. Query languages for
							managing databases fall under the category of server software too.
						</p>
						<p className="leading-8 text-lg mt-4">
							Node.js, in particular, is a favorite among back-end developers. This is
							a JavaScript framework enabling back-end development, meaning developers
							can use JavaScript for front-end and back-end development — in other
							words, full stack development.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 leading-[3rem]">
							What Are the Most Popular Technology Stacks for a Full Stack Development
							Project?
						</p>
						<p className="leading-8 text-lg mt-4 font-bold">
							A technology stack is a means of describing the different technologies
							to go into a software development project. Using tech stacks to recount
							this information is a streamlined way of communicating how an
							application is being built.
						</p>
						<p className="leading-8 text-lg mt-2">
							Some popular tech stacks are detailed here.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">LAMP Stack</p>
						<p className="leading-8 text-lg mt-4">
							The LAMP stack denotes the following components: Linux, Apache, MySQL,
							PHP/Perl/Python. In respective order, these technologies reflect the
							operating system, web server, database management system, and the
							programming language for the application.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">MEAN Stack</p>
						<p className="leading-8 text-lg mt-4">
							MEAN stands for MongoDB, Express.js, AngularJS, and Node.js. MongoDB is
							a database; Express.js a web application framework; and AngularJS is
							another web framework that empowers developers to code JavaScript into
							HTML.
						</p>
						<p className="leading-8 text-lg mt-4">
							Notice that much of the stack includes JavaScript frameworks. This is a
							huge advantage for the software stack overall. Using JavaScript as the
							primary programming language of the stack makes development more
							convenient for JavaScript experts.
						</p>
						<p className="leading-8 text-lg mt-4">
							This solutions stack also does not rely on an operating system, another
							advantage. Higher portability is the result.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">MERN Stack</p>
						<p className="leading-8 text-lg mt-4">
							In a similar fashion, MERN delineates MongoDB, Express.js, React.js, and
							Node.js. Here is yet another collection of JavaScript frameworks,
							driving its popularity. Utilizing React rather than Angular, however,
							makes it possible to develop mobile and hybrid apps.
						</p>

						<p className="text-3xl md:text-5xl font-bold mt-12">
							What Are the Skills Needed for a Full Stack Developer?{' '}
						</p>

						<p className="leading-8 text-lg mt-4 font-bold">
							Again, full stack developers should be experts of at least a few
							front-end and back-end technologies, and somewhat familiar with the lot
							they’re not advanced in.
						</p>
						<p className="leading-8 text-lg mt-4">
							The front-end technologies that full stack developers should be familiar
							with are front-end programming languages and the web frameworks that
							support them. Of course, this is in addition to HTML and CSS which are
							classic to front-end development
						</p>
						<p className="leading-8 text-lg mt-4">
							On the back-end, a full stack developer should be qualified for database
							management. To that effect, they should have a reasonable skill set
							relating to back-end languages — namely, a programming language and a
							query language.
						</p>
						<p className="leading-8 text-lg mt-4">
							To add, full stack developers must know how to work with version control
							systems (VCS), application programming interfaces (APIs), and servers.
						</p>
						<p className="leading-8 text-lg mt-4">
							More proficient full stack developers are adept when it comes to topics
							such as security, testing algorithms, and data structures.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							How Much Does It Cost To Hire a Full Stack Developer?
						</p>
						<p className="leading-8 text-lg mt-4">
							Indeed reports demonstrate that full stack developers make an average
							yearly salary of $108,847. The data is based on 11.8k self-reported
							salaries as of February 2021. Without a doubt, full stack development is
							a very lucrative undertaking.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>
						<p className="leading-8 text-lg mt-4">
							With full stack developers, you have the opportunity to unravel all the
							complexities of your next software development project.
						</p>
						<p className="leading-8 text-lg mt-4">
							Having one team of developers that are working on either side of your
							vision is one vehicle for better, more direct communication.
						</p>
						<p className="leading-8 text-lg mt-4">
							Our job to give you what you need to see your project reach the light.
							If what you need is full stack developers, don’t worry. We got them.
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default WebAppDev;

//