import Layout from "../components/Layout";
import Image from "next/image";
export default function Design() {
	return (
		<Layout>
			<main>
				<div className="container">
					<section className="section">
						<div className="columns is-centered">
							<div className="column is-three-quarters">
								<div className="has-text-centered">
									<h2 className="title is-1">Design</h2>
									<h3 className="subtitle is-3">
										Our Design
									</h3>
								</div>
							</div>
						</div>
						<div className="columns is-centered is-vcentered">
							<div className="column is-one-quarter">
								<figure className="image is-4by3">
									<Image
										src="/img/3d-model-autocad.JPG"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
							<div className="column is-half">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										Using the mechanical drawings of the new
										machine, we created a 3D model of the
										new bagger using AutoCAD. This later
										would be added to SCADA , to represent
										and monitor all the filling drawers.
										Each Filling Drawer would have an
										animation indicating if the drawers are
										open or closed, as well as green/red
										colors to easily identify which drawers
										is open or closed. It would later ha ve
										tables and numerical information of the
										current amount of lenses.
									</p>
								</div>
							</div>
						</div>
						<br />
						<div className="columns is-centered is-vcentered">
							<div className="column is-half">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										Using the mechanical drawings of the new
										machine, we created a 3D model of the
										new bagger using AutoCAD. This later
										would be added to SCADA , to represent
										and monitor all the filling drawers.
										Each Filling Drawer would have an
										animation indicating if the drawers are
										open or closed, as well as green/red
										colors to easily identify which drawers
										is open or closed. It would later ha ve
										tables and numerical information of the
										current amount of lenses.
									</p>
								</div>
							</div>
							<div className="column is-one-quarter">
								<figure className="image is-4by3">
									<Image
										src="/img/hmi-1.png"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
								<br />
								<figure className="image is-4by3">
									<Image
										src="/img/hmi-2.png"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
						</div>
						<br />
						<div className="columns is-centered is-vcentered">
							<div className="column is-one-quarter">
								<figure className="image is-3by4">
									<Image
										src="/img/dls651.png"
										layout="fill"
										alt="Vector art of a guy and an eye"
									/>
								</figure>
							</div>
							<div className="column is-half">
								<div className="has-text-justified-desktop">
									<p className="is-size-4">
										Implementing a DSL 651 for DeviceNet, we
										wanted to reduce the wiring as well as
										simplifying the hardware. Since the new
										bagger model included a lot of inputs
										and outputs such as valves, push buttons
										and sensors, it would be way too
										expensive and tedious to assemble using
										I/O modules on a PLC.
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
