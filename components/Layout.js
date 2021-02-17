import Head from "next/head";
import Link from "next/link";
import Header from "./Header.js";

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
				/>
				<title>Capstone</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Header />
			{children}
			<footer className="footer">
				<div className="content has-text-centered">
					<span>I'm the footer</span>
				</div>
			</footer>
		</div>
	);
}
