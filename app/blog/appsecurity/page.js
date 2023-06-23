import { MotionView } from '@/utils/utils';
import ContactUs from '@/components/contactus';
import websecurity from '@/public/blogs_images/images/websecurity.jpg';
import Banner from '@/components/banner';
import Image from 'next/image';

const Blog = () => {
	return (
		<div>
			<Banner ttl="" txt="What Is Application Security?" bg="bg-BlogAppSecBG" />

			<div className="container mx-auto py-16">
				<div className="xl:px-52 pb-4 mt-8 p-4">
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<div className="grid grid-cols-2 gap-8 ">
							<div className="col-span-2 lg:col-span-1 flex justify-center items-center">
								<Image src={websecurity} alt="" className="" />
							</div>
							<div className="col-span-2 lg:col-span-1">
								<p className="text-3xl md:text-5xl font-bold pb-4">
									What is Application Security?
								</p>
								<p className="leading-8 text-lg">
									<span className="font-bold">Application security</span> consists
									of a set of measures, tools and processes that help ensure the
									protection of applications against possible threats. These can
									compromise sensitive company data by cybercriminals. Application
									security offers companies the possibility of protecting their
									applications whatever their nature: installed on mobile devices,
									on Internet browsers or desktops and which are used by employees
									and external partners.
								</p>
							</div>
						</div>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold  mt-12">
							How is application security defined?
						</p>
						<p className="leading-8 text-lg mt-6">
							Application security means a series of security measures and practices
							that protect a company's applications against theft or misappropriation
							of the information and code contained therein. Application security also
							includes security that installs at the time of application development.
							More specifically, application security encompasses the software,
							mechanisms and equipment that make it possible to identify and reduce
							the vulnerabilities that the security in place may suffer from.
						</p>
						<p className="leading-8 text-lg">
							You should also know that the various application security practices are
							generally integrated into the software like a firewall. The latter is
							programmed in such way as to identify the authorized operations from
							those which are not. In addition, security measures can incorporate
							routine security activities allowing the introduction of protocols such
							as the development of tests on a regular basis.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What are the challenges of application security?
						</p>

						<p className="leading-8 text-lg mt-6">
							Today, all companies face major challenges that are struggling issues of
							application security. However, the element of application security is at
							times neglected in the sense that companies apply themselves to securing
							their network, their servers or even their entire infrastructure but
							somehow neglect application security. Indeed, companies carry out little
							or no code auditing and security of their applications. Very often this
							maneuver is explained by reasons related to the operation of automated
							audits which are limited to the detection of faults at the software
							level and which are already notorious. Also, it is a question of
							intrusion audits which include both the infrastructure and the network
							in addition to the difficulty and the length of the audit of
							characteristic developments which cannot be done automatically.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What are the types of application security?
						</p>
						<p className="leading-8 text-lg mt-6">
							Application security comes in different types which are: security
							testing, authentication, logging, encryption as well as authorization.
							In addition, it is possible to code the applications in order to best
							limit the vulnerability of their security. Indeed, an application or
							software developermay include authentication and authorization measures
							at an application level to ensure access to only users. This system
							makes it possible to identify and authenticate the user through a
							request to enter a user name and a related password when he connects to
							the application. Following this, the system performs a verification as
							to the ability of the user to access the application while establishing
							an identification thereof from a list comprising all the authorized
							users.
						</p>
						<p className="leading-8 text-lg">
							Before access authorization is granted by the system, the user must
							therefore be authenticated. This operation allows the application to
							perform a comparison of the user authentication information that has
							been validated with the information in the list containing the
							authorized users. Of course, application security practices are not
							limited to these operations, it continues once authentication and
							authorization have been performed and extends to security against
							possible hacking . The latter is manifested through the display of
							confidential data or even the use of them.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							How to audit your application security?
						</p>
						<p className="leading-8 text-lg mt-6">
							It is a question of carrying out an audit of the code of the application
							concerned in order to identify possible faults at the level of this one.
							The sources from which these faults can come are numerous. These may be
							operating bugs, insecure source code, access control, SQL injections or
							poorly integrated protocols. Thus, establishing an analysis and an audit
							of the various flaws relating to the development of an application is
							not as easy and must take into account two major elements, namely: the
							detection of flaws and their corrective measures as well as the training
							of developers and their knowledge of application security issues.
						</p>
					</MotionView>
					<MotionView dr={0.5} dl={0} yIn="2rem">
						<p className="text-3xl md:text-5xl font-bold mt-12">
							What are the application security threats?
						</p>
						<p className="leading-8 text-lg mt-6">
							There are basically two significant threats that a company's application
							security can face. First, it is about the vulnerability that can come
							from the source code of an application or from the libraries that it can
							contain. Moreover, many vulnerabilities that affect mobile applications
							by exposing them to threats and attacks that can mainly lead to theft of
							sensitive data. Then there is the threat of unexpected behavior. Indeed,
							an application contains libraries that can cause it to perform
							superfluous operations. Also, these actions can be made due to
							development negligence that may occur between the testing stages and the
							actual implementation. In either case, all of these unexpected behaviors
							can lead to a situation of exfiltration of sensitive user data.
						</p>

						<p className="leading-8 text-lg mt-6">
							Performing the application security assessment is not an easy task.
							Nowadays, frameworks and various technologies are constantly developing
							in addition to increasing the pressure of putting applications into
							production. As a result, and in this current context, ensuring the
							non-existence of a defect or a security breach now takes on a difficult
							aspect, in this case during the production launch stage. This is why a
							battery of tools, some of which are free to use, as well as practices
							have been designed and implemented in order to identify any security
							flaws and weaknesses that may be observed during the development an
							application security audit.
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