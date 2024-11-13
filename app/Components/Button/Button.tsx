import React from 'react'

import styles from './Button.module.css'
import Link from 'next/link'

interface ButtonProps {
	LinkText: string,
	LinkTo: string,
}

const Button = (
	{
		LinkText,
		LinkTo
	}:ButtonProps
) => {
	return (
		<Link href={LinkTo} className={styles.Btn}>{LinkText}</Link>
	)
}

export default Button
