import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { addItem } from "../store/slices/cartItems";
import translations from "../components/translations"; 


function AllProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage]; 

  const showDetials = (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <h2 className="text-center">{t.title}</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => {
          return (
            <div className="col " key={product.id}>
              <div className="card h-100 text-center">
                {product.stock > 10 ? (
                  <span
                    className="badge bg-success"
                    style={{ position: "absolute", width: "30%" }}
                  >
                    In Stock
                  </span>
                ) : (
                  <span
                    className="badge bg-danger"
                    style={{ position: "absolute", width: "30%" }}
                  >
                    Out of Stock
                  </span>
                )}
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    style={{ width: "200px", margin: "auto" }}
                  />
                </Link>
                <div className="card-body ">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <hr />
                  <p className="card-text">
                    <b>Category: </b> {product?.category}
                  </p>
                  <p className="card-text">
                    <b>Price: </b> {product?.price}$
                  </p>
                  <p className="card-text">
                    <b>Rating: </b> {product?.rating}
                  </p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    class="btn btn-dark me-2"
                    onClick={() => showDetials(product.id)}
                  >
                    Show Details
                  </button>
                  <button
                    type="button"
                    class="btn btn-dark "
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllProducts;
