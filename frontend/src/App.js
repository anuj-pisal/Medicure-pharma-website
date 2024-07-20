import React from 'react'
import Home from './Webpages/Home.js'
import Med from './Webpages/Med.js'
import './App.css'
import './Labtest1.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Doccontainer from './Components/Doctorcomp/Doccontainer.js'
import Product from './Components/Registation/Product.js'
import ProfileContainer from './Components/Profilecomp/ProfileContainer.js'
import LoginForm from './Components/Login/Loginform.js'
import Form from './Components/Registation/Form.js'
import ProjectCart from './Webpages/ProjectCart.js'
import NewMain from './Webpages/NewMain.js'
import LabTest from './Webpages/Labtest.js'
import Medicines from './Components/Products.js'
import Consult from './Components/Consultpage/Consult.js'
import { CartProvider } from './Logic/Context.js'
import Forgot from './Components/Login/Forgot.js'

export default function App() {
  return (
    <CartProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/medicines' element={<Med/>} />
    <Route path='/doctors' element={<Doccontainer/>}/>
    <Route path='/products' element={<Product/>} />
    <Route path="/cart" element={<ProjectCart/>}/>
    <Route path="/labtest" element={<NewMain/>}/>
    <Route path="/labtest/:srno" element={<LabTest/>}/>
    <Route path='/profile' element={<ProfileContainer/>} />
    <Route path='/login' element={<LoginForm/>} />
    <Route path='/signup' element={<Form/>} />
    <Route path='/consult' element={<Consult/>} />
    <Route path='/forgot' element={<Forgot/>} />

    {/* Internal Routing */}
    {/* <Route path='/medicines/meds' element={<Medicines/>} /> */}
  </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}
