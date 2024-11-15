"use client"
import React, { useEffect, useState } from 'react'
import styles from './SliderBg.module.css'

//For React Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const SliderBg = () => {

	const Images = [
		'./assets/About.jpg',
		'./assets/mainBg1.jpg',
		'./assets/mainBg2.jpg'
	]

	const[curentImageIndex, setCurrentImageIndex] = useState(0);

	//Function to go to next Image
	const nextImg = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length)
	}

	//Function To Go To The Previous Image
	const prevImg = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
	}
	//Auto Change the Image in 10sec.
	useEffect(() => {
		const intervalId = setInterval(() => {
			nextImg()
		}, 10000) // 10 seconden.

		return () => clearInterval(intervalId)
		
	}, [])


	return (
		<div className={styles.Slider}>
			<div>
				<div>
					<img src={Images[curentImageIndex]} alt="Background Image"/>
				</div>
				<div className={styles.Overlay}></div>
			</div>
			<div className={styles.Content}>
				<h6>EcomOttens</h6>
				<h5>Where Excitement Meets Adventure</h5>
			</div>

			{/* Slider controls */}	
			<div className={styles.Controls}>
				<button onClick={prevImg} className={styles.PrevButton}><GrFormPreviousLink /></button>
				<button onClick={nextImg} className={styles.NextButton}><GrFormNextLink /></button>
			</div>		
		</div>
	)
}

export default SliderBg
