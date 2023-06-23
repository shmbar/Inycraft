const todayYr = new Date().getFullYear() - 2018

const expernce = [{ yrs: todayYr+'+', txt1:"years", txt2: 'Experience'}, { yrs: ' 40+', txt1:"completed", txt2: 'Projects'}, { yrs: ' 6+', txt1:"companies", txt2: 'Work'}];

const ExperienceCircles=()=>{
	return(
		<div className='container flex mx-auto justify-around md:justify-center gap-0 md:gap-24 lg:gap-48'>
			{
				expernce.map((x,i)=>
					<div key={i}>
						<div className='w-24 h-24 rounded-full border-8 flex justify-center items-center shad border-indigo-500/50 opacity-75 drop-shadow-2xl bg-slate-100'>
						 	<p className='text-3xl font-bold font-mono subpixel-antialiased '>{x.yrs}</p>
						 </div>
						 <p className='text-md mt-2 font-bold subpixel-antialiased text-center'>{x.txt1}</p>
						 <p className='text-lg font-extrabold text-center text-orange-500 leading-tight shadow-slate-300'>{x.txt2}</p>
					 </div>
					
				)
				
				
			}
		
		</div>
	)
	
}

export default ExperienceCircles;
