import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, addProduct, updateProduct, deleteProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" ? parseInt(value) : value,
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({
      ...editingProduct,
      [name]: name === "price" ? parseInt(value) : value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProduct(editingProduct);
    setEditingProduct(null);
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <h3>Add New Product</h3>
      <form onSubmit={handleAddSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>

      <h3 className="mt-4">Product List</h3>
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
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>

                {editingProduct && editingProduct.id === product.id ? (
                  <form onSubmit={handleEditSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editingProduct.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={editingProduct.description}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={editingProduct.price}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Image URL</label>
                      <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={editingProduct.image}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success float-right"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary float-right me-2"
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info float-right"
                    >
                      View
                    </Link>
                    <button
                      className="btn btn-danger float-right me-2"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning float-right me-2"
                      onClick={() => handleEditClick(product)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
