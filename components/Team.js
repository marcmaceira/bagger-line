import Member from "./Member";
export default function Team() {
	return (
		<div className="columns">
			<div className="column">
				<Member
					image="gerald-santiago.jpg"
					name="Gerald Santiago"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="jesuan-rivera.jpg"
					name="Jesuan Rivera"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="ian-robles.jpg"
					name="Ian Robles"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
			<div className="column">
				<Member
					image="jean-torres.jpg"
					name="Jean Torres"
					fieldOfStudy="Electrical Engineering"
				/>
			</div>
		</div>
	);
}
