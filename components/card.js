import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

const Card = (school) => {
    return (
		<a
			href={school.path}
			className="flex-row bg-[#fff] rounded-xl p-8 md:p-0 sm:p-0 m-10 w-2/6 relative c-card block bg-[#CBD18F] shadow-md hover:shadow-xl"
		>
			<div className='h-72 relative overflow-hidden'>
				<Image className="object-contain w-full h-full absolute" src={school.src} alt="" />
			</div>
			<div className="m-4 text-center space-y-4">
				<div className="text-[#3A6B35] mt-2 mb-2  font-bold">
					{school.name}
				</div>
				<div className="text-[#255135] text-sm">
					{school.description}
				</div>
			</div>
		</a>
    )
}

export default Card;