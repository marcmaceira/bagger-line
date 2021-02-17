import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
export default function Home() {
	return (
		<Layout>
			<main>
				<div className="container">
					<section className="section">
						<div className="columns">
							<div className="column is-one-quarter">
								<h2 className="title is-size-1">About Us</h2>
								<h3 className="subtitle is-size-3">
									Who we are
								</h3>
							</div>
							<div className="column is-half">
								<p className="is-size-4">
									We are a group of 4 senior electrical
									engineering students coursing our final
									Capstone project design at Cooper Vision.
									With our knowledge in the fields of
									communications, automation and controls, we
									engaged this project with the mission of
									solving and improving the quality of the
									product and reducing their losses.
								</p>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="columns">
							<div className="column is-one-quarter">
								<h2 className="title is-size-1">
									Cooper Vision
								</h2>
								<h3 className="subtitle is-size-3">
									Who's Cooper Vision?
								</h3>
							</div>
							<div className="column is-half">
								{/* <Hero
							title="Cooper Vision"
							subtitle="Who's Cooper Vision?"
						/> */}
								<p className="is-size-4">
									Cooper Vision is the leading company in the
									manufacture of soft contact lenses in Puerto
									Rico. Located in Juana Díaz, their product
									focuses on the production of prescribed
									lenses.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
