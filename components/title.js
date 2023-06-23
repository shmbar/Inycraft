'use client'
import { SetFontSize } from '@/utils/utils';

const TitlePart = ({ title }) => {
 

	return (
		<div className="flex container justify-center">
			
			<div className="flex items-center justify-center font-bold">
				<p
					className="font-semibold text-zinc-800 tracking-wide mb-6"
					style={{ fontSize: SetFontSize('2em', '3vw', '3.2em') }}
				>
					{title}
				</p>
			</div>
		
		</div>
	);
};

export default TitlePart;