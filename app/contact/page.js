'use client'
import React, { useState } from 'react';
import contactPic1 from '@/public/contact_images/contactPic1.png';
import contactPic2 from '@/public/contact_images/contactPic2.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Banner from '@/components/banner';
import Image from 'next/image';

import styles from './contact.module.css';

const Contact = () => {
	const [value, setValue] = useState();

	return (
		<div>
			<Banner ttl="" txt="Contact Us" bg="bg-ContactBG" />

			<div className="grid grid-cols-7">
				<div className="col-span-7 md:col-span-2 bg-slate-100 px-4 md:px-12 py-16 md:py-24 text-center">
					<p className="text-5xl font-bold">Contact Us</p>
					<p className="text-lg md:text-xl mt-8">We love to talk software development!</p>
					<div className="mt-4 justify-center flex">
						<Image src={contactPic1} alt="" className="" />
					</div>
					<p className="text-lg md:text-xl mt-8">
						Complete the form, or drop us an email to arrange a call about your software
						development requirements.
					</p>
				</div>
				<div className="col-span-7 md:col-span-4 p-4 md:p-16">
					<p className="text-3xl md:text-5xl font-bold mt-8">
						We would be happy to hear from you
					</p>
					<p className="text-2xl font-bold mt-8 ">
						Fill out the form below to get in touch
					</p>
					<form
						action="https://getform.io/f/50cbdf15-a186-47da-9a52-06b48a1f4517"
						method="POST"
					>
						<div className="max-w-3xl mt-4">
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								required
								className={`${styles.textInpContact}`}
							/>
						</div>

						<div className="max-w-3xl mt-4">
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								required
								className={`${styles.textInpContact}`}
							/>
						</div>

						<div className="max-w-3xl mt-4">
							<PhoneInput
								international
								countryCallingCodeEditable={false}
								defaultCountry="US"
								value={value}
								onChange={setValue}
								className={`${styles.textInpContact} ${styles.PhoneInputCountry} bg-white`}
								name="phone"
								required
							/> 
						</div>
						<div className="max-w-3xl mt-4">
							<input
								type="email"
								placeholder="Email"
								name="email"
								required
								className={`${styles.textInpContact}`}
							/>
						</div>
						<div className="max-w-3xl mt-4">
							<textarea
								className={` ${styles.textInpContactMsg} p-2 `}
								name="message"
								required
								//	value=""
								//	onChange={() => null}
								placeholder="Write your message"
							/>
						</div>
						<div className="max-w-3xl mt-4">
							<input
								type="hidden"
								name="_gotcha"
								style={{ display: 'none !important' }}
							/>
							<button className="w-full h-16 bg-slate-600 rounded-md text-2xl text-white font-bold hover:opacity-80 shadow-lg shadow-gray-500/60">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="col-span-7 md:col-span-1 ">
					<Image
						src={contactPic2}
						alt=""
						className="pt-36 right-28 relative hidden xl:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
