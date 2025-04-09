import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AdminPanel from "./components/AdminPanel";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S8 64GB Black",
      price: 16303,
      description:
        "This is a Samsung Galaxy S8 with 64GB storage in Black color.",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s901ezgdinu/gallery/in-galaxy-s22-s901-sm-s901ezgdinu-thumb-531092716",
    },
    {
      id: 2,
      name: "Samsung Galaxy S9 64GB Black",
      price: 20888,
      description:
        "This is a Samsung Galaxy S9 with 64GB storage in Black color.",
      image:
        "https://images.samsung.com/is/image/samsung/uk-galaxy-s9-sm-g960-sm-g960fzkdbtu-frontblack-94134484",
    },
    {
      id: 3,
      name: "Samsung Galaxy S8+ 64GB Black",
      price: 18701,
      description:
        "This is a Samsung Galaxy S8+ with 64GB storage in Black color.",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-plus-s906-412948-sm-s906ezwdinu-530964637",
    },
    {
      id: 4,
      name: "iPhone 12 128GB Blue",
      price: 25999,
      description: "This is an iPhone 12 with 128GB storage in Blue color.",
      image: "https://images.unsplash.com/photo-1592286927505-1def25115ef9",
    },
    {
      id: 5,
      name: "Google Pixel 6 128GB Black",
      price: 22500,
      description:
        "This is a Google Pixel 6 with 128GB storage in Black color.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179",
    },
    {
      id: 6,
      name: "OnePlus 9 Pro 256GB Silver",
      price: 24999,
      description:
        "This is a OnePlus 9 Pro with 256GB storage in Silver color.",
      image: "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac",
    },
    {
      id: 7,
      name: "Xiaomi Mi 11 128GB Gray",
      price: 15999,
      description: "This is a Xiaomi Mi 11 with 128GB storage in Gray color.",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25",
    },
    {
      id: 8,
      name: "Oppo Find X3 Pro 256GB White",
      price: 19999,
      description:
        "This is an Oppo Find X3 Pro with 256GB storage in White color.",
      image: "https://images.unsplash.com/photo-1617194645499-82f45edad0b3",
    },
  ]);

  const addProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} />}
            />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  products={products}
                  addProduct={addProduct}
                  updateProduct={updateProduct}
                  deleteProduct={deleteProduct}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
