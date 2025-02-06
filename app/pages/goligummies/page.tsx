import { Metadata } from 'next';
import styles from './goligummies.module.css';

//For components
import Footer from '@/app/layout/Footer/Footer';
import Wrapper from '@/app/Components/Wrapper/Wrapper';

export const metadata: Metadata = {
  title: 'Goli® Nutritions',
  description:
    'Powerful Ingredients for Real Results',
};

export default function Goli() {

	

	return (
		<>
			<div className={styles.bannerImage}>
				<img src='/assets/goli_header_banner.png' alt='Banner Image' />
			</div>
			<Wrapper>
				{/* Apple Cider Vinegar Gummies */}
				<div className={styles.container}>
					<div className={`${styles.Goli} ${styles.GoliAppleCider}`}>
						<div>
							<img src="/assets/Apple_Cider_Vinegar_Gummies.png" alt='Apple Cider Vinegar Gummies' />
						</div>

						<div className={styles.contentText}>
							<h5>Apple Cider Vinegar Gummies</h5>
							<div>
							Goli® ACV Gummies are made with a unique blend of ingredients that support many incredible benefits!<br/>
							Goli® ACV Gummies have been specifically formulated with Vitamin B12 to help support energy metabolism, healthy immune function, heart health, healthy nutrient metabolism, a healthy nervous system, general health and well-being and to provide antioxidant support.<br/><br/>
							</div>
							<div className={styles.BtnElement}>
								<a href='https://goli.com/pages/goli-acv?discount_code=g-1587850e6d' target='blank' className={styles.Btn}>SHOP NOW</a>
							</div>
							<div>
								<br/>
								Infused with a delicious flavor profile.<br/><br/>
								<strong>Source of quality vitamins &<br/>
								nutrients for many health benefits.</strong><br/><br/>
								Taste the Apple. Not the Vinegar.®
							</div>
						</div>
					</div>
				</div>

				{/* Ashwa Gummies */}
				<div className={styles.container}>
					<div className={`${styles.Goli} ${styles.GoliAshwaGummies}`}>
						<div>
							<img src="/assets/Ashwa_Gummies.png" alt='Ashwa Gummies' />
						</div>

						<div className={styles.contentText}>
							<h5>Ashwa Gummies</h5>
							<div>
							Goli® Ashwa Gummies are made with a blend of ingredients that support many incredible benefits!<br/><br/>

							They&apos;re made with KSM-66® Ashwagandha Root Extract to help reduce stress & promote relaxation; promote sleep quality; support sexual function in women who need a boost; support memory & concentration; and Vitamin D to support a healthy immune system and more!<br/><br/>
							</div>
							<div className={styles.BtnElement}>
								<a href='https://goli.com/pages/goli-ashwagandha?discount_code=g-1587850e6d' target='blank' className={styles.Btn}>SHOP NOW</a>
							</div>
							<div>
								<br/>
								A holistic approach to wellness<br/>
								backed by modern science.<br/><br/>
								<strong>Relax.</strong><br/>
								<strong>Restore.</strong><br/>
								<strong>Unwind.†</strong>
							</div>
						</div>
					</div>
				</div>
				
				{/* Matcha Gummies */}
				<div className={styles.container}>
					<div className={`${styles.Goli} ${styles.GoliMatchaMind}`}>
						<div>
							<img src="/assets/MatchaMind.png" alt='Ashwa Gummies' />
						</div>

						<div className={styles.contentText}>
							<h5>Matcha Gummies</h5>
							<div>
							New Goli® Gummies, don&apos;t MIND if I do! Goli® Matcha Mind Gummies are a perfect addition to your daily routine with Cognizin® to help support brain health, focus, and attention.<br/><br/>
							</div>
							<div className={styles.BtnElement}>
								<a href='https://goli.com/pages/matcha-mind?discount_code=g-1587850e6d' target='blank' className={styles.Btn}>SHOP NOW</a>
							</div>
							<div>
								<br/>
								Cognitive Gummies<br/>
								New Goli® Gummies, Don&apos;t <strong>MIND</strong> if I do!
							</div>
						</div>
					</div>
				</div>
				{/* Dreamy Sleep Gummies */}
				<div className={styles.container}>
					<div className={`${styles.Goli} ${styles.DreamySleep}`}>
						<div>
							<img src="/assets/DreamySleep.png" alt='Dreamy Sleep Gummies' />
						</div>

						<div className={styles.contentText}>
							<h5>Dreamy Sleep Gummies</h5>
							<div>
							New Goli® Gummies, don&apos;t MIND if I do! Goli® Matcha Mind Gummies are a perfect addition to your daily routine with Cognizin® to help support brain health, focus, and attention.<br/><br/>
							</div>
							<div className={styles.BtnElement}>
								<a href='https://goli.com/pages/goli-sleep?discount_code=g-1587850e6d' target='blank' className={styles.Btn}>SHOP NOW</a>
							</div>
							<div>
								<br/>
								<strong>Sleep Better & Longer.†<br/>
									Made with Melatonin, Lemon Balm,<br/>
									Magnesium and Vitamin D.
								</strong>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			
			<Footer />
		</>
	)
}