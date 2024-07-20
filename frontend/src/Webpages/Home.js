import Navbar from "../Components/Navbar"
import Ad from "../Components/Ad"
import Trend from "../Components/Trend"
import Offers from "../Components/Offers"
import Whyus from "../Components/Whyus"
import Cust from "../Components/Cust"
import Faq from "../Components/Faq"
import LabTests from '../Components/LabTests'
import Info from "../Components/Info"
import LastPart from "../Components/LastPart"
import Footer from "../Components/Footer"

export default function home() {
  return (
    <div>
      <Navbar/>
      <Ad/>
      <Trend/>
      <Offers/>
      <Whyus/>
      <Cust/>
      <Faq/>
      <LabTests/>
      <Info/>
      <LastPart/>
      <Footer/>
    </div>
  )
}
