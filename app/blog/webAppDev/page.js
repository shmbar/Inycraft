import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import webAppDev from '@/public/blogs_images/images/webAppDev.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const arr1 = [
	{
		bld: '',
		txt: 'responsive',
	},
	{
		bld: '',
		txt: 'connectivity independent',
	},
	{
		bld: '',
		txt: 'app-like interactions',
	},
	{
		bld: '',
		txt: 'fresh',
	},
	{
		bld: '',
		txt: 'safe',
	},
	{
		bld: '',
		txt: 'discoverable',
	},
	{
		bld: '',
		txt: 're-engagable ',
	},
	{
		bld: '',
		txt: 'installable  ',
	},
	{
		bld: '',
		txt: 'linkable ',
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

const WebAppDev = () => {
	return (
		<div>
			<Banner
				ttl=""
				txt="Web App Development in 2023: Everything You Need to Know"
				bg="bg-BlogWebAppDevsBG"
			/>

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 xl:col-span-1 flex justify-center items-start">
								<Image src={webAppDev} alt="" className="" />
							</div>
							<div className="col-span-2 xl:col-span-1 ">
								<p className="leading-8 text-lg">
									Web app development empowers web-based projects to perform and
									act similarly to a mobile app. Web applications engage users,
									prioritizing responsive interactions, but are still delivered
									through the internet over a network.
								</p>
								<p className="leading-8 text-lg">
									You can say that web app development is the posterity of web
									development. While web development and web app development share
									similarities, web app development is by definition more dynamic
									than traditional web development can offer.
								</p>
								<p className="leading-8 text-lg">
									Both are important, but knowing the difference will help you
									understand what web app development is as well as whether or not
									it sounds like a good idea for your business.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">What Is a Web Application?</p>
						<p className="leading-8 text-lg mt-4 font-bold">
							A web application is an interactive app built using web development
							technologies that users can access from their browser.
						</p>

						<p className="leading-8 text-lg mt-4">
							Web apps have the typical front-end and back-end web development
							technologies. In theory, web apps are closely related to websites, thus
							web app development and web development share many characteristics.
						</p>

						<p className="leading-8 text-lg mt-4">
							On the front-end, for instance, web app developers utilize JavaScript,
							CSS, and HTML. The back-end for web apps might similarly use the same
							server-side languages developers use to build websites such as Ruby or
							Python.{' '}
						</p>

						<p className="leading-8 text-lg mt-4">
							However, web apps operate on any device in a mode that is distinctly
							different than that of a traditional website.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							What's the Difference Between a Web App and a Wesbite?
						</p>
						<p className="leading-8 text-lg mt-4">
							Web apps are designed to be interactive whereas a website’s primary
							purpose is to present information.{' '}
						</p>

						<p className="leading-8 text-lg mt-4">
							Distinguishing one from the other is admittedly nit-picky, but once you
							start recognizing the difference you’ll see why it matters.
						</p>
						<p className="leading-8 text-lg mt-4">
							Ironically, learning a bit more about mobile development will be handy
							for learning about web app development. For instance, do you know the
							difference between native and hybrid apps?
						</p>
						<p className="leading-8 text-lg mt-4">
							Native apps are mobile apps that are specifically built for the
							platforms they run on. In effect, developers must employ native
							technologies to use them — the Swift programming language for iOS, or
							the Java programming language for Android.
						</p>
						<p className="leading-8 text-lg mt-4">
							The disadvantage of native apps is that companies that build natively
							must develop different apps for different platforms, as each app will
							require a different codebase in its native language.
						</p>
						<p className="leading-8 text-lg mt-4">
							Hybrid apps provide a solution for quicker development. Hybrid apps take
							advantage of both native and web technologies and as a result, they can
							extend multi-platform compatibility.
						</p>
						<p className="leading-8 text-lg mt-4">
							Web apps are neither of these things. Web app developers solely make use
							of web technologies. However, web applications place a certain focus on
							user interaction, just like a mobile app, and not like a traditional
							website at all.
						</p>
						<p className="leading-8 text-lg mt-4">
							Traditional websites may have users who scroll or click to consume more
							information, or they may even enter an email address or perhaps more
							personal information for an online purchase.
						</p>
						<p className="leading-8 text-lg mt-4">
							But a web app optimizes the user experience (UX) so users can do much
							more. And web apps must be dynamically updated to handle these sorts of
							interactions.
						</p>
						<p className="leading-8 text-lg mt-4">
							For example, you’ll notice that using Twitter or Facebook from a web
							browser is a more captivating experience than clicking onto the website
							of your local pizzeria. That’s because the former are web apps and the
							latter is a website.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							What Are Progressive Web Apps (PWAs)?
						</p>
						<p className="leading-8 text-lg mt-4">
							Progressive web apps (PWAs) are a particular type of web app that is
							fairly modern in the digital world. PWAs combine desirable features of
							both native and hybrid apps.{' '}
						</p>

						<p className="leading-8 text-lg mt-4">
							Like any web app should, PWAs reside in a web browser. Users can access
							PWAs there like any website.
						</p>
						<p className="leading-8 text-lg mt-4">
							Still, having a PWA means going through the classic download and install
							process that users expect with mobile apps. But this is a good thing as
							PWAs can always be readily available from the user’s device.
						</p>
						<p className="leading-8 text-lg mt-4">
							Both the Google Play Store and the Microsoft Store welcome PWAs to their
							platform. So in some ways, a PWA is like a mobile app.
						</p>
						<p className="leading-8 text-lg mt-4">
							Progressive web apps launch from a user’s device without the need to
							open a web browser first and they can send push notifications directly
							to your mobile device. They can also work offline and load in a jiffy.
						</p>
						<p className="leading-8 text-lg mt-4">
							According to Frances Barriman and Alex Russell, the original Google
							engineers who gave PWAs their name, PWAs fit the following criteria:
						</p>

						<ul className="list-outside list-disc ml-8">{lst(arr1)}</ul>

						<p className="leading-8 text-lg mt-4">
							What makes PWAs so alluring is their performance. A concept like web
							apps should be alluring in itself because of its cross-platform
							capabilities.
						</p>
						<p className="leading-8 text-lg mt-4">
							But in reality, most everyone in the software development industry
							believe web apps and hybrid apps have slower performance than native
							apps.
						</p>
						<p className="leading-8 text-lg mt-4">
							Progressive web apps defy this stereotype. Though it is important to
							keep in mind that PWAs do not intend to take mobile apps’ role.
						</p>
						<p className="leading-8 text-lg mt-4">
							No, PWAs are best defined as traditional websites in mobile app
							packaging. In this way, they are not as interactive as a conventional
							web app nor as boring or inaccessible as a standard website.
						</p>
						<p className="leading-8 text-lg mt-4">
							PWAs are unique in standing; they break the mold of what a web visitor
							or smartphone user anticipates.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What Are the Advantages and Disadvantages of Web Applications?
						</p>
						<p className="leading-8 text-lg mt-4">
							Web-based applications ultimately ease the development process.
							Businesses can give their users interactivity without having to use the
							time and resources necessary for building a mobile application.{' '}
						</p>

						<p className="leading-8 text-lg mt-4">
							That said, weighing the cons of web application development against the
							pros is still useful for getting the kinks ironed out.{' '}
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Advantages of Web Apps
						</p>
						<p className="leading-8 text-lg mt-4">
							First, you should take a closer look at the advantages of web app
							development. You’ll find that web apps are an efficient option for
							boosting the UX of consumers who prize user engagement when it comes to
							their web browsing.{' '}
						</p>
						<p className="leading-8 text-lg mt-4">
							Users can access web apps from any device. Got a tablet? You can use a
							web app. Got a smartphone? You can use a web app. A laptop? Even better!
						</p>
						<p className="leading-8 text-lg mt-4">
							Basically, web apps are entirely multi-platform. They provide users with
							an entertaining exchange no matter the operating system, whether that be
							Android, iOS, PC, etc. so long as users maintain an internet connection.{' '}
						</p>
						<p className="leading-8 text-lg mt-4">
							Web apps do not need to be downloaded and installed. Or in the case of
							PWAs, the download and installation won’t be the equivalent of the app
							actually taking up space on your device.
						</p>
						<p className="leading-8 text-lg mt-4">
							While smartphones these days seem to be ever-increasing their storage
							space in what seem to be squared increments, some people simply don’t
							like the bloat of having lots of apps or otherwise, they just don’t have
							the space.
						</p>
						<p className="leading-8 text-lg mt-4">
							This reality also frees users from the obligation of constant updates.
							And with progressive web apps specifically, you can get many of the
							benefits of mobile apps with none of the hassle.
						</p>
						<p className="leading-8 text-lg mt-4">
							Once again, most mobile app developers and web developers are not one
							and the same. This is a shame because that means if you want the best of
							both worlds, you’ll always need at least twice as many developers or at
							least twice as much talent.
						</p>
						<p className="leading-8 text-lg mt-4">
							Oh, and if you want your mobile app to be featured on both the Apple App
							Store and Google Play Store, then that will require two distinct apps if
							you decide to go native.
						</p>
						<p className="leading-8 text-lg mt-4">
							This means that if you want both a website and a mobile app on all
							platforms, then you’ll need thrice as many resources.
						</p>
						<p className="leading-8 text-lg mt-4">
							Web app development circumvents these frustrations. There is strictly
							one codebase to work with.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Disadvantages of Web Apps
						</p>
						<p className="leading-8 text-lg mt-4">
							Of course, a pro and con list would be futile if there were only pros.
							Naturally, web app development has disadvantages too.
						</p>

						<p className="leading-8 text-lg mt-4">
							Despite all the praise, web apps cannot replace mobile apps and will
							operate a bit slower than an application that is hosted on a local
							server.
						</p>
						<p className="leading-8 text-lg mt-4">
							PWAs definitely try to mitigate this side effect, but there’s no
							veritable evidence that they’ve successfully eliminated this
							disadvantage altogether.
						</p>
						<p className="leading-8 text-lg mt-4">
							Generally, web apps need internet access to perform well or in most
							cases, to perform at all. Though PWAs do deter from this typecast, the
							most interactive of web apps will not respond if you don’t have a web
							connection.
						</p>

						<p className="leading-8 text-lg mt-4">
							Native technology will always carry an advantage over non-native
							technologies. Since web apps aren’t native, they don’t have the same
							capacity to collaborate effectively with the hardware and operating
							system of your specific device.
						</p>
						<p className="leading-8 text-lg mt-4">
							As system settings differ from one device to the next, and web apps are
							by definition multi-platform, developers plainly don’t program apps to
							work with such specifications.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12"> 3 Types of Web Applications</p>
						<p className="leading-8 text-lg mt-4">
							There are different types of web applications with different behaviors
							depending on how they’re built. While all these web application types
							still use web technologies they generally fall under the categories of
							client-side, server-side, or single-page applications.{' '}
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Client-Side Web Apps</p>
						<p className="leading-8 text-lg mt-4">
							Client-side web apps are dominant in front-end development, meaning the
							user interface (UI) is the focus of these types of apps. They tend to
							prioritize UX and bring users high-performance levels.{' '}
						</p>

						<p className="leading-8 text-lg mt-4">
							Any data or business logic that the app might use to function is
							dynamically loaded at start-up.
						</p>
						<p className="leading-8 text-lg mt-4">
							As a result of client-side rendering, there is little to no buffering
							time for loading a page. This speeds up interactions with content,
							making the page markedly responsive.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Server-Side Web Apps</p>
						<p className="leading-8 text-lg mt-4">
							Server-side software is essentially synonymous with back-end
							development. Back-end development is composed of building the databases,
							servers, application programming interfaces (APIs), and any other
							background processes that occur in an application.
						</p>
						<p className="leading-8 text-lg mt-4">
							Though server-side applications by and large still display content
							and/or UIs, the most dynamic of code resides in the web server.
						</p>
						<p className="leading-8 text-lg mt-4">
							Server-side rendering (SSR) works well with static content as it can
							take some time for the web browser to send a request to the server and
							await an answer.
						</p>
						<p className="leading-8 text-lg mt-4">
							On the bright side, server-side web apps are normally more secure and
							offer more browser compatibility than client-side web apps.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70"> Single-Page Apps</p>
						<p className="leading-8 text-lg mt-4">
							A single-page application (SPA) differs from a traditional multi-page
							application where new pages load only when you click a link. Instead,
							SPAs have desirable advantages of both client-side apps and server-side
							apps.
						</p>
						<p className="leading-8 text-lg mt-4">
							SPAs wield their power from only one page, typically deploying an
							infinite scroll mechanism to display all its content.
						</p>
						<p className="leading-8 text-lg mt-4">
							Despite the fact that server-side rendering holds associations with long
							wait times, JavaScript frameworks like React, Vue.js, and Angular use
							dynamic routing to fetch only the data that is necessary at any given
							time.
						</p>
						<p className="leading-8 text-lg mt-4">
							Many web developers or web app developers exercise this faculty of SSR
							to build SPAs that do not require the entire page to reload in order to
							execute an action or fetch new data.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							Web Apps Frameworks & Other Technologies
						</p>
						<p className="leading-8 text-lg mt-4">
							For full-stack web app development, your business will need the right
							front-end and back-end tools to see the process through. The frameworks
							and technologies below will be amply useful for building your web app.
						</p>

						<p className="text-3xl font-bold mt-12 opacity-70">Front-End </p>

						<p className="leading-8 text-lg mt-4">
							On the front-end, the tools you should use for web app development and
							web development have remained roughly the same for a quarter of a
							century. But at the very least, you can bet they’re reliable!
						</p>
						<p className="leading-8 text-lg mt-4">
							JavaScript is the principal client-side programming language for any
							type of web development. And nearly 100% of web developers use
							JavaScript for coding client-side behaviour into their website or web
							application.
						</p>
						<p className="leading-8 text-lg mt-4">
							This is because JavaScript allows developers to build dynamic websites.
							Basic functionality like scrolling bars and clickable buttons are all
							the spawn of JavaScript programming.
						</p>
						<p className="leading-8 text-lg mt-4">
							Since JavaScript’s 20th century origins, the language has expanded
							greatly, demonstrating its variability through its many use cases and
							frameworks.
						</p>
						<p className="leading-8 text-lg mt-4">
							HTML is another core technology of web development. HyperText Markup
							Language (HTML) is responsible for structuring the content of a web
							page.
						</p>
						<p className="leading-8 text-lg mt-4">
							A series of HTML elements describe to a web page how to display text,
							images, and in the latest version of HTML — HTML 5 — audio and video as
							well. HTML elements are most recognizable by the “&lt;” and “&gt;”
							characters.&nbsp;
						</p>
						<p className="leading-8 text-lg mt-4">
							Here’s a secret: if you’re on a desktop or laptop, right-click on any
							web page, press “View page source” and you will find a bunch of HTML
							embedded right into your browser.
						</p>
						<p className="leading-8 text-lg mt-4">
							Cascading Style Scripts (CSS) is a language for denoting the
							presentation of a web page. Just like JavaScript and HTML, it is a
							foundation technology making the World Wide Web what it is today.
						</p>

						<p className="leading-8 text-lg mt-4">
							Colors, layouts, and fonts are some of the integral characteristics of a
							web page or web app. CSS invokes these characteristics.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Back-End</p>
						<p className="leading-8 text-lg mt-4">
							Back-end development features a wider range of technologies as back-end
							development comprises several components such as server-side
							programming, databases, web servers, and APIs.
						</p>
						<p className="leading-8 text-lg mt-4">
							Server-side or back-end programming languages must handle the
							functionality of a web app that takes place behind the scenes.
						</p>
						<p className="leading-8 text-lg mt-4">
							Back-end web development can involve working with databases to send and
							receive data from one end to the other, managing user connections and
							security authentications, and ultimately empowering the web application
							to perform as it should.
						</p>
						<p className="leading-8 text-lg mt-4">
							Java, Python, Ruby, and PHP are some of the most popular back-end
							languages. Many tech companies use more than just one of these languages
							but still, many side-by-side comparisons exist to examine their utility.
						</p>
						<p className="leading-8 text-lg mt-4">
							There are also back-end web frameworks to simplify software development.
							Django and Ruby on Rails have become increasingly well-known in the web
							development community.
						</p>
						<p className="leading-8 text-lg mt-4">
							Databases store the data of an application. Back-end developers should
							be familiar with query languages that are able to request and retrieve
							data using queries.
						</p>
						<p className="leading-8 text-lg mt-4">
							Structured Query Language (SQL) is the go-to query language for the
							common web developer. SQL has many extensions or related versions
							extending additional functionality like MySQL, PostgreSQL, and Oracle.
						</p>
						<p className="leading-8 text-lg mt-4">
							Servers respond to network requests. Through the internet connection of
							a web application, a server retrieves information based on client
							requests and then serves the client — that is, you, your computer, or
							mobile device — whatever it is that you asked for.
						</p>
						<p className="leading-8 text-lg mt-4">
							While there isn’t a specific language for servers, all of the
							technologies that make up back-end development should absolutely have a
							good relationship with the servers they work with.
						</p>
						<p className="leading-8 text-lg mt-4">
							Web servers of note include Apache, Nginx, and Internet Information
							Services (IIS).
						</p>
						<p className="leading-8 text-lg mt-4">
							APIs facilitate connections between two or more software systems. An API
							integration is what fuels your Google Home’s communication with your
							Spotify playlist, for instance, or eBay’s collaboration with PayPal.
						</p>
						<p className="leading-8 text-lg mt-4">
							Again, APIs do not have a domain-specific language. Instead, developers
							create APIs using other back-end technologies and share them publicly
							with other developers or keep them closed to the organization they work
							for.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							7 Steps To Developing Web Applications
						</p>
						<p className="leading-8 text-lg mt-4">
							To be frank, web application development is not altogether different
							from any other software development life cycle. A great team and
							well-defined procedures are nearly always what drive successful
							development.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							1. Define Your Problem
						</p>
						<p className="leading-8 text-lg mt-4">
							Defining the problem you wish to solve or identifying exactly why you
							want consumers to use your web app is the first step in developing your
							web application.
						</p>
						<p className="leading-8 text-lg mt-4">
							People come up with new ideas all the time but is an idea really worth
							implementing if it doesn’t provide clever solutions to an existing
							issue?
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">2. Plan the Workflow </p>
						<p className="leading-8 text-lg mt-4">
							A workflow can establish a means of systematic organization for the
							various aspects of your web application development. Think about what
							your web app will consist of and how to meet those requirements using
							your resources and budget.
						</p>
						<p className="leading-8 text-lg mt-4">
							Because this is software development, your workflow should be both
							business-oriented and technical.
						</p>
						<p className="leading-8 text-lg mt-4">
							Adjust accordingly for the time frame in which you want your web app
							development to be completed. Create algorithms that will meticulously
							move your development forward.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							3. Prototype Your Web App
						</p>
						<p className="leading-8 text-lg mt-4">
							Prototyping involves building an incomplete yet functional application
							to better understand what your final product might look like. In
							software development, a prototype is akin to a minimum viable product
							(MVP).
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							4. Validate Your Prototype
						</p>
						<p className="leading-8 text-lg mt-4">
							The idea is that your prototype should be impressive enough to give you
							the validation you need to continue your project knowing that people are
							already interested in what you have in store.
						</p>
						<p className="leading-8 text-lg mt-4">
							To do this, validate your prototype by presenting your web app to
							potential users. Gather feedback and work from there.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">5. Build Your App</p>
						<p className="leading-8 text-lg mt-4">
							Research the software you should have ready at the helm to build your
							app. Consider which front-end and back-end frameworks and technologies
							can competently fulfill the requirements of your project.
						</p>
						<p className="leading-8 text-lg mt-4">
							Once you have found all your tools, it’s time to start developing. Build
							your web app!
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">6. Test Your App</p>
						<p className="leading-8 text-lg mt-4">
							Hopefully, testing your web application goes without saying. Many
							software development teams administer tests throughout the development
							life cycle, ensuring that each iteration of your web app is bug-free.
						</p>
						<p className="leading-8 text-lg mt-4">
							Software quality assurance is likewise an important part of building a
							web application. And this should happen before you release your app to
							the public.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							7. Host & Launch Your Web Apps
						</p>
						<p className="leading-8 text-lg mt-4">
							In the same fashion as a website, a web app must be hosted on a web
							server. That means putting your web app into action requires purchasing
							a domain name and a hosting provider on the cloud.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">4 Examples of Web Applications</p>
						<p className="leading-8 text-lg mt-4">
							Web applications are all around you. Learning how you use web apps from
							day to day can inspire the motivating concept behind your own web app.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Google Docs</p>
						<p className="leading-8 text-lg mt-4">
							Google Docs is the most infamous of this list. Via Google Docs, users
							can interact directly with the web app by editing and making suggestions
							on documents
						</p>
						<p className="leading-8 text-lg mt-4">
							One of the noteworthy features of Google Docs is that it automatically
							saves any edits you make right after you make them. It’s almost
							impossible to lose your work.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70"> Notion</p>
						<p className="leading-8 text-lg mt-4">
							Notion is gaining popularity quickly. It’s a web application that
							satisfies many needs and purposes. You can use Notion as a calendar,
							to-do list, notepad, wiki, and more.
						</p>
						<p className="leading-8 text-lg mt-4">
							The app operates using components that you can insert and make changes
							to from the convenience of your web browser.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Mailchimp</p>
						<p className="leading-8 text-lg mt-4">
							Mailchimp is a marketing platform allowing marketers to send automated
							and targeted mass emails to their leads. Its UI is easily navigable for
							anyone who wants to set up an email marketing campaign.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Salesforce</p>
						<p className="leading-8 text-lg mt-4">
							Salesforce is a customer relationship management (CRM) service utilizing
							a software-as-a-service (SaaS) model.
						</p>
						<p className="leading-8 text-lg mt-4">
							Businesses can tender proficient customer service from the Salesforce
							web app and also integrate Salesforce into other technologies like
							HubSpot CMS, for one.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>
						<p className="leading-8 text-lg mt-4">
							<span className="font-bold">
								Web app development is an idiosyncratic subset of web development
								that doesn’t quite align with what you’d expect from a website nor a
								mobile app.
							</span>
						</p>
						<p className="leading-8 text-lg mt-4">
							There are several types of web apps. Aside from the game-changing
							progressive web apps, there are client-side web apps, server-side web
							apps, and even single-page applications.
						</p>
						<p className="leading-8 text-lg mt-4">
							Web apps are built using a combination of front-end and back-end
							technologies, and this alongside the software development process itself
							does not veer far from standard web development.
						</p>
						<p className="leading-8 text-lg mt-4">
							In fact, it’s probably the case that you’re already very much in the
							know about several prominent web apps that are in frequent use across
							the web.
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