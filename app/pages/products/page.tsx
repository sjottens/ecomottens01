
import styles from './products.module.css';

//For components
import Wrapper from '@/app/Components/Wrapper/Wrapper';
import Footer from '@/app/layout/Footer/Footer';


export default function Products() {
	return (
		<>
			<Wrapper>
					<h1>Different Products</h1>
				<div className={styles.Aboutus}>
					<div>
						<img src="/assets/About.jpg" alt='' />
					</div>

					<div className={styles.Content}>
					<h6>Join The Community</h6>
						<h5>Products</h5>
						<p>
							Become a part of an ever-growing community of passionate gamers. Connect, compete, and collaborate with players from around the world. Together, we&apos;re shaping the future of gaming!
						</p>

						<div className={styles.CustomContent}>
							<div>
								<h6>50+</h6>
								<p>Games</p>
							</div>
							<div>
								<h6>5M+</h6>
								<p>Users</p>
							</div>
							<div>
								<h6>100M+</h6>
								<p>Downloads</p>
							</div>
							<div>
								<h6>9.5</h6>
								<p>Rating</p>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			
			<Footer />
		</>
		
	)
}