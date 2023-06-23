import { hdr } from '@/components/text';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { TfiFacebook, TfiTwitterAlt, TfiLinkedin, TfiGithub } from 'react-icons/tfi';
import { ImGithub } from 'react-icons/im';
import IYNlogoWhite	from '@/public/images/Logo/IYNlogoWhite.png'
import { cmpName } from '@/components/text.js';


import styles from '@/components/Layout/layout.module.css'

let year = new Date().getFullYear();

const Footer = () => {

	 const router = useRouter()

	return (
		<div className={`pt-12 ${styles.customBG}`}>
			<div className="border-b-gray-500 border-b">
				<div className="container mx-auto flex justify-center p-4 pb-10">
					<div className="grid grid-cols-3 gap-10 md:gap-6">
						<div className="col-span-3 md:col-span-1 justify-start md:justify-center flex">
							<div className="md:w-3/5 pt-1">
								<div
									className="flex justify-start cursor-pointer hover:opacity-75"
									onClick={() => router.push('/')}
								>
									<Image src={IYNlogoWhite} alt="IYNlogo" width="140" priority /> 
								</div>
			
								<p className="text-white pt-2">
									{cmpName} is a software company specializing in the development
									of web applications and data management systems.
								</p>
								<div className="flex gap-6 pt-4">
									<p className="text-white">Contact:</p>
									<p className="text-white cursor-pointer hover:opacity-75 ">
										info@inycraft.com
									</p>
								</div>
							</div>
						</div>
						<div className="col-span-3 md:col-span-1 justify-start md:justify-center flex">
							<div className="md:w-3/5">
								<p className="text-white text-4xl pb-4 font-semibold">Like what you see?</p>
								<p className="text-white text-2xl leading-normal">
									Let’s start a conversation.
								</p>
								<button
									className="border-2 border-white w-52 h-12 rounded-3xl mt-5 text-white font-semibold text-xl hover:bg-white hover:text-slate-900 transition-all"
									onClick={() => router.push('/contact')}
								>
									Get In Touch
								</button>
							</div>
						</div>

						<div className="justify-between md:justify-center flex md:grid col-span-3 items-center md:col-span-1">
							{hdr.map((x, i) => {
								//
								return (
									<Link
										className="text-white md:flex items-center whitespace-nowrap"
										key={i}
										href={x.link}
									//	as={'/' + x.txt}
									>
										{x.txt}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto flex p-4 justify-evenly">
				<div className="flex">
					<p className="text-white">{`Copyright© ${year} ${cmpName}. All Rights Reserved.`}</p> 
					<Link href='/terms-of-Use'>
						<p className="text-white pl-3 cursor-pointer">Terms of Use.</p>
					</Link>
					
				</div>
				<div className="flex gap-5 items-center">
					<TfiFacebook className="text-white cursor-pointer" />
					<TfiTwitterAlt className="text-white cursor-pointer" />
					<TfiLinkedin className="text-white cursor-pointer" />
					<ImGithub className="text-white cursor-pointer" />
				</div> 
			</div>
		</div>
	);
};
export default Footer;