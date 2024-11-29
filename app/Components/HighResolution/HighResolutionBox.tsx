import React from 'react'
import styles from './HighResolution.module.css'

interface Props {
	ImgUrl: string,
	AffName: string,
	AffDesc: string;
	ImgAlt?: string,
	Url: string,
}

const HighResolutionBox = (
	{
		ImgUrl,
		AffName,
		AffDesc,
		ImgAlt,
		Url,	
	}:Props
) => {
	return (
		<div className={styles.HighResolution}>
				<div>
					<a href={Url} target="_blank">
					<div>
						<img src={ImgUrl} alt={ImgAlt} />
					</div>
					<div className={styles.Content}>
						<h6>
							{AffName}
						</h6>
						<div>
							<p>
								{AffDesc}
							</p>
						</div>
					</div>
					</a>
				</div>
		</div>
	)
}

export default HighResolutionBox
