function Product({ spot }) {
    const { title, description, price, list_images } = spot
    const mainImage = list_images[0] ? list_images[0] : "https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
    return (
        <div className="grid product">
            <div className="column-xs-12 column-md-7">
                <div className="product-gallery d-flex justify-content-between">
                    <div className="product-image">
                        <img className="active" src={mainImage}></img>
                    </div>
                    <ul className="image-list">
                        {list_images.slice(1).map((image, index) => (
                            <li className="image-item" key={index}><img src={image}></img></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="column-xs-12 column-md-5">
                <h1>{title}</h1>
                <h2>${price}</h2>
                <div className="description">
                    <p>{description}</p>
                </div>
                <button className="add-to-cart">Book Now</button>
            </div>
        </div>
    );
}

export default Product;
