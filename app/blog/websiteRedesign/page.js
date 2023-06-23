import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import webdesign from '@/public/blogs_images/images/webdesign.jpg';
import responsive from '@/public/blogs_images/images/responsive.jpg';
import landingPage from '@/public/blogs_images/images/landingPage.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';


const arr1 = [
	{
		bld: '',
		txt: 'Analyze your old website design',
	},
	{
		bld: '',
		txt: 'Find ELTWO: Elements that work',
	},
	{
		bld: '',
		txt: 'Make proper use of your user data',
	},
	{
		bld: '',
		txt: 'Build your idea wireframes',
	},
	{
		bld: '',
		txt: 'List the elements that need a redesign',
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

const WebsiteRedesign = () => {
	return (
		<div>
			<Banner
				ttl=""
				txt="Website Redesign: Guide You Need All In One"
				bg="bg-BlogRedesignBG"
			/>

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={webdesign} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="leading-8 text-lg">
									So, you’ve just launched a brand new website for your business
									and expecting loads of online clients. All in all, you’re very
									excited!
								</p>
								<p className="leading-8 text-lg">
									However, even after enough time, there is no business from your
									website. There are no clients coming in, and the bounce rate is
									sky-high even after trying out all the web page tricks. And you
									kind of feel like a kid being handed socks as presents on
									Christmas morning…
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-12">
							Now, before you compile the best in class strategists to find out where
							you went wrong with the website strategy, hear us out— it’s probably the
							design that crushed all your dreams of getting high numbers of clients
							from the website.
						</p>
						<p className="leading-8 text-lg mt-8">
							It might seem fake, but it’s true. When browsing for any product, most
							site visitors are going to check out the design of your website before
							they check the content to determine if your product is credible enough.
							If you can’t impress them with the design then forget about impressing
							them with the content.{' '}
						</p>
						<p className="leading-8 text-lg mt-8">
							So, what should you do in this situation? Well, the most obvious
							solution is the website redesign. Partially or completely overhauling
							the website design to make it user-friendly can go a long way to ensure
							the success of the website. Now if you are thinking about how to
							redesign a website, then you’re at the right place, cause we are going
							to tell you about all the steps you need to follow to redesign your
							website for better.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[3.5rem]">
							The Steps To Be Taken: For The Redesigning Of Your Website
						</p>
						<p className="leading-8 text-lg mt-8">
							Before we dive into the details on how to redesign your website to
							answer all your web redesign questions, let’s have a quick look at all
							the steps you need to take to redesign your website:
						</p>
						<ul className="list-outside list-disc ml-8">{lst(arr1)}</ul>
						<p className="leading-8 text-lg mt-4">
							Now that we have the web redesign checklist, let’s go through them and
							see what they entail.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[3.5rem]">
							Step By Step Process Of Redesigning Your Personal Website
						</p>
						<p className="leading-8 text-lg mt-8">
							The process of redesigning your personal website is pretty simple. It’s
							all about recognizing the problem areas of the design of your website
							and then designing them again to match the requirements of your
							business.
						</p>
						<p className="leading-8 text-lg mt-8">
							However, before you hire website redesign services, you have to
							understand the steps, and below, we have discussed each of them in
							detail.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[3.5rem]">
							1. Before Changing The Old, Let’s Analyze It
						</p>
						<p className="leading-8 text-lg mt-8">
							Before you begin the website redesign process, stop and look at the
							already established design you have on your website. This will help you
							to design the website design strategy template to draw up the web
							redesign proposal.
						</p>
						<p className="leading-8 text-lg mt-8">
							It is important for you to analyze the old design because you have to
							circle out the flaws of the old design to change them. Redesigning the
							website without analyzing the old design will only create more problems.
							Before understanding the website redesign requirements, you have to
							understand why you need redesign in the first place.
						</p>
						<p className="leading-8 text-lg mt-8">
							If you are asking why to redesign a website, then you need to analyze
							the old design of the text. Pretty sure you will find many reasons to
							redesign your website Here are a few of those reasons-
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							A: The Design Is Ages Old
						</p>
						<p className="leading-8 text-lg mt-8">
							The first reason why you would need to redesign your website is the age
							of the design. We all know that fine wine is something that ages well,
							sadly it is not the same when it comes to website design. The design of
							a website needs to be updated with time, adapting to the latest design
							trends and techniques. Failing to do so will make your website look
							positively medieval, and that is not going to be appealing to the
							website visitors.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							B: Designing Better UX
						</p>
						<p className="leading-8 text-lg mt-8">
							The second reason why you might have to redesign your website is to give
							the users a better UX. if the UX of the website is not up to par, you
							might receive complaints, or maybe have the bounce rate speak on behalf
							of the users. In any case, designing a better UX can be one of the main
							reasons why you might find yourself having to go through the web revamp
							process.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							C: Integration Of Latest Tools
						</p>
						<p className="leading-8 text-lg mt-8">
							Technology is advancing by the minutes. And that’s why we have more
							tools available for website designing today than we had last year. And
							it goes without saying that to leverage the best of these tools, you
							have to redesign your website to match their technical requirements.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							2. Finding ELTWO: Elements That Work
						</p>
						<p className="leading-8 text-lg mt-8">
							Just because your website needs redesigning, does not mean everything
							needs to be changed. In fact, you will find that many aspects of your
							website work perfectly fine. And if they do work fine, then there’s no
							need for any web design changes.
						</p>
						<p className="leading-8 text-lg mt-8">
							These elements can include the logo, images, typography, or the colors
							used on the website, anything. When analyzing the old design of your
							website, if you happen to find any elements of the design that works
							perfectly fine, you should integrate them into your website seamlessly.{' '}
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">3. Make Use Of The User Data</p>
						<p className="leading-8 text-lg mt-8">
							Understanding the user from the very beginning of the website design
							process should’ve been a priority for you. But if you failed to apply
							it, then no worries, you can do it during the redesign.
						</p>
						<p className="leading-8 text-lg mt-8">
							You will collect plenty of data throughout the operation period to
							analyze and learn what exactly went wrong with the design of your
							website in the first place. This user data will answer all your
							questions about where the users got stuck while navigating the page,
							where they got exhausted and left the page altogether. It will help you
							recognize all the snags in the design and smooth it out.{' '}
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">4. Build Wireframes</p>
						<p className="leading-8 text-lg mt-8">
							How about before you redesign and launch it, you build an interactive
							MVP or wireframe, and have it tested?
						</p>
						<p className="leading-8 text-lg mt-8">
							It will help you to have built a wireframe first and have it tested
							before actually implementing the design. You can collect data on how
							hard or easy it was for the users to navigate through the entire design,
							the points they got stuck on and the navigational points they were
							confused about. Creating a wireframe before redesigning is going to only
							enhance the benefits of the redesign process.{' '}
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							5. List The Elements That Need Redesign
						</p>
						<p className="leading-8 text-lg mt-8">
							Now we come to the most important part- the design.{' '}
						</p>
						<p className="leading-8 text-lg mt-8">
							Of course, when talking about website redesign we can not skip over the
							part of the design. There are many elements of designing you have to
							take care of while redesigning. Below are a few of them.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">A: Make It Responsive</p>
						<div className="justify-center items-start">
							<Image src={responsive} alt="" className="md:w-3/5" />
						</div>
						<p className="leading-8 text-lg mt-8">
							The first design element you have to consider is the responsiveness of
							the website. You need to keep in mind that today most people will be
							using their phones to access your website. And in order to accommodate
							them, you have to make sure that your website is responsive.
						</p>
						<p className="leading-8 text-lg mt-8">
							Fortunately, it doesn’t take a lot of effort to turn your website into a
							responsive website and helps a lot to impress and convert clients. So if
							your website is not already mobile-friendly, then make sure that it is
							during the redesign phase.{' '}
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							B: Using Proper Images And Illustrations
						</p>
						<p className="leading-8 text-lg mt-8">
							We have briefly talked about the importance of visual design, but for
							this point, we have to talk about it in detail.
						</p>
						<p className="leading-8 text-lg mt-8">
							The visual impact of the website design is more important than you
							think. Apparently, 46.1% of visitors on a website decide on the
							credibility of the website after looking at the design. This is why to
							make the most of the visual impact, you have to use authentic images and
							illustrations that are relevant to your product.
						</p>
						<p className="leading-8 text-lg mt-8">
							It is an easier and perhaps even cheaper solution to use stock images
							and illustrations you might find online. But, they are not going to help
							with the credibility of the website. Even though these photographs are
							of high quality, they still seem fake, and you can not increase consumer
							trust in your brand with fake images.
						</p>
						<p className="leading-8 text-lg mt-8">
							The use of authentic images will help users to build up trust in you.
							So, conduct a photoshoot, or have your hired designers from website
							redesigning company design up some original and unique illustrations.
							Sure it might be a little costly and time consuming, but the positive
							effect of it will be worth it.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							C: Branding Through Colors And Logo
						</p>
						<p className="leading-8 text-lg mt-8">
							When analyzing your previous design, make sure to check if the entire
							aesthetic of the website, including texts and typography, colors and
							logo are matching your brand value. Is it how you want your business to
							be known? If not, then you have to opt for a complete redesign for your
							website to reflect the brand of your business.
						</p>
						<p className="leading-8 text-lg mt-8">
							Among the many aspects that’ll affect the brand image of your website
							are color and logo. In the long haul, users are going to remember you by
							the colors you used and the logo of your business. For maximum effect,
							you have to place the logo on the top left corner of the page. That is
							where the user is going to look first to find the logo.
						</p>
						<p className="leading-8 text-lg mt-8">
							Analyzing the famous brands in the market will help us better understand
							the importance of color in branding. Think of Facebook, what color do
							you see? Is it blue? That’s because from the beginning facebook has used
							the color blue to present themselves as a calm, secure and steadfast
							social media platform. The color of your website should reflect the
							nature of your business.
						</p>
						<p className="leading-8 text-lg mt-8">
							When rebranding becomes necessary during redesigning, ensure that the
							color you choose for your brand reflects the value of what your business
							does, along with invoking a positive emotion among them. This simple
							decision will go a long way to make your brand a world-famous one.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							D: Adding Landing Pages
						</p>
						<div className="justify-center items-start mt-4">
							<Image src={landingPage} alt="" className="w-3/5 drop-shadow-2xl" />
						</div>
						<p className="leading-8 text-lg mt-8">
							If the conversion is one of the main website redesign objectives for
							your website, then you have to make sure to create new landing pages.
							The landing pages are going to be focused on converting the site
							visitors through discounts, offers, or email subscriptions list. The
							conversion rate of your website is definitely going to rise with the
							right landing pages.
						</p>
						<p className="leading-8 text-lg mt-8">
							Once you have the proper landing pages in place, analyze the user
							response to them. When you run website optimization reports, you will
							get a whole lot of insight into how the user is reacting to the page you
							have designed. And based on that insight and web page design ideas and
							tips you can later change the design to match their requirements.
						</p>
						<p className="leading-8 text-lg mt-8">
							The above-mentioned points can be a little overwhelming, but that does
							not mean it’s impossible to achieve the perfect redesign. Don’t believe
							us? Well, let us tell you all about the web redesign best practices we
							follow. And once we are done, you have to believe us when we say,
							website redesign might seem daunting, but it is easy as well.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Best Practices That We Follow</p>
						<p className="leading-8 text-lg mt-8">
							To deliver the best product in the market, you have to follow some best
							practices in the market. And throughout the years we have gathered
							enough experience to create a list of best practices we follow like the
							sacred texts. What are these best practices you ask? Well, let’s see:
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							A: We Know The Secret Language Of Design
						</p>
						<p className="leading-8 text-lg mt-8">
							Designing a website is all about earning the trust of the user through
							the psychological influences of the design principles. And when it comes
							to following the web design principles popular in the areas we are
							dealing with, no one can do it better than us.
						</p>
						<p className="leading-8 text-lg mt-8">
							We make sure to follow all of the important design principles, whether
							we are talking about the rule of the third or the proper use of negative
							space. We focus on design principles that bring on maximum conversion
							for your business. At the end of the day, the design is not just a
							matter of aesthetics, it is a matter of fulfilling your website revamp
							objectives.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							B: We Can Help The Users To Find Their Way: On Your Website
						</p>
						<p className="leading-8 text-lg mt-8">
							When we talk about navigation, we don’t mean navigation of a ship, but
							the navigation of a website. We make sure that the navigational flow
							from pages to pages on the website is smooth and without any hitches so
							that users can go from point A to point B on the website without any
							problems. We strive to make the navigation of the website so easy that
							the user feels like an expert sailor, of the internet.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							C: No More Confusion For The Users When Making Choices
						</p>
						<p className="leading-8 text-lg mt-8">
							Presenting the users with so many options will only make them confused
							and dazed. And that’s why we follow the Hick-Hyman Law. According to the
							law, narrowing down the choices presented to the user to the very basic
							and necessary few will help them to take action. Being too confused with
							numerous choices will only annoy them and they will eventually leave.
							And that’s why we make it easier for the users to make their choices.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							D: How Fast The Website Needs To Be?
						</p>
						<p className="leading-8 text-lg mt-8">
							No one has the time for slow loading web pages. Any page that takes more
							than 2 seconds to display any kind of information will be abandoned by
							the user in a heartbeat. And that’s why our web redesign best practices
							include making the website a fast loading one so that the user doesn’t
							have to wait to begin their journey with you.{' '}
						</p>
						<p className="leading-8 text-lg mt-8">
							There are many ways of making the website faster, including compressing
							images, caching the static data and many more. And we follow all of them
							to make your website load faster than any other website on the internet.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							E: How Important Is It To Go Social On Your Website?
						</p>
						<p className="leading-8 text-lg mt-8">
							Getting social is very important today, especially if you want more
							sales and customers. And that’s why we made sure to integrate social
							media integration as a part of our web design best practice. Whether it
							is sharing your website blog through social media or being a part of
							your social media journey, we help the users to connect to you on a
							social level so that the connection only gets deeper with time.{' '}
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>
						<p className="leading-8 text-lg mt-8">
							If you feel as if your website is not working, then there’s no reason to
							get disheartened. Through a redesign, you can not only change the
							complete look of your website but also turn it into a lead generation
							machine. All you have to do is to keep in mind all the important aspects
							of web redesign and the steps we mentioned above. And if you have more
							questions about how to redesign a website, then shoot us a call or mail
							us, we are always here to help.
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default WebsiteRedesign;

//