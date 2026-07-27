import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import ProductsPage from './landing_page/products/ProductsPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import SignupPage from './landing_page/signup/Signup'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/Notfound'
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './landing_page/signup/Login'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
    <Navbar/>
     <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>

)
