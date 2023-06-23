import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus'
import webvsapp2 from '@/public/blogs_images/images/webvsapp2.jpg';
import webvsapp3 from '@/public/blogs_images/images/webvsapp3.jpg';
import webvsapp from '@/public/blogs_images/images/webvsapp.jpg';
import webvsapp1 from '@/public/blogs_images/images/webvsapp1.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const Html = () => {
	return (
		<div>
			<Banner
				ttl=""
				txt="Web App vs Website: Why Is It a False Dichotomy?"
				bg="bg-BlogWebAppBG"
			/>

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={webvsapp} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="leading-8 text-lg">
									Try googling that keyword{' '}
									<span className="font-semibold">“web app vs website”</span>; and
									you can see tons of articles jumping into breaking down the
									difference between website and web application. Yet if we attend
									more closely to how the authorities in the industry talk about
									it, we will come to know that this is actually a false
									dichotomy.
								</p>
								<br />
								<p className="leading-8 text-lg">
									Jeremy Keith, for example, has written about this since 2010. He
									lists “documents and applications” as one of the most common
									misleading impressions we have about websites. And it’s actually
									where the misconception about{' '}
									<span className="font-semibold">“website vs web app”</span>{' '}
									engendered.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							The Difference Between A Web App And A Website
						</p>
						<p className="leading-8 text-lg mt-8">
							Due to their similarities, it can be hard for a user to tell the
							difference between a website and a web application. But most of the
							time, they don’t really care regardless. The most important thing for
							the user is to get results that match what they are looking for.
						</p>

						<p className="leading-8 text-lg mt-8">
							If you’re a developer, on the other hand, you should care. You need to
							know very well how they are different. Let’s talk about the difference
							between a web app vs. a website.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-4xl font-bold mt-12 opacity-70">What Is A Website?</p>
						<div className="justify-center items-start mt-4">
							<Image src={webvsapp2} alt="" className="w-3/5" />
						</div>
						<p className="leading-8 text-lg mt-8">
							A website consists of many web pages, which are each their own digital
							file and are made with HTML. For others to see your website, it needs to
							be stored on a computer with the Internet. This is called hosting. “Web
							Servers” is the name for these kinds of computers.
						</p>
						<p className="leading-8 text-lg mt-8">
							The website’s web pages connect to each other with hyperlinks and
							hypertext, and they all have the same look and user interface. The
							website might also have some extra files and documents, like photos,
							videos, or other types of digital property.
						</p>
						<p className="leading-8 text-lg mt-8">
							Since the Internet is used in every field, there are websites for many
							different causes and goals. Because of this, we can also say that a
							website is a digital environment that can provide information and
							solutions. It can help people, places, and things connect with each
							other to help organizations reach their goals.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-4xl font-bold mt-12 opacity-70"> What Is A Web App?</p>
						<div className="justify-center items-start mt-4">
							<Image src={webvsapp3} alt="" className="w-3/5" />
						</div>
						<p className="leading-8 text-lg mt-8">
							A web application is an app that can be accessed through a web browser.
							When viewed on a mobile device through a web browser, web apps look and
							work like mobile apps, but they are not the same thing.
						</p>
						<p className="leading-8 text-lg mt-8">
							Web applications use server-side scripts to get and store information.
							These scripts are written in languages like PHP and ASP. The relevant
							information then appears on the user interface using JavaScript and
							HTML5 scripts that run on the client side. This information could be
							given in a lot of different ways. Online shopping carts, content
							management systems, and online form generators are examples of common
							web applications.
						</p>
						<p className="leading-8 text-lg mt-8">
							Because web apps can be used in many different ways, people can do many
							different things. This means customers can use them to ask questions
							about products or services, make wishlists, and place orders. Apps also
							make it possible for employees to talk to each other, share documents,
							edit files, and collaborate. In this day and age of remote working, this
							is very important.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 leading-[4rem]">
							Is It Misleading To Have This “Website vs Web Application” Distinction?
						</p>
						<p className="leading-8 text-lg mt-6">
							The typical understanding is websites are collections of static HTML
							files that we can do nothing other than reading, watch, and click the
							hyperlinks to navigate back and forth, whereas web applications enable
							us to interact with the elements on the page and perform certain tasks
							such as drafting an email, uploading a file or exporting a document.
						</p>
						<p className="leading-8 text-lg mt-6">
							However, this understanding is problematic because website development
							and web application development don’t work as Boolean or binary values:
							either this or that. In fact, web applications are also websites. And
							this whole thing is more like a sliding scale from document to
							application where we should not pin them to either end of that scale.
						</p>
						<p className="leading-8 text-lg mt-6">
							For example, we can say “Gmail is a web app” and “this blog post is a
							static document”, but what about Wikipedia? It’s a collection of
							documents, but we can also edit it. And Twitter as well, is it a
							document of a publishing tool?
						</p>
						<p className="leading-8 text-lg mt-6">
							If we consider interactivity the criterion to categorize websites into
							webs and web apps then even those web pages with the slightest
							smattering of JavaScript could also provide us with a certain number of
							dynamic elements. We are no longer counting on those static documents
							with hyperlinks from the hype of Web 2.0 in the Mid 2000s. So, isn’t
							every dynamic web page also a web app?
						</p>
						<p className="leading-8 text-lg mt-6">
							Then there’s this type of distinction that relies on the existence of
							SPA (Single Page Application). It says that a web application is
							different from a website in that every significant change to the web
							page does not require a round trip back to the server to refresh the
							entire page. However, most websites today are developed in HTML5 using
							AJAX architecture and thus allow us to do the tasks on a single page
							without reloading it.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 leading-[4rem]">
							Still, People Talk About “Web Apps”. Why?
						</p>
						<p className="leading-8 text-lg mt-6">
							Despite being no more than just a buzzword, “web app” is still the
							favorite term of many business people and marketers probably because it
							brings about a breath of fresh air to the overly heard “website”.
						</p>
						<p className="leading-8 text-lg mt-6">
							HNonetheless, to some experts, differentiating websites and web apps
							does more harm than good. They believe that the dander of this
							artificial split is that many people might ignore new JavaScript tools,
							methods, and approaches due to the catchphrase “web apps”.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-4xl font-bold mt-12 opacity-70">
							{' '}
							1. Should we mess around with the website vs web application dichotomy?
						</p>

						<p className="leading-8 text-lg mt-8">
							Regarding the confusion of new jargon, designer Frances Berriman, who
							coined the term “progressive web apps (PWAs)”, together with her
							husband, Alex Russell, wrote this on her blog:
						</p>
						<p className="leading-8 text-lg mt-8">
							“I keep seeing folks (developers) getting all smart-ass saying they
							should have been PW “Sites” not “Apps” but I just want to put on the
							record that it doesn’t matter. The name isn’t for you and worrying about
							it is distraction from just building things that work better for
							everyone. The name is for your boss, for your investor, for your
							marketeer. (…) It’s marketing, just like HTML5 had very little to do
							with actual HTML.”
						</p>
						<p className="leading-8 text-xl mt-8 font-semibold">Frances Berriman</p>
						<p className="leading-8 text-lg mt-8">
							It’s so obvious that Frances is not the only one who thinks accuracy is
							secondary to marketing. The proof is whenever you try to search for the
							definition of “web apps” through Google, there are countless misleading
							results.
						</p>
						<p className="leading-8 text-lg mt-8">
							But what Frances said is partly right. To web developers, it’s of no use
							to elaborate on the difference between a website and a web application.
							It’s also not necessary to arbitrarily divide the entire web into
							different classes. The only thing of our concern is improving the webs
							and offering the users a satisfactory experience.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-4xl font-bold mt-12 opacity-70">
							2. And the future of web apps
						</p>
						<div className="justify-center items-start mt-4">
							<Image src={webvsapp1} alt="" className="w-3/5" />
						</div>
						<p className="leading-8 text-lg mt-8">
							All in all, if there is something we could draw from the birth of the
							“web application” concept, it’s the desire to bridge the gap between
							websites and desktop or mobile applications. People want to have web
							pages that can work similarly to apps. Those that are able to go
							offline, run in the background, escape the tabs, show up on the
							smartphone home screens, and even outweigh native apps in requiring less
							storage space.
						</p>
						<p className="leading-8 text-lg mt-8">
							All the efforts made in transforming the webs during the past decade are
							probably all about this. Progressive Web Apps, WebAssembly, and Houdini
							are just a few. So, maybe there comes a time when websites evolve to the
							point where they could totally match up to applications. And that is the
							future we should be ready to embrace.
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