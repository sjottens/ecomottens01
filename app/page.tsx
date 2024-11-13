import Image from "next/image";
import styles from "./page.module.css";

//for Components
import SliderBg from "./Components/SliderBg/SliderBg";

export const metadata = {
	title: "Home - EcomOttens"
}


export default function Home() {
  return (
		<>
			<SliderBg />
		</>
  );
}
