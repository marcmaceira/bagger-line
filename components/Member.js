import Image from "next/image";
export default function Member(props) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<Image
						src={`/img/${props.image}`}
						layout="fill"
						alt={props.name}
					/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">{props.name}</p>
						<p className="subtitle is-6">{props.fieldOfStudy}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
