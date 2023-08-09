import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, selectIsLoading, selectProduct } from '../../redux/features/product/productSlice';

const EditProduct = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const productEdit = useSelector(selectProduct)

  useEffect(() => {
    dispatch(getProduct())
  },[])
  return (
    <div>
      
    </div>
  )
}

export default EditProduct
