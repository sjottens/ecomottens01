import { Metadata } from 'next';
import styles from './affiliate.module.css';

//For components
import Footer from '@/app/layout/Footer/Footer';
import Wrapper from '@/app/Components/Wrapper/Wrapper';

export const metadata: Metadata = {
  title: 'Affiliate Marketing',
  description:
    'Affiliate Marketing Community for making a online cashflow',
};

const Images = [
	'/assets/internetMarketing01.png'
]

export default function Affiliate() {

	

	return (
		<>
			<div className={styles.bannerImage}>
				<img src={Images} alt={Images} />
			</div>
			<Wrapper>
				<div className={styles.container}>
					<div className={styles.Affiliate}>
						<div>
							<img src="/assets/cashpages-logo.png" alt='' />
						</div>

						<div className={styles.Content}>
						<h6>Join The Community</h6>
							<h5>Affiliate Marketing</h5>
							<div>
								Join CashPages And Build Your Faceless AI Instagram Page.  With Over 52+ Lessons, We are Going To Teach You How To Build, Monetize and Automate Your Own Branded Page.
							</div>
						</div>
					</div>
					<div className={styles.Affiliate}>
						<div className={styles.BtnElement}>
							<a href='https://bit.ly/cashpages-ottens' target='blank' className={styles.Btn}>JOIN NOW</a>
						</div>
					</div>
				</div>
			</Wrapper>
			
			<Footer />
		</>
	)
}