import Image from "next/image";
import Link from "next/link";
export default function Header() {
	return (
		<>
			<section class="hero is-primary is-large header-image">
				<div class="hero-head">
					<header class="navbar">
						<div class="container">
							<div class="navbar-brand navbar-start">
								<Link href="/">
									<a class="navbar-item">
										<Image
											src="/logo-2.png"
											width="100px"
											height="auto"
											alt="CooperVision logo"
										/>
									</a>
								</Link>
							</div>
							<span class="nav-toggle">
								<span></span>
								<span></span>
								<span></span>
							</span>
							<div class="navbar-end">
								<Link href="/">
									<a class="navbar-item">Home</a>
								</Link>
								<Link href="/about">
									<a class="navbar-item">About</a>
								</Link>
								<Link href="/finance">
									<a class="navbar-item">Finances</a>
								</Link>
								<Link href="/Revista Capstone.pdf">
									<span class="navbar-item">
										<a class="button is-info is-outlined is-inverted">
											<span>Download</span>
										</a>
									</span>
								</Link>
							</div>
						</div>
					</header>
				</div>
				<div class="hero-body">
					<div class="container has-text-centered">
						<h1 class="title is-2">
							AUTOMATION & IMPROVEMENT TO BAGGER LINE
						</h1>
						<h2 class="subtitle is-5">AT COOPER VISION</h2>
						<Link href="/Revista Capstone.pdf">
							<p>
								<a class="button is-outlined">
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
