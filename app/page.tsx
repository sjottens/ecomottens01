
//for Components
import SliderBg from "./Components/SliderBg/SliderBg";
import Wrapper from "./Components/Wrapper/Wrapper";
import Features from "./Components/Features/Features";
import Aboutus from "./Components/Aboutus/Aboutus";

export const metadata = {
	title: "Home - EcomOttens"
}


export default function Home() {
  return (
		<>
			<SliderBg />
			<Wrapper>
				{/* For Features */}
				<Features />

				{/* For About us */}
				<Aboutus />
			</Wrapper>
		</>
  );
}
