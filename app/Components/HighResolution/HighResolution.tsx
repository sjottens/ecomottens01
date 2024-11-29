import React from 'react';
import styles from './HighResolution.module.css';

//For components
import HighResolutionBox from './HighResolutionBox';

//For import data
import { AffiliateData } from '@/Static/highResolutionData';

const HighResolution = () => {
	return (
		<>
			<div className={styles.HighResolutionGames}>
				{
					AffiliateData.map((I) => (
						<HighResolutionBox 
							key={I.id}
							AffName={I.AffName}
							AffDesc={I.AffDesc}
							ImgUrl={I.Img}
							ImgAlt={I.AffName}
							Url={I.Url}
							/>
					))
				}
			</div>
		</>
	)
}

export default HighResolution
