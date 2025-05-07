import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Products() {
  const [product ,setProduct]=useState([])
  const params= useParams();
  useEffect(()=>{
    axios
    .get(`https://dummyjson.com/products/${params.id}`)
    .then((res)=>{setProduct(res.data)})
    .catch((err)=>{console.log(err)});
  }, [])
  return (
    <>
    <div className="card mb-3 mx-auto" style={{ maxWidth: 1000 }}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src={product?.images?.[0]} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h4 className="card-title text-center">{product?.title}</h4>
        <br/>
        <hr/>
        <br/>
        <p className="card-text ">{product?.description}</p>
        <hr/>
        <p className="card-text"><b>Category: </b> {product?.category}</p>
        <p className="card-text"><b>Price: </b> {product?.price}$</p>
        <p className="card-text"><b>Rating: </b> {product?.rating}</p>
        <p className="card-text"><b>In Stock: </b> {product?.stock}</p>

      <p className="card-text">
        </p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Products