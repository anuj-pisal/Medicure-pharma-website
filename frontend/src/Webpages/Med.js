import React from 'react'
import Navbar from '../Components/Navbar'
import OrderOnline from '../Components/OrderOnline'
import SelfPraise from '../Components/SelfPraise'
import WebInfo from '../Components/WebInfo'
import Health from '../Components/Health'
import Brands from '../Components/Brands'
import Logos from '../Components/Logos'
import Products from '../Components/Products'
import LastPart from '../Components/LastPart'
import Footer from '../Components/Footer'

export default function Med() {
  return (
    <div>
        <Navbar/>
        <OrderOnline/>
        <SelfPraise/>
        <WebInfo/>
        <Health/>
        <Brands/>
        <Logos/>
        <Products/>
        <LastPart/>
        <Footer/>
    </div>
  )
}
