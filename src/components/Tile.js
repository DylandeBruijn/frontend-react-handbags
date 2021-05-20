const Tile = ({tileImage, tileImageDescription, tileTitle, tileText}) => {
    return (
        <section>
            <img src={tileImage} alt={tileImageDescription} />
            <h2>{tileTitle}</h2>
            <p>{tileText}</p>
        </section>
    )
}

export default Tile;