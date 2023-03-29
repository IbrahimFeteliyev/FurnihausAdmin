import { BASE_URL } from "../../api/Config";
import { CREATE_PRODUCT, GET_PRODUCTS } from "../Constats/ProductConstants";

export const getProductsAction  = () => async (dispatch,getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()
    dispatch({
        type: GET_PRODUCTS,
        payload: products.message
    })

}

export const createProductAction = (name,brand,categoryId,sku,description,summary, coverPhoto,productPictures,isStock,isSale,price,salePrice) => async (dispatch, getState) =>{
    let data = await fetch(`${BASE_URL}product/add`,{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            brand: brand,
            price: price,
            salePrice : salePrice,
            description:description,
            summary:summary,
            sku:sku,
            categoryId:categoryId,
            coverPhoto: coverPhoto,
            isStock: isStock,
            isSale: isSale,
            productPictures: [{
                photoUrl: "ajdahdkashdkl"
            }]
        })
    }).then(res => res.json())
    dispatch({
        type: CREATE_PRODUCT,
        payload: data
    })
}


