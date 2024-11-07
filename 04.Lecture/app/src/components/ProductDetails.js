import { useParams } from "react-router-dom";
import React from "react";

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId, 10));

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductDetails