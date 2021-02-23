import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [isActive, setisActive] = useState(false);

	return (
		<header className="navbar">
			<div className="container">
				<div className="navbar-brand navbar-start">
					<Link href="/">
						<a className="navbar-item">
							{/* <Image
								src="/logo-2.png"
								width="100px"
								height="auto"
								alt="CooperVision logo"
							/> */}
							CooperVision
						</a>
					</Link>
					<a
						role="button"
						aria-label="menu"
						aria-expanded="false"
						onClick={() => {
							setisActive(!isActive);
						}}
						className={`navbar-burger burger ${
							isActive ? "is-active" : ""
						}`}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div
					className={`navbar-menu ${isActive ? "is-active" : ""}`}
					id="navMenu"
				>
					<div className="navbar-end">
						<Link href="/">
							<a className="navbar-item">Home</a>
						</Link>
						<Link href="/proposal">
							<a className="navbar-item">Proposal</a>
						</Link>
						<Link href="/Revista Capstone.pdf">
							<span className="navbar-item">
								<a className="button is-info is-outlined is-inverted">
									<span>Download</span>
								</a>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
