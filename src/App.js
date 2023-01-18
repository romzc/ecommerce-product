import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { ProductShow } from './components/ProductShow'

function App() {

  const [productQuantity, setProductQuantity] = useState(0)
  const [slideImageIndex, setSlideImageIndex] = useState(0)
  const [showDetailImage, setShowDetailImage] = useState(false)

  return (
    <div className="App">
      <Navbar 
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      />
      <Product 
        slideImageIndex={slideImageIndex}
        setProductQuantity={setProductQuantity}
        setSlideImageIndex={setSlideImageIndex}
        setShowDetailImage={setShowDetailImage}
      />
      {
        showDetailImage &&
        <ProductShow 
          slideImageIndex={slideImageIndex}
          setShowDetailImage={setShowDetailImage}
        />
      }
    </div>
  );
}

export default App;
