export default (props: { faded: boolean }) => {
    return (
        <div className="background">
            <video autoPlay muted loop className="background" style={{ opacity: props.faded ? 0.3 : 1.0 }}>
                <source src="movie.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
