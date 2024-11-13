import React from 'react'
import styles from './Feature.module.css'


interface FeatureBoxProps {
	Icon: string,
	FeatureName: string,
	FeatureDesc: string,
}

const FeatureBox = (
	{
		Icon,
		FeatureName,
		FeatureDesc
	}:FeatureBoxProps
) => {
	return (
		<div className={styles.Main}>
			<div className={styles.Box}>
				<p className={styles.Icon}>
					{Icon}
				</p>
				<h6>{FeatureName}</h6>
				<p className={styles.Desc}>
					{FeatureDesc}
				</p>
			</div>
		</div>
	)
}

export default FeatureBox