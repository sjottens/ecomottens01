import React from 'react'
import styles from './HighResolution.module.css'

interface Props {
	ImgUrl: string,
	ImgAlt?: string,
	GameNAme: string,
	GameRating: string,
	GameResoltion: string,
	GameUrl: string,
}

const HighResolutionBox = (
	{
		ImgUrl,
		ImgAlt,
		GameNAme,
		GameRating,
		GameResoltion,
		GameUrl,	
	}:Props
) => {
	return (
		<div className={styles.HighResolution}>
				<div>
					<a href={GameUrl} target="_blank">
					<div>
						<img src={ImgUrl} alt={ImgAlt} />
					</div>
					<div className={styles.Content}>
						<h6>{GameNAme}</h6>
						<div>
							<p>Rating: {GameRating}</p>
							<p>Resolution: {GameResoltion}</p>
						</div>
					</div>
					</a>
				</div>
		</div>
	)
}

export default HighResolutionBox
