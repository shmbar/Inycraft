import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import reactNative from '@/public/blogs_images/images/reactNative.jpg';
import reactComparison from '@/public/blogs_images/images/reactComparison.png';
import Banner from '@/components/banner';
import Image from 'next/image';

const arr1 = [
	{
		bld: '',
		txt: 'Easy set-up process',
	},
	{
		bld: '',
		txt: 'Single codebase',
	},
	{
		bld: '',
		txt: 'Code sharing ability',
	},
	{
		bld: '',
		txt:
			'No need to write code for binding layers as the framework works on native API reflection',
	},
	{
		bld: '',
		txt: 'Angular integration and Vue.js integration',
	},
];

const arr2 = [
	{
		bld: '',
		txt: 'A single codebase means no need to write separate code for the Android and iOS app',
	},
	{
		bld: '',
		txt: 'The fast refresh feature saves developers’ time during code updating',
	},
	{
		bld: '',
		txt:
			'Modular and intuitive architecture that saves time of both different developers and testers in comprehending the code or building suitable testing scenarios for it',
	},
	{
		bld: '',
		txt:
			'NPL library support that makes the set-up process easier, even for non-javascript developers',
	},
	{
		bld: '',
		txt: 'Easy integration into the iOS project as it supports CocoaPods',
	},
];

const arr3 = [
	{
		bld: '',
		txt: 'That support both third-party modules and native plugins',
	},
	{
		bld: '',
		txt: 'Have a simple UI but offers fast-loading features',
	},
	{
		bld: '',
		txt: 'Require easy maintenance',
	},
	{
		bld: '',
		txt: 'Send upgrades and updates in real-time',
	},
	{
		bld: '',
		txt: 'Have stable architecture for multiple devices',
	},
];

const arr4 = [
	{
		bld: '',
		txt: 'That work on cross-platforms',
	},
	{
		bld: '',
		txt: 'Work on augmented reality',
	},
	{
		bld: '',
		txt: 'Compatible with Vue and Angular framework',
	},
	{
		bld: '',
		txt:
			'Whose code can be shared with mobile or web apps platforms without affecting the performance',
	},
	{
		bld: '',
		txt: 'Does not require WebView and has simple, interactive, and accessible UIs',
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

const Blog = () => {
	return (
		<div>
			<Banner
				ttl=""
				txt="React Native Vs NativeScript: Which is the Best Framework?"
				bg="bg-BlogReactNativeBG"
			/>

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={reactNative} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="leading-8 text-lg">
									React Native and NativeScript are trending frameworks nowadays
									as both are Javascript-driven, compatible with multiple
									platforms, cost-effective, and allow faster MVP development than
									other frameworks. Thus, often businesses and developers get
									confused in deciding which one is the best. Some even choose
									mindlessly without comparing the features and benefits each
									framework offer.
								</p>
								<p className="leading-8 text-lg">
									This blind selection can impact the app’s performance, cost of
									development, and may limit the app's functionality ultimately
									hurting your users’ experience.
								</p>
								<p className="leading-8 text-lg">
									If you are also doing the same, you need to read this blog where
									we will do a comparative analysis - React Native vs
									NativeScript.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[4rem]">
							A Quick Overview Before We Do React Native vs NativeScript Comparison
						</p>
						<p className="leading-8 text-lg mt-4">
							Both are open-source frameworks with access to native APIs. They are
							used to build apps separately for android and iOS devices without doing
							the hectic task of writing different codes for each platform. Let’s have
							a quick overview of the two.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-8 opacity-70">NativeScript:</p>
						<p className="leading-8 text-lg mt-4">
							The framework was initially launched in 2014 by Progress and made public
							in 2015. It is an open-source free framework that uses JavaScript
							codebase to develop native Android and iOS apps.
						</p>
						<p className="leading-8 text-lg mt-4">
							It allows a direct access to device APIs through JavaScript. Developers
							can also use pre-built code and web frameworks such as Vue, Angular, and
							React. In short, the framework allows developers to use their web skills
							to build apps, isn’t it great?
						</p>
						<p className="leading-8 text-lg mt-4">
							Besides this, developers don’t have to use the wrappers for re-purposing
							third-party libraries when working with NativeScript. The framework also
							has some notable features such as:
						</p>

						<ul className="list-outside list-disc ml-8">{lst(arr1)}</ul>

						<p className="leading-8 text-lg mt-2">
							However, NativeScript does not offer web views.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">React Native:</p>
						<p className="leading-8 text-lg mt-4">
							It is also an open-source free framework released in early 2015 by
							Facebook. However, it came into existence in 2013 when Facebook
							developed it for one of its projects.
						</p>
						<p className="leading-8 text-lg mt-4">
							Gradually, the mobile app development framework gained popularity among
							developers for offering the following features:
						</p>
						<ul className="list-outside list-disc ml-8">{lst(arr2)}</ul>
						<p className="leading-8 text-lg mt-4">
							It works on learn once, use anywhere philosophy, and lets you build apps
							without using HTML or DOM to build UI. Rather, you can use native app
							components from the device for it. Developers can freely use all these
							features without worrying about losing the application quality.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[4rem]">
							So, What Sets Them Apart?
						</p>
						<p className="leading-8 text-lg mt-4">
							Despite offering almost similar features, they do not give the same
							result. Plus, it is not always possible that a certain framework will
							suit every project’s requirement. There are certain areas where one beat
							the other and becomes a more favourable option among developers. Knowing
							those areas is important to decide which one is best suited for your
							mobile app development project.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12 md:leading-[4rem]">
							React Native vs NativeScript: Key Comparison Areas
						</p>
						<Image src={reactComparison} alt="" className="md:w-3/5 mt-4" />
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Performance</p>
						<p className="leading-8 text-lg mt-4">
							Both the frameworks have almost similar performance, so developers don’t
							have to worry much about it. However, the type of application you are
							building can alter the performance. For example, if you are building a
							simple input output forms then you can get desired experience whether
							you are working with react native or NativeScript.
						</p>
						<p className="leading-8 text-lg mt-4">
							In case, your application is going to have complex features like
							animations then it is important to focus on app’s performance. Here,
							react native is a clear winner because the framework works on separate
							threads for each process.
						</p>
						<p className="leading-8 text-lg mt-4">
							On the other hand, NativeScript also promises good performance of an
							application. But not in the case when you are developing a complex
							application.
						</p>
						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> React Native beats
							NativeScript when developing complex applications.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">UI Rendering:</p>
						<p className="leading-8 text-lg mt-4">
							While developing a mobile application one must ensure that user does not
							experience app stuttering. It is caused by the slow rendering of UI
							forcing the application to skip few of the frames. As a result, the user
							must wait for the app to perform smoothly. It is the common reason
							behind shifting of users from a poor stuttering application to one that
							offers them a non-interruptive experience.
						</p>
						<p className="leading-8 text-lg mt-4">
							To ensure your app does not stutter, you must choose a framework that
							renders UI with a speed of 60 frames per second.
						</p>
						<p className="leading-8 text-lg mt-4">
							Here, virtual DOM can help speeding up the UI rendering process. Both
							frameworks use virtual DOM, however one is faster than the other due to
							its thread model architecture.
						</p>
						<p className="leading-8 text-lg mt-4">
							React Native uses separate threads for each process. For example, a UI
							thread is used for manipulating host views and the logic part of the
							application can be handled using a JS thread. Due to the use of a
							separate thread any change in the application state does not affect the
							real DOM, a copy of it gets changed instead which makes UI rendering
							smooth and fast.
						</p>
						<p className="leading-8 text-lg mt-4">
							On the other hand, Native Script works on a single-threaded model that
							affects UI rendering while JS code execution. As a result, rendering is
							slow making it a less preferable option.
						</p>

						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> Due to faster UI
							rendering, React Native framework ensures better app performance in
							comparison to NativeScript.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Ease of Learning</p>
						<p className="leading-8 text-lg mt-4">
							As both frameworks are in demand, more and more app developers and
							students are showing interest in learning them. But without knowing the
							prerequisites, it is quite difficult to get a good understanding of
							React-Native and NativeScript.
						</p>
						<p className="leading-8 text-lg mt-4">
							JavaScript knowledge is a must for both as they are built on it. Other
							than JS, developers should also be familiar with the basics of web
							development, HTML, CSS, and React. Those interested in learning
							NativeScript require prior knowledge of Vue.js, Angular, and TypeScript.
							In addition to this, they must know the software design patterns, core
							modules, UI layouts, and concept of UX.
						</p>

						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> It depends on
							individual’s capability and how soon they can master it. For a freshman,
							learning any of these two will be difficult and time-consuming in the
							beginning. But for those with good experience in the above-mentioned
							prerequisites, React Native and NativeScript are not a challenge to
							learn.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Ease of Testing</p>
						<p className="leading-8 text-lg mt-4">
							Application testing is a crucial step in mobile app development to
							remove any glitches and ensure that app is working perfectly as per
							pre-set requirements. However, when working with React Native or
							NativeScript frameworks the ease of testing is not the same.
						</p>
						<p className="leading-8 text-lg mt-4">
							React Native does not offer any official support for unit-level testing
							of applications. In other words, QAs should use third-party application
							testing tools to discover any bugs or glitches in the RN apps.
						</p>
						<p className="leading-8 text-lg mt-4">
							Moreover, there is no facility to automate the deployment steps.
							Developers must deploy the app using Xcode manually.
						</p>
						<p className="leading-8 text-lg mt-4">
							The same issue does not occur with the NativeScript framework as it has
							its own QA workflow to ease the testing process. The framework supports
							unit-level testing by integrating a tool called Karma and external tools
							like Appium for functional testing. This in-built testing feature eases
							the work of QA.
						</p>

						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> Testing NS apps is
							easier as compared to RN apps.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Community Support</p>
						<p className="leading-8 text-lg mt-4">
							Since React Native is developed by Facebook, the framework easily got a
							huge community support. According to a survey, there is more than 40
							percent of React developers as against 11 percent of NativeScript
							developers.
						</p>
						<p className="leading-8 text-lg mt-4">
							Moreover, the React contributors on community platforms like
							StackOverflow and GitHub are more in numbers. In case they encounter any
							issues or get stuck somewhere during the development, they can always
							get help from those contributors.
						</p>
						<p className="leading-8 text-lg mt-4">
							If we believe the statistics, more than 2200 contributors on GitHub are
							from React Native backgrounds. NativeScript, on the other end, has
							somewhere around 200+ contributors on GitHub. This vast community
							support to React Native shows how popular the framework is.
						</p>

						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> React Native is a
							popular choice among developers.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Third-Party Plugins and Marketplace
						</p>
						<p className="leading-8 text-lg mt-4">
							When developing a mobile application, one may need plugins to access
							native APIs of either android or iOS. NativeScript marketplace offers
							direct access to those APIs through pre-built and open-source plugins
							for native device functionalities.
						</p>
						<p className="leading-8 text-lg mt-4">
							It got 400 plugins to integrate with visual studio, Gradle, WebStorm,
							cocoapods, firebase, etc. All you have to do is download the npm package
							and install it on your system.
						</p>
						<p className="leading-8 text-lg mt-4">
							Whereas React Native also have plugins and libraries to integrate with
							these platforms. But there are chances you may or may not find all the
							libraries you require on its directory. In that case, search on npm
							registry and once you get it, the next step is installation. However,
							using these resources always have some risk as all the resources come
							from third-party sources.
						</p>

						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> Pick NativeScript if
							you don’t want to go through installation process and wants more secure
							resources.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">Code Sharing</p>
						<p className="leading-8 text-lg mt-4">
							One of the best benefits of both React Native and NativeScript framework
							is developers don’t have to know multiple programming languages to write
							different code for each platform. They can reuse the same code for
							building applications for multiple platforms.
						</p>
						<p className="leading-8 text-lg mt-4">
							However, there is a limit on the amount of code’s reusability which
							makes code sharing an important factor when comparing the two. The
							code-sharing percentage depends on the type of application, components,
							and customization level. If the developed application has simple
							features and is not much customized, then around 90 percent of the code
							can be shared. But if the application has more native components and
							sophisticated code then developers cannot share the code completely.
						</p>
						<p className="leading-8 text-lg mt-4">
							React native does not offer high code-sharing benefits as it styles each
							component individually to give a more native-like appeal to the
							application interface. Thus, the code-sharing percentage is low in this
							framework.
						</p>
						<p className="leading-8 text-lg mt-4">
							On the other hand, NativeScript allows developers to share more code
							compared to React-Native because of its write code once and run anywhere
							concept.
						</p>
						<p className="leading-8 text-lg mt-4">
							<span className="font-semibold">Conclusion:</span> If you don’t want to
							do the difficult task of writing code again and again, then choose
							NativeScript.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							React Native or NativeScript: What to Choose?
						</p>

						<p className="leading-8 text-lg mt-8">
							Choosing between the two is not easy as the above factors depend
							strongly on the project requirements. What you want to achieve at the
							end will help you decide which framework is best for you. To ease your
							work, we have a mentioned few cases that helps you decide when to choose
							React Native and NativeScript.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Choose React Native for Building Apps
						</p>

						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8 mt-8">{lst(arr3)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl font-bold mt-12 opacity-70">
							Choose NativeScript for Building Apps
						</p>

						<div className="leading-8 text-lg mt-8">
							<ul className="list-outside list-disc ml-8">{lst(arr4)}</ul>
						</div>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Conclusion</p>
						<p className="leading-8 text-lg mt-8">
							React Native and NativeScript frameworks make mobile app development
							faster and easier without suffocating developers to write multiple codes
							for each platform. They can develop any application to have native app
							features and works on both Android and iOS.
						</p>
					</MotionView>

					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-8">
							This article was originally published on{' '}
							<a href="https://www.softude.com/blog/" className="text-blue-600">
								Softude.com
							</a>
						</p>
					</MotionView>
				</div>
			</div>
			<ContactUs />
		</div>
	);
};

export default Blog;

//