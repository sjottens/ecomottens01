import React from 'react'
import styles from './Feature.module.css'

//For components
import FeatureBox from './FeatureBox'

//Data
import { FeaturesData } from '@/Static/featureData'

const Features = () => {
	return (
		<div className={styles.Features}>
			{
				FeaturesData.map((I) => (
					<FeatureBox 
						key={I.id}
						Icon={I.FeatureIcon}
						FeatureDesc={I.FeatureDesc}
						FeatureName={I.FeatureName}
					/>

				))
			}


		</div>
	)
}

export default Features