import { cmpName } from '@/components/text.js';
import Link from 'next/link'

const TermOfUse = () => {
	return (
		<div className="py-24 p-12">
			<div className="text-center ">
				<p className="text-5xl font-semibold">Terms of Use</p>
				<p className="text-2xl mt-4">Last modified: October 10th, 2020</p>
			</div>
			<div className="mt-16">
				<p>
					Welcome to <span className="font-semibold">{cmpName}</span> , a provider of
					software development services (the "Services"). These terms of use ("Terms")
					govern your access to and use of our website, products, and services. By
					accessing or using our Services, you agree to be bound by these Terms. Please
					read them carefully before using our Services. If you do not agree to these
					Terms, please do not use our Services.
				</p>
			</div>

			<div className="mt-16">
				<p>1. Ownership and License</p>
				<p className="mt-8">
					Our Services, including our website, software, and all related materials, are
					owned by us or our licensors and are protected by intellectual property laws. We
					grant you a limited, non-exclusive, non-transferable, and revocable license to
					access and use our Services solely for your personal, non-commercial use.
				</p>
			</div>
			<div className="mt-16">
				<p>2. Software Development Servicese</p>
				<p className="mt-8">
					<span className="font-semibold">{cmpName}</span> provides software development
					services, which may include custom software development, mobile application
					development, web application development, software testing, quality assurance,
					software maintenance, and support. Our software development services are
					designed to help you achieve your business goals by providing you with
					high-quality, reliable, and scalable software solutions.
				</p>
				<p className="mt-8">
					When you engage us for software development services, we will work with you to
					understand your specific requirements and develop a customized solution that
					meets your needs. We will provide you with regular updates on the progress of
					your project, and we will work with you to ensure that the final product meets
					your expectations.
				</p>
			</div>

			<div className="mt-16">
				<p>3. Acceptable Use</p>
				<p className="mt-8">
					You agree not to use our Services for any unlawful or unauthorized purpose. You
					agree to comply with all applicable laws and regulations in your use of our
					Services. You further agree not to:
				</p>
				<p className="mt-8">
					<ul class="list-inside">
						<li>
							Copy, modify, distribute, or sell any part of our Services or related
							materials;
						</li>
						<li>
							Use our Services to transmit any unsolicited or unauthorized
							advertising, promotional materials, or spam;
						</li>
						<li>Use our Services to harass, bully, or intimidate any person;</li>
						<li>
							Use our Services to upload, post, or transmit any content that is
							unlawful, defamatory, or infringes on any intellectual property rights
							or other rights of any person;
						</li>
						<li>
							Use our Services to engage in any activity that interferes with or
							disrupts our Services or any servers or networks connected to our
							Services.
						</li>
					</ul>
				</p>
			</div>

			<div className="mt-16">
				<p>4. Disclaimer of Warrantiese</p>
				<p className="mt-8">
					We provide our Services "as is" and without any warranty or guarantee. We make
					no representations or warranties regarding the accuracy, reliability, or
					completeness of the content on our website or the functionality of our Services.
					We disclaim all warranties, including any implied warranties of merchantability,
					fitness for a particular purpose, or non-infringement.
				</p>
			</div>

			<div className="mt-16">
				<p>5. Limitation of Liability</p>
				<p className="mt-8">
					In no event will we be liable to you or any third party for any damages arising
					from your use of our Services. This includes direct, indirect, incidental,
					consequential, or punitive damages. We will not be liable for any errors or
					omissions in the content on our website or for any loss or damage of any kind
					arising from or related to your use of our Services.
				</p>
			</div>
			<div className="mt-16">
				<p>6. Confidentiality</p>
				<p className="mt-8">
					We understand that the confidentiality of your information is critical to your
					business. <span className="font-semibold">{cmpName}</span> will maintain strict
					confidentiality regarding all information we receive from you, including but not
					limited to, client data, business practices, and any proprietary information. We
					will not disclose any confidential or proprietary information of the client,
					except as necessary to perform the Services.
				</p>
			</div>
			<div className="mt-16">
				<p>7. Third-Party Services and Content</p>
				<p className="mt-8">
					Our Services may contain links to third-party websites or services that are not
					owned or controlled by us. We do not endorse or assume any responsibility for
					any such third-party services or content. If you access any third-party services
					or content, you do so at your own risk and are subject to the terms and
					conditions of use for those services or content.
				</p>
			</div>
			<div className="mt-16">
				<p>8. Changes to these Terms</p>
				<p className="mt-8">
					<span className="font-semibold">{cmpName}</span> reserves the right to modify
					these Terms at any time without notice. We will post any changes to these Terms
					on our website, and the modified Terms will become effective immediately upon
					posting. Your continued use of our Services after the posting of any changes to
					these Terms constitutes your acceptance of those changes.
				</p>
			</div>
			<div className="mt-16">
				<p>9. Payment and Fees</p>
				<p className="mt-8">
					The cost of our Services will be determined based on the scope of work and the
					agreed-upon terms between <span className="font-semibold">{cmpName}</span> and
					the client. Payment terms and fees will be outlined in a separate agreement
					between <span className="font-semibold">{cmpName}</span> and the client.
				</p>
			</div>
			<div className="mt-16">
				<p>10. Intellectual Property Rights</p>
				<p className="mt-8">
					All intellectual property rights related to any work produced by{' '}
					<span className="font-semibold">{cmpName}</span> for the client shall belong to
					the client, unless otherwise agreed upon in writing. <span className="font-semibold">{cmpName}</span> will not
					use, reproduce, or disclose any confidential or proprietary information of the
					client, except as necessary to perform the Services.
				</p>
			</div>

			<div className="mt-16">
				<p>11. Governing Law and Jurisdiction</p>
				<p className="mt-8">
					These Terms shall be governed by and construed in accordance with the laws of
					New-York, without regard to its conflict of law provisions. Any legal action
					arising out of or in connection with these Terms shall be brought in the state
					or federal courts located in United States.
				</p>
			</div>

			<div className="mt-16">
				<p>12. Indemnification</p>
				<p className="mt-8">
					The client agrees to indemnify and hold{' '}
					<span className="font-semibold">{cmpName}</span>, its officers, directors,
					employees, and agents harmless from any claims, damages, liabilities, costs, and
					expenses (including reasonable attorneys' fees) arising out of or in connection
					with the client's use of the Services, breach of these Terms, or violation of
					any law or the rights of any third party.
				</p>
			</div>

			<div className="mt-16">
				<p>13. Miscellaneous</p>
				<p className="mt-8">
					If any provision of these Terms shall be unlawful, void or unenforceable for any
					reason, the other provisions shall not be affected thereby and shall remain
					valid and enforceable to the maximum possible extent. You may not transfer or
					assign any of your rights and obligations under these Terms, and any attempt to
					do so will be null and void. These Terms shall constitute the entire agreement and understanding between <span className="font-semibold">{cmpName}</span>
					and the client concerning the subject matter hereof and supersedes all prior agreements
					and understanding of the parties with respect thereto; The failure of <span className="font-semibold">{cmpName}</span> {' '}
					to exercise or enforce any right or provision of these Terms will not constitute
					a waiver of such right or provision. Any waiver of any provision of these Terms
					will be effective only if in writing and signed by <span className="font-semibold">{cmpName}</span>; These Terms and all
					matters relating to your access to, or use of, this Website shall be governed by
					and construed according to the NY Law, without regard to the conflict of
					laws provisions thereof.
				</p>
			</div>

			<p className="mt-8">
				If you have any questions or concerns about these Terms, please contact us at our{' '}
				<Link href="/Contact/contact" as='/contact' className="cursor-pointer text-blue-800">
					contact form.
				</Link>
			</p>
			<p className="mt-4">
				Thank you for choosing <span className="font-semibold">{cmpName}</span> as your
				software development services provider!
			</p>
		</div>
	);
};
export default TermOfUse;