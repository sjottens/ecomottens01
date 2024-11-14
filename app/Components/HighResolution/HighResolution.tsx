import React from 'react';
import styles from './HighResolution.module.css';


//For components
import Content from '../Content/Content';
import HighResolutionBox from './HighResolutionBox';

//For import data
import { HighResolutionGamesData } from '@/Static/highResolutionData';

const HighResolution = () => {
	return (
		<>
			<Content 
				h6Text='High Resolution'
			/>
			<div className={styles.HighResolutionGames}>
				{
					HighResolutionGamesData.map((I) => (
						<HighResolutionBox 
							key={I.id}
							GameNAme={I.GameName}
							ImgUrl={I.GameImg}
							ImgAlt={I.GameName}
							GameRating={I.GameRating}
							GameResoltion={I.GameResolution}
							GameUrl={I.GameUrl}
							/>
					))
				}
			</div>
		</>
	)
}

export default HighResolution
