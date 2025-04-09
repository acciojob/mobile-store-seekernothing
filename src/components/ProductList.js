import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.name}
                style={{ maxWidth: "100px" }}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <Link to={`/products/${product.id}`}>
                  <h5 className="card-title text-primary">{product.name}</h5>
                </Link>
                <p className="card-text">Price: {product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-secondary"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
