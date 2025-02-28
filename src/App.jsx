import { useState } from 'react'
import './App.css'
import Container from './Container';
import Product from './Product'

function App() {


  return (
    <div>
      <Container>
        <Product productName="Telefon" price={20500} />
        <Product productName="Cüzdan" price={300} />
      </Container>
    </div>
  )
}

export default App
