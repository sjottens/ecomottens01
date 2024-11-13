import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: {
		template: "%s - EcomOttens",
		default: "EcomOttens",
	},
  description: "Where you start your Online business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
				<Navbar />
				{children}
			</body>
    </html>
  );
}
