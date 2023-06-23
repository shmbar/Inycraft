import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import appsrvs from '@/public/blogs_images/images/appicationservice.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const arr1 = [
	{
		bld: 'Performance management:',
		txt:
			'Monitoring and analyzing application performance to detect problems and resolve them quickly.',
	},
	{
		bld: 'Availability management:',
		txt:
			'Checking the availability of the application to ensure that it is accessible to users at all times.',
	},
	{
		bld: 'Security management:',
		txt:
			'Implementation of security measures to protect the application`s data and systems against threats.',
	},
	{
		bld: 'Update and patch management:',
		txt: 'Updating the application to fix bugs and improve functionality.',
	},
	{
		bld: 'Incident management:',
		txt: 'Identification and resolution of incidents to minimize application downtime.',
	},
	{
		bld: 'Capacity management:',
		txt: 'Assessing and adjusting application capacity to meet ever-changing user needs.',
	},
];

const arr2 = [
	{
		bld: 'Redesign:',
		txt: 'Redesign the application using newer technologies and modern architectures.',
	},
	{
		bld: 'Salvage:',
		txt:
			'Salvage the source code of the existing application and rewrite it to use more advanced technologies.',
	},
	{
		bld: 'Re-platforming:',
		txt:
			'Keeping the existing source code and transposing it to a different platform (for example, moving from a Windows application to a Web application).',
	},
	{
		bld: 'Incremental modernization:',
		txt:
			'Making incremental changes to the existing application to make it more modern, using techniques such as refactoring, adding automated tests, continuous integration, etc.',
	},
	{
		bld: 'Migration:',
		txt:
			'Moving the existing application to a cloud computing environment to benefit from the advantages of cloud computing such as scalability, flexibility and cost reduction.',
	},
];

const arr3 = [
	{
		bld: 'Unit Testing:',
		txt:
			'Testing each component or module individually to make sure it works properly. Unit testing can be automated using tools like JUnit, NUnit, etc.',
	},
	{
		bld: 'Integration testing:',
		txt:
			'Verifying the different components or modules of the application work together. Integration testing can be automated using tools like Selenium, Appium, etc.',
	},
	{
		bld: 'Performance test:',
		txt:
			'Test application performance in terms of response time, processing capacity, memory, etc. Performance tests can be automated through Apache JMeter, Gatling, etc. solutions.',
	},
	{
		bld: 'Security Testing:',
		txt:
			'This involves tracking the security vulnerabilities of the application. Security testing can be done through several tools like Nessus, Nmap, etc.',
	},
	{
		bld: 'Acceptance testing:',
		txt:
			'Testing whether the application meets user needs and project requirements. Acceptance testing can be done manually or automated using tools including, Cucumber, FitNesse, etc.',
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
			<Banner ttl="" txt="What Are Application Services?" bg="bg-BlogWebSrvsBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-start">
								<Image src={appsrvs} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1 ">
								<p className="text-3xl font-bold pb-4">
									Definition of computer application services
								</p>
								<p className="leading-8 text-lg">
									<span className="font-bold">Application services</span> are a
									set of services and processes that help businesses manage their
									IT applications. These services may include design, development,
									testing, deployment, maintenance, data management, security,
									performance, incident management and support. They can also
									include the modernization of existing solutions, the integration
									of enterprise applications and the management of their security
									and be provided by an application services company or by an
									internal development team.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What are the different services for managing an application?
						</p>
						<p className="leading-8 text-lg mt-8">
							Application Management Services (AMS) help companies efficiently manage
							their IT applications.
						</p>
						<div className="leading-8 text-lg ">
							<span className="font-bold">AMS services may include:</span>
							<br />

							<ul className="list-outside list-disc ml-8">{lst(arr1)}</ul>
						</div>

						<p className="leading-8 text-lg mt-4">
							AMS services can be provided by an application services company or by an
							internal company team. Their goal is to optimize processes and
							application performance for users.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">Application Modernization</p>

						<p className="leading-8 text-lg mt-8">
							Application modernization involves adapting existing applications to
							make them more efficient, more reliable and more secure, using the
							latest technologies and best development practices. There are different
							strategies for modernizing applications, including:
						</p>
						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8">{lst(arr2)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-8">
							Tools and methodologies for testing applications
						</p>
						<p className="leading-8 text-lg mt-8">
							There are different tools and methodologies for testing applications,
							which can vary depending on the complexity of the application and the
							quality requirements. Here are some common examples:
						</p>

						<div className="leading-8 text-lg ">
							<ul className="list-outside list-disc ml-8">{lst(arr3)}</ul>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="leading-8 text-lg mt-8">
							It is important to note that each testing methodology has its own
							advantages and disadvantages and one should choose the most appropriate
							tools and methods for the specific application and user needs.
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