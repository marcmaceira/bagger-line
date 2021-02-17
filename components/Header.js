import Link from "next/link";
import Navbar from "./Navbar";
export default function Header() {
	return (
		<>
			<section className="hero is-primary is-large header-image">
				<div className="hero-head">
					<Navbar />
				</div>
				<div className="hero-body">
					<div className="container has-text-centered">
						<h1 className="title is-2">
							AUTOMATION & IMPROVEMENT TO BAGGER LINE
						</h1>
						<h2 className="subtitle is-5">AT COOPER VISION</h2>
						<Link href="/Revista Capstone.pdf">
							<p>
								<a className="button is-outlined">
									<span>Download</span>
								</a>
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
