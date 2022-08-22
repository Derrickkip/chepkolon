import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

const Card = (school) => {
    return (
		<a
			href='#'
			className="flex-row bg-[#fff] rounded-xl p-8 md:p-0 m-10 w-2/6"
		>
			<div className='w-full h-fit relative'>
				<Image className="object-contain w-full h-full" src={school.src} alt="" />
			</div>
			<div className="m-4 text-center space-y-4">
				<figcaption className="font-medium">
					<div className="text-green-500 dark:text-green-400">
						{school.name}
					</div>
					<div className="text-slate-700 dark:text-slate-500">
						{school.description}
					</div>
				</figcaption>
			</div>
		</a>
    )
}

export default Card;