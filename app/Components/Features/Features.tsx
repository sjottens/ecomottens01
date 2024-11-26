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
						FeatureImg={I.FeatureImg}
						FeatureDesc={I.FeatureDesc}
						FeatureName={I.FeatureName}
						FeatureUrl={I.FeatureUrl}
					/>

				))
			}


		</div>
	)
}

export default Features
