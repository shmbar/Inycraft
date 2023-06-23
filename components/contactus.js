"use client"
import Btn from './btn'
import { useRouter } from 'next/navigation'

const ContactUs=()=>{
	 const router = useRouter()
	 
	return (
	<div className='ContactUs py-24 ' >
			<div className='container mx-auto text-center max-w-3xl justify-center flex flex-col flex-nowrap p-4'>				
				<p className='text-white text-5xl font-bold'>Let's Discuss Your Project</p>
				<p className='text-white text-lg md:text-xl pt-8 pb-10'>We'll be delighted to listen to your ideas and transform them into a cutting-edge digital solution. Take advantage of our free consultation to make this a reality!</p>
				<div className='self-center' onClick={()=> router.push('/contact')}> 
						<Btn />
				</div>
				
			
			</div>
			
		</div>
	
	
	)
}

export default ContactUs;

