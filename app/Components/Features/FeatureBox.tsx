import React from 'react'
import styles from './Feature.module.css'


interface FeatureBoxProps {
	FeatureName: string,
	FeatureDesc: string,
	FeatureUrl: string,
	FeatureImg: string,
}

const FeatureBox = (
	{
		FeatureName,
		FeatureDesc,
		FeatureUrl,
		FeatureImg
	}:FeatureBoxProps
) => {
	return (
		<a href={FeatureUrl} target='blank' className={styles.Main}>
			<div>
				<div className={styles.Box}>
					<div className={styles.ImageBox}>
						<img src={FeatureImg} alt={FeatureName} />
					</div>
					<h6>{FeatureName}</h6>
					<p className={styles.Desc}>
						{FeatureDesc}
					</p>
				</div>
			</div>
		</a>
	)
}

export default FeatureBox