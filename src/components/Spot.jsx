import TextTruncate from "react-text-truncate";

function Spot({ spot, onSpotClicked}) {
    const handleSpot = () => {
        onSpotClicked(spot.id)
    }

    const { title, description, price, list_images } = spot;
    const mainImage = list_images[0] ? list_images[0] : "https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
    return (
        <div className="col">
            <div className="spot-card card" onClick={handleSpot}>
                <img
                    src={mainImage}
                    className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <TextTruncate
                        line={3}
                        element="span"
                        truncateText="…"
                        text={description}
                        textTruncateChild={<a href="src/components/Home#">Read on</a>}
                    />
                    <div className="price-rating w-100 d-flex justify-content-between mt-3">
                        <p className="btn org-btn p-0">${price} dog/hour</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spot;
