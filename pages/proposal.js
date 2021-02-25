import Layout from "../components/Layout";
import Image from "next/image";
export default function Proposal() {
	return (
		<Layout>
			<main>
				<div className="container">
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="has-text-centered">
									<h2 className="title is-1">Proposal</h2>
									<h3 className="subtitle is-3">
										Our Proposed Solution
									</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										Since the main problem with the bagger
										was due to human intervention, we
										proposed to make it fully autonomous.
										This included a constant monitoring
										using SCADA, new HMI screens with more
										options and capabilities for the user,
										and the use of DeviceNet protocol to
										ensure reliable communication and data
										exchange between the devices.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="has-text-centered">
									<h2 className="title is-1">Limitations</h2>
									<h3 className="subtitle is-3">
										Identified Limitations
									</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										We were working in a well-known and
										standardized industry, we had some
										constrains in our designing process. All
										of Cooper Vision machinery was mainly
										done by a company called Hekuma,
										residing in Germany. This created a
										problem of lack of proprietary
										documentation, limited options regarding
										to PLC and programming, and the
										standardization of components such as
										buttons, valves, cables, and budget. We
										were facing the 2020-2021 COVID
										situation during our capstone project.
										This created a whole new dynamic on how
										we had to work in the factory, as well
										as the protocols to even enter inside de
										facility.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-centered">
									<h2 className="title is-1">Budget</h2>
									<h3 className="subtitle is-3">
										Estimated Budget
									</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										This project involved the entire
										engineering team of Cooper Vision, as
										well as the manufacturing company of
										Hekuma, the approved budget was as
										follows:
									</p>
									<br />
									<p className="is-size-4">
										Our Capstone project, located in the
										category of “Engineering”, was given a
										total of <strong>$49,332.75</strong>.
									</p>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-three-quarters is-centered">
								<figure className="image is-4by3 background-shadow">
									<Image
										src="/img/estimated-cost-summary.JPG"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
