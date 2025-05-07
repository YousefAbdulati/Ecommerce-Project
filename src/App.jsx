import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import AllProducts from './pages/AllProducts'
import Products from './pages/Products'
import Header from './components/Header'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  }, [currentLanguage]);
  return <BrowserRouter>
  <Header />
  <hr/>
<Routes >
  <Route path='/' element={<AllProducts />} />
  <Route path='/product/:id' element={<Products />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>
  
}

export default App
