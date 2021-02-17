import Layout from "../components/Layout";
import Hero from "../components/Hero";
export default function About() {
	return (
		<Layout>
			<div className="container">
				<Hero title="About" subtitle="Who we are" />
				<section className="section">
					<div className="content">
						<p className="is-size-3">
							We are a group of 4 senior electrical engineering
							students coursing our final Capstone project design
							at Cooper Vision. With our knowledge in the fields
							of communications, automation and controls, we
							engaged this project with the mission of solving and
							improving the quality of the product and reducing
							their losses.
						</p>
					</div>
				</section>
				<Hero title="Cooper Vision" subtitle="Who's Cooper Vision?" />
				<section className="section">
					<div className="content">
						<p className="is-size-3">
							Cooper Vision is the leading company in the
							manufacture of soft contact lenses in Puerto Rico.
							Located in Juana Díaz, their product focuses on the
							production of prescribed lenses.
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
