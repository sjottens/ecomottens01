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

export default function Affiliate() {

	

	return (
		<>
			<div className={styles.bannerImage}>
				<img src='/assets/internetMarketing01.png' alt='Banner Image' />
			</div>
			<Wrapper>
				<div className={styles.container}>
					<div className={styles.Affiliate}>
						<div>
							<img src="/assets/cashpages-logo.png" alt='CashPages2.0 Logo' />
						</div>

						<div className={styles.Content}>
							<h6>Join The Community Today</h6>
							<h5>Affiliate Marketing</h5>
							<div>
								Join <strong className={styles.cashpagesColor}>CashPages2.0</strong> And Building Your Own Simple &quot;<strong className={styles.cashpagesColor}>CashPage</strong>&quot; On Social Media.<br/><br/>
								With Our Program Being Used In 50+ Different Countries, Endless Success Stories, And A Unique Approach To Online Business <strong>You&apos;re Guaranteed To Succeed With Us!</strong>
							</div>
							<div className={styles.Affiliate}>
								<div className={styles.BtnElement}>
									<a href='https://bit.ly/cashpages-ottens' target='blank' className={styles.Btn}>JOIN TODAY</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			
			<Footer />
		</>
	)
}