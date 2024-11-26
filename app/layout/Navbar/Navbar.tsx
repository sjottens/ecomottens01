"use client"
import React, { useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'


//For React Icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdCloseFullscreen } from "react-icons/md";

//For Components
import Button from '@/app/Components/Button/Button'

interface NavLinkProps {
	LinkText: string,
	LinkTo: string,
}
const NavLink:NavLinkProps[] = [
	{
		LinkText: "Home",
		LinkTo: "/"
	},{
		LinkText: "Affiliate",
		LinkTo: "/pages/affiliate"
	},{
		LinkText: "Sport",
		LinkTo: "/pages/sport"
	},{
		LinkText: "Team",
		LinkTo: "3"
	},{
		LinkText: "Contact",
		LinkTo: "/pages/contact"
	},
]

const Navbar = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleSlider = () => {
		setIsOpen(!isOpen)
	}


	return (
		<nav className={styles.Navbar}>
			<div className={styles.NavLinks}>
				{
					NavLink.map((I) => (
						<div key={I.LinkText} className={styles.NavbarDiv}>
							<Link href={I.LinkTo}><span>{I.LinkText}</span></Link>
						</div>
					))
				}
			</div>

			<div>
				<Link href={"/"}>
					<img src='./assets/ecomLogo06.png' alt="Logo" />
				</Link>
			</div>

		
			<HiBars3BottomRight 
				className={styles.MenuIcon}
				onClick={toggleSlider}
			/>

			<div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>
				<div className={styles.SliderContent}>
					<MdCloseFullscreen 
						className={styles.CloseIcon}
						onClick={toggleSlider}
					/>

				<div>
					<Link href={"/"}>
						<img src='./assets/ecomLogo06.png' alt="Logo" />
					</Link>
				</div>

					{
						NavLink.map((I) => (
							<div key={I.LinkText} className={styles.PhoneNavLink}>
								<Link href={I.LinkTo}>{I.LinkText}</Link>
							</div>
						))
					}
				
				</div>
			</div>
		</nav>
	)
}

export default Navbar
