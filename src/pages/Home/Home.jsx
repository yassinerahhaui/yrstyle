import React, { useEffect } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/productsSlice'

const Home = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <>
      <Carousel />  
      <ProductSlider ids={1} products={products} />
      <ProductSlider ids={2} products={products} />
      <ProductSlider ids={3} products={products} />
    </>
  )
}

export default Home