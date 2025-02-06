import React from 'react'
import styles from './Footer.module.css'

import Link from 'next/link'
const GetHelp = [
	{
		LinkText: "Contact Support",
		LinkTo: "",
	},{
		LinkText: "Troubleshooting",
		LinkTo: "",
	},{
		LinkText: "FAQs",
		LinkTo: "",
	},{
		LinkText: "Technical Assistance",
		LinkTo: "",
	},
];

const Info = [
	{
		LinkText: "About Us",
		LinkTo: "",
	},{
		LinkText: "Library",
		LinkTo: "",
	},{
		LinkText: "Careers",
		LinkTo: "",
	},{
		LinkText: "Community Events",
		LinkTo: "",
	},
];

const CustomerServices = [
	{
		LinkText: "My Account",
		LinkTo: "",
	},{
		LinkText: "Subscriptions",
		LinkTo: "",
	},{
		LinkText: "Redeem Codes",
		LinkTo: "",
	},{
		LinkText: "Updates",
		LinkTo: "",
	},
];

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.FooterRow}>
				<div>
					<img src='/assets/EcomOttens_logo.png' alt='Logo' />
				</div>

				<div>
					<h6>Get Help</h6>
					{
						GetHelp.map((I: any) => (
							<div key={I.LinkText} className={styles.LinkText}>
								<Link href={I.LinkTo}>→ {I.LinkText}</Link>
							</div>
						))
					}
				</div>
				<div>
					<h6>Info</h6>
					{
						Info.map((I: any) => (
							<div key={I.LinkText} className={styles.LinkText}>
								<Link href={I.LinkTo}>→ {I.LinkText}</Link>
							</div>
						))
					}
				</div>
				<div>
					<h6>Customer Services</h6>
					{
						CustomerServices.map((I: any) => (
							<div key={I.LinkText} className={styles.LinkText}>
								<Link href={I.LinkTo}>→ {I.LinkText}</Link>
							</div>
						))
					}
				</div>
			</div>
			<div className={styles.FooterRow1}>
				<p>EcomOttens © 2025. let&apos;s make live better</p>
			</div>
		</footer>
	)
}

export default Footer
