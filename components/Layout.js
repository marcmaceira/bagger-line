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
			{/* <header>
				<nav
					className="navbar"
					role="navigation"
					aria-label="main navigation"
				>
					<div id="navbarmenu" className="navbar-menu">
						<div className="navbar-start">
							<Link href="/">
								<a className="navbar-item">Home</a>
							</Link>
							<Link href="/about">
								<a className="navbar-item">About</a>
							</Link>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<a className="button is-primary">
										Download Capstone Magazine
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header> */}
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
