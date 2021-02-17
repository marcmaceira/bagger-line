export default function Hero(props) {
    return (
        <section className="hero">
            <div className="hero-body">
                <p className="title is-size-1">
                {props.title}
                </p>
                <p className="subtitle">
                    {props.subtitle}
                </p>
            </div>
        </section>
    )
}