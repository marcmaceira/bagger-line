import Layout from "../components/Layout";
import Image from "next/image";
import Head from "next/head";

export default function Implementation() {
	return (
		<Layout>
			<main>
				<div className="container">
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-centered">
									<h2 className="title is-1">
										Implementation
									</h2>
									<h3 className="subtitle is-3">
										Capstone Implementation
									</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-half">
								<figure className="image is-5by3 background-shadow">
									<Image
										src="/img/implementation.png"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="">
									<h2 className="title is-1">
										New Constraints
									</h2>
									<h3 className="subtitle is-3">
										Unexpected Events
									</h3>
									<div className="has-text-justified-desktop">
										<p className="is-size-4">
											During our time of research and
											documentation, an unexpected
											resignation from the project manager
											took place. This changed our plans
											drastically, since the new manager
											changed our plans for the bagger
											installation. According to the new
											manager, the bagger was a priority,
											and accelerated the instal lation
											and finalization process. This
											caused that Cooper Vision engineers
											were sent, and they installed what
											we were supposed to install
											regarding to hardware and wiring.
										</p>
										<br />
										<p className="is-size-4">
											Nonetheless, we were granted access
											to the installation process and
											coaching during this time. We were
											able to learn first hand the process
											of ensemble and testing industrial
											equipment. Even when we were not al
											lowed to do the installation, our
											work in SCADA, HMI, Device Net, and
											documentation were approved by
											Cooper Vision engineers and they
											implemented it.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="">
									<h2 className="title is-2">
										Documentation
									</h2>
									<h3 className="subtitle is-3">
										Project Documentation
									</h3>
									<div className="">
										<figure className="image is-4by3 background-shadow">
											<Image
												src="/img/documentation.png"
												layout="fill"
											/>
										</figure>
									</div>
									<br />
									<div className="has-text-justified-desktop">
										<p className="is-size-4">
											We found out that technicians and
											engineers in Cooper Vision, tend to
											use a very rough and informal kind
											of documentation to understand, fix
											or modify their machines. The new
											bagger was no exception to this. As
											a part of our duty, we started to
											redesign the documentation of the
											bagger we were working on, so it
											would be more user friendly as well
											as easy to understand for anyone.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
