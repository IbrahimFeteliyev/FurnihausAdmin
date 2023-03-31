import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BASE_URL, FILE_PATH } from '../../api/Config';
import { getProductsAction } from '../../redux/Actions/ProductActions';

const Product = () => {
    const { products } = useSelector((state) => state.products)
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);
    const [salePrice, setSalePrice] = useState(0);
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [sku, setSku] = useState("");
    const [isStock, setIsStock] = useState(false);
    const [isSale, setIsSale] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onDelete = (id) => {
        fetch(`${BASE_URL}product/removeproduct/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            salePrice : salePrice,
            price: price,
            description: description,
            summary: summary,
            sku: sku,
            brand: brand,
            coverPhoto: coverPhoto,
            isStock: isStock,
            isSale : isSale,
            productPictures: productPictures
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            navigate('/product')
          });
      };
      console.log(products);
    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 my-4">
                    <Link to="/product/create">
                        <button className='btn btn-outline-success'>Create</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    products &&
                    products.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 my-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className='img-fluid' style={{ height: 200 }} src={`${FILE_PATH}${product.coverPhoto}`} alt="" />
                                    <h5 className='mt-2'>{product.name}</h5>
                                </div>
                                <div className="card-footer">
                                    <div className="row text-center">
                                        <div className="col-lg-6">
                                            <button className='btn btn-outline-danger w-100'  onClick={() => onDelete(product.id)}>Delete</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to={`/product/update/${product.id}`}>
                                                <button className='btn btn-outline-warning w-100'>Edit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Product