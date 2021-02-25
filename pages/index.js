import Layout from "../components/Layout";
import Team from "../components/Team";
import Image from "next/image";
export default function Home() {
	return (
		<Layout>
			<main>
				<div className="container">
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="has-text-centered">
									<h2 className="title is-1">About Us</h2>
									<h3 className="subtitle is-3">Our Team</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										We are a group of 4 senior electrical
										engineering students coursing our final
										Capstone project design at Cooper
										Vision. With our knowledge in the fields
										of communications, automation and
										controls, we engaged this project with
										the mission of solving and improving the
										quality of the product and reducing
										their losses.
									</p>
								</div>
							</div>
						</div>
						<Team />
					</section>
					<section className="section">
						<div className="has-text-centered">
							<h2 className="title is-1">CooperVision</h2>
							<h3 className="subtitle is-3">
								Who's CooperVision?
							</h3>
						</div>
						<br />
						<div className="columns is-centered">
							<div className="column is-half">
								<figure className="image is-4by3 background-shadow">
									<Image
										className="is-rounded"
										src="/img/undraw_Surveillance_re_8tkl.png"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										Cooper Vision is the leading company in
										the manufacture of soft contact lenses
										in Puerto Rico. Located in Juana Díaz,
										their product focuses on the production
										of prescribed lenses.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
