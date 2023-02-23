import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

import styles from './Card.module.css'

const Card = (school) => {
    return (
		<a
			href={school.path}
			className={styles.SchoolBox}
			target={'_blank'}
			rel={'noreferrer'}
		>
			<div className={styles.SchoolBoxImg}>
				<Image src={school.src} alt="" />
			</div>
			<div className={styles.SchoolBoxDescription}>
				<div className={styles.SchoolBoxDescriptionText}>
					{school.name}
				</div>
				<div className={styles.SchoolBoxDescriptionTextSm}>
					{school.description}
				</div>
			</div>
		</a>
    )
}

export default Card;
