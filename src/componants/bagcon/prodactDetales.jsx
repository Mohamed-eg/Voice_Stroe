// import React from "react";
// // import ShopingCard from "../shopingCard";

// const ProdactDetales = (props) => {
//   return (
//     <div className="">
//       {/* <ShopingCard prodects={props.prodects} /> */}
//     </div>
//   );
// };

// export default ProdactDetales;

import React, { useState, useEffect } from "react";

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulating an API request to fetch product details
    fetch("componants/bagcon/prodactDetales/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
        setError(true);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching product details.</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
