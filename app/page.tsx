
//for Components
import SliderBg from "./Components/SliderBg/SliderBg";
import Wrapper from "./Components/Wrapper/Wrapper";
import Content from "./Components/Content/Content";
//import Features from "./Components/Features/Features";
import HighResolution from "./Components/HighResolution/HighResolution";
//import NewModel from "./Components/NewModel/NewModel";
import Footer from "./layout/Footer/Footer";

export const metadata = {
	title: "Home - EcomOttens"
}


export default function Home() {
  return (
		<>
			<SliderBg />
			<Wrapper>
				{/*For Content*/}
				<Content />

				{/* For Features 
				<Features />
				*/}
				
				{/* For High Resolution */}
				<HighResolution />

				{/*<NewModel />*/}

			</Wrapper>

			<Footer />
		</>
  );
}
