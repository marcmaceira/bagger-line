import Image from "next/image";
export default function Member(props) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image">
					<Image
						src={`/img/${props.image}`}
						// layout="fill"
						width="350"
						height="350"
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
