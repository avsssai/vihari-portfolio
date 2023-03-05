import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-main",
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${oranienbaum.variable} font-serif`}>
			<Component {...pageProps} />
		</main>
	);
}
