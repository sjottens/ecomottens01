import React from 'react'
import styles from './NewModel.module.css'

//For componnents
import Content from '../Content/Content'

const NewModel = () => {
	return (
		<>
		<Content 
			h6Text='Our new Model'
		/>

		<div className={styles.NewModel}>
			<img src='/assets/NewModel.jpg' alt='New Model' />
		</div>
		</>
	)
}

export default NewModel
