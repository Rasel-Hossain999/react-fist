import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
          <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/product/:id' element={<ProductScreen/>}></Route>
          </Routes>        
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
