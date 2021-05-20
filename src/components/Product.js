const Product = ({productLabel, productImage, productImageDescription, productName, productPrice}) => {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productImageDescription} />
            <p>{productName}</p>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default Product;