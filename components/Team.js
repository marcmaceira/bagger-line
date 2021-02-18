import Member from "./Member";
export default function Team() {
	return (
		<div className="columns">
			<div className="column">
				<Member
					image="undraw_growth_curve_8mqx.png"
					name="Gerald Santiago"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="undraw_QA_engineers_dg5p.png"
					name="Jesuan Rivera"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="undraw_setup_analytics_8qkl.png"
					name="Ian Robles"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="undraw_site_stats_l57q.png"
					name="Jean Torres"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
		</div>
	);
}
