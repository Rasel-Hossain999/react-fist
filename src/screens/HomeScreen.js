import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <Header/>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}></Product>
                </Col>
            ))}
        </Row>
        <Footer/>
    </>
  )
}

export default HomeScreen