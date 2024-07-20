import React,{useState} from 'react'
import '../Style/Home.css'
import { useNavigate } from 'react-router-dom';
export default function Faq() {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);
  const [showImage6, setShowImage6] = useState(false);
  const [showImage7, setShowImage7] = useState(false);
  const [showImage8, setShowImage8] = useState(false);
  const [showImage9, setShowImage9] = useState(false);
  const [showImage10, setShowImage10] = useState(false);

  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const handleBtnClick = () => {
    setShowImage(!showImage);
  }
  const handleBtnClick2 = () => {
    setShowImage2(!showImage2);
  }
  const handleBtnClick3 = () => {
    setShowImage3(!showImage3);
  }
  const handleBtnClick4 = () => {
    setShowImage4(!showImage4);
  }
  const handleBtnClick5 = () => {
    setShowImage5(!showImage5);
  }
  const handleBtnClick6 = () => {
    setShowImage6(!showImage6);
  }
  const handleBtnClick7 = () => {
    setShowImage7(!showImage7);
  }
  const handleBtnClick8 = () => {
    setShowImage8(!showImage8);
  }
  const handleBtnClick9 = () => {
    setShowImage9(!showImage9);
  }
  const handleBtnClick10 = () => {
    setShowImage10(!showImage10);
  }

  const getMore = () => {
    setShowText(!showText);
  }
  const getMore2 = () => {
    setShowText2(!showText2);
  }
  const getMore3 = () => {
    setShowText3(!showText3);
  }

  const navigate = useNavigate();
  const nav = () => {
      navigate("/medicines");
  }
  
  return (
    <div>
  <div className="faq-contain">
    <div className="faq">
      <div className="title-faq">
        <h2>FAQ's</h2>
      </div>
      <details className="faq-que">
        <summary className="question" id="que10" onClick={handleBtnClick}>What should I do if my order hasn't arrived or is damaged ?</summary>
        <p className="faq-para">If your order hasn't arrived or if it arrived damaged, please follow these steps: <br />
          <b>For Orders That Haven't Arrived:</b><br />
          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check the Tracking Information:</b> First, review the tracking information provided in your shippin 
          confirmation email to see the current status of your order.<br />
          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact the Shipping Carrier:</b> Sometimes delays occur due to the carrier. Contact the shippingcarrier with your tracking number for more information.<br />
          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Customer Service:</b> If you are unable to resolve the issue with the carrier, or if thetracking information is unclear, please contact our customer service team at [customer service contact information] or[customer service email]. Provide your order number and any relevant details.<br />
          
          {showText && (
            <span id="moretext"><b>For Orders That Are Damaged:</b><br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Document Damage:</b> Take clear photos of the damaged itand the packaging they came in.<br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact CustoService:</b> Reach out to our customer service timmediately at [customer servicecontact information [customer service email]. Provide your ornumber, a description of the damage, and attthephotos.<br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FolInstructions:</b> Our customer service team wguide you through the next steps, which mayinclreturning the damaged items or receivinreplacement or refund.<br /></span> 
          )}
  
          <button id="read-more" onClick={getMore}>
            {showText ? "read less" : "read more"}
          </button>    
        </p> 
      </details>
      <details className="faq-que">
        <summary className="question" id="que1" onClick={handleBtnClick2}>Can I change or cancel my order after it's been placed?</summary>
        <p className="faq-para">&nbsp;&nbsp;&nbsp;<b>Yes</b>, you can change or cancel your order after it has been placed, but it depends on the status of your order.
          If you wish to change or cancel your order, please contact our customer service team as soon as possible at [customer service contact information] or [customer service email]. If the order has not yet been processed or shipped, we will do our best to accommodate your request.
          Please note that once the order has been shipped, we cannot make any changes or cancellations. In such cases, you may need to follow our return policy to return the items after you receive them. For more detailed information, please refer to our [Return Policy](link to ret policy) page.</p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que2" onClick={handleBtnClick3}>How long will it take to receive my order?</summary>
        <p className="faq-para">The delivery time for your order depends on several factors, including the shipping method you choose and your location. Here is a general overview of our shipping options and their estimated delivery times:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Standard Shipping: </b>Typically takes 5-7 business days. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Expedited Shipping: </b>Usually arrives within 2-3 business days. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Overnight Shipping: </b>Arrives the next business day if the order is placed before [specific cutoff time, e.g., 12 PM]. <br />
          Please note that these estimates can vary based on your location and any potential delays with the shipping carrier. Ordersplaced after the cutoff time or on weekends and holidays will be processed the next business day.
          You will receive a shipping confirmation email with tracking information once your order has been dispatched. You can usethis tracking number to monitor the delivery status of your order.
        </p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que3" onClick={handleBtnClick4}>How do I use a discount code or coupon?</summary>
        <p className="faq-para">To use a discount code or coupon on our website, please follow these simple steps: <br />
          <b>Add Items to Your Cart: </b> Select the products you wish to purchase and add them to your shopping cart. <br /> 
          <b>View Your Cart: </b> Once you have added all the items you want, click on the shopping cart icon to view your cart. <br />
          <b>Enter the Discount Code: </b> In the cart or checkout page, you will see a field labeled "Discount Code" or "Coupon Code." Enter your discount code or coupon code in this field. <br />
          <b>Apply the Code: </b> Click the "Apply" button next to the discount code field. You should see the discount applied to your order total. <br />
          <b>Complete Your Purchase: </b> Proceed with the checkout process by entering your shipping and payment information. Review your order to ensure the discount has been applied correctly before finalizing your purchase. <br />
        </p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que4" onClick={handleBtnClick5}>What should I do if I receive the wrong medication?</summary>
        <p className="faq-para">If you receive the wrong medication, please follow these steps to resolve the issue promptly: <br />
          <b>Do Not Use the Medication: </b> For your safety, do not take any of the medication you received if it does not match your prescription or the order details. <br />
          <b>Contact Customer Service Immediately: </b> Reach out to our customer service team as soon as possible at [customer service contact information] or [customer service email]. Provide your order number and a detailed description of the issue. <br />
          <b>Provide Evidence: </b> If possible, take clear photos of the medication you received, including the packaging and the prescription label, and share these with our customer service team. This will help us quickly identify and correct the error. <br />
          <b>Follow Instructions: </b> Our customer service team will provide you with instructions on how to return the incorrect medication. They will also arrange for the correct medication to be sent to you as quickly as possible. <br />
          {showText2 && (
             <span id="moretext2">
            <b>Receive Replacement: </b> Once we confirm the error, we will expedite the shipping of the correct medication to you at no additional cost. <br /><br />
            <b><q>We apologize for any inconvenience this may cause and appreciate your understanding and cooperation in resolving this matter swiftly. Your safety and satisfaction are our top priorities.</q></b></span>
          )}
         
          <button id="read-more2" onClick={getMore2}>
          {showText2 ? "read less" : "read more"}  
          </button>
        </p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que5" onClick={handleBtnClick6}>What should I do if I have questions about a medication?</summary>
        <p className="faq-para">&nbsp;&nbsp;&nbsp;<b>If you have questions about a medication, please refer to the detailed information provided on our website, including usage instructions, potential side effects, and interactions with other drugs.</b> Additionally, you can consult with your healthcare provider or pharmacist for personalized advice and information. It is important to have all the necessary information to use your medication safely and effectively. If you have any further questions or concerns, please reach out to a healthcare professional.
        </p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que6" onClick={handleBtnClick7}>Are generic versions of medications available?</summary>
        <p className="faq-para">
          &nbsp;&nbsp;&nbsp;<b>Yes, we offer generic versions of many medications.</b> Generic medications contain the same active ingredients as their brand-name counterparts and are just as effective, but they are typically available at a lower cost. You can find generic options by searching for the medication name on our website. If a generic version is available, it will be listed alongside the brand-name product. For more information about the availability of generic medications and their cost savings, please refer to the product details or consult with your healthcare provider.</p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que7" onClick={handleBtnClick8}>How do I find the right medication for my condition?</summary>
        <p className="faq-para">To find the right medication for your condition, follow these steps: <br />
          <b>Consult Your Healthcare Provider:</b> Your doctor or healthcare provide brr is the best source for recommending the appropriate medication based on your medical history and specific condition. <br />
          <b>Search by Condition:</b> On our website, you can search for medications by entering your condition or symptoms in the search bar. This will display a list of medications commonly prescribed for that condition. <br />
          <b>Read Product Descriptions:</b> Each medication page includes detailed information about the drug, including its uses, benefits, side effects, and any special instructions. This can help you understand if it is suitable for your condition.<br />
          {showText3 && (
            <span id="moretext3">
            <b>Use Our Tools:</b> Some websites offer tools like symptom checkers or medication finders that can guide you to the right medication based on your input. <br />
            <b>Consult a Pharmacist:</b> If you have access to a licensed pharmacist through our website, you can ask them for recommendations and advice on selecting the right medication. <br /> </span>
          )}
        
          <button id="read-more3" onClick={getMore3} >
            {showText3 ? "read less" : "read more"}
          </button>    
        </p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que8"onClick={handleBtnClick9}>Do I need a prescription to order medication?</summary>
        <p className="faq-para">
          &nbsp;&nbsp;&nbsp;<b>Yes</b>, for many medications, you do need a valid prescription from a licensed healthcare provider to place an order. Prescription medications are regulated to ensure they are used safely and appropriately. When ordering, you will be required to provide your prescription information, which we will verify with your healthcare provider. However, there are also many over-the-counter (OTC) medications available on our website that do not require a prescription. These can be purchased directly without additional documentation. Always consult with your healthcare provider to determine whether a prescription is necessary for your specific medication needs.</p>
      </details>
      <details className="faq-que">
        <summary className="question" id="que9" onClick={handleBtnClick10}>What forms of payment do you accept?</summary>
        <p className="faq-para">We accept a variety of payment methods to ensure a convenient shopping experience for our customers. <br />These include: <br />
          <b>Credit and Debit Cards:</b> Visa, MasterCard, American Express, and Discover. <br />
          <b>Digital Wallets:</b> PayPal, Apple Pay, Google Pay, and other popular digital wallets. <br />
          <b>Bank Transfers:</b> Direct bank transfers are available for certain orders. Please contact our customer service fomore details. <br />
          <b>Gift Cards and Store Credits:</b> If you have a gift card or store credit, you can apply it at checkout. <br />
          <b> Insurance:</b> For prescription medications, we accept many major insurance plans. Please ensure your insurancinformation is up to date in your account. <br />
        </p>
      </details>
    </div>
    <div className="faq-ad">
      <div className="faq-ad-img">
        
        <img src="img/adleft.png" alt="Loading" className="faq-img-i"  onClick={nav}/>
        <img src="img/adleft3.png" alt="Loading" className="faq-img-i"  onClick={nav}/>
        {showImage && (
        <img src="img/o1.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img1l" onCLick={nav}/>
        )}
        {showImage2 && (
          <img src="img/o3.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img2l" onCLick={nav}/>
        )}
        
        {showImage3 && (
           <img src="img/o5.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img3l" onCLick={nav}/>
        )}
       
        {showImage4 && (
                  <img src="img/o7.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img4l" onClick={nav}/>
        )}
        {showImage5 && (
          <img src="img/o9.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img5l" onClick={nav}/>
        )}
        
        {showImage6 && (
              <img src="img/trend1.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img6l" onClick={nav}/>
        )}
    
        {showImage7 && (
           <img src="img/trend2.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img7l" onClick={nav}/>
        )}
       
        {showImage8 && (
          <img src="img/trend9.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img8l" onClick={nav}/>
        )}
        
        {showImage9 && (
          <img src="img/trend10.jpg" alt="loading" className="faq-img-i-afterwards" id="faq-img9l" onClick={nav}/>
        )}
        
        {showImage10 && (
          <img src="img/trend11.png" alt="loading" className="faq-img-i-afterwards" id="faq-img10l" onClick={nav}/>
        )}
        
      </div>
    </div>
    <div className="faq-ad">
      <div className="faq-ad-img">
        <img src="img/adright2.png" alt="loading." className="faq-img-i"  onClick={nav}/>
        <img src="img/adright.png" alt="loading." className="faq-img-i" onClick={nav} />
        {showImage && (
        <img src="img/o2.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img1r" onClick={nav}/>
        )}
        {showImage2 && (
          <img src="img/o4.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img2r" onClick={nav}/>
        )}        
        
        {showImage3 && (
          <img src="img/o6.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img3r" onClick={nav}/>
        )}
        
        {showImage4 && (
          <img src="img/o8.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img4r" onClick={nav}/>
        )}
        
        {showImage5 && (
          <img src="img/trend3.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img5r" onClick={nav}/>
        )}
        
        {showImage6 && (
          <img src="img/trend4.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img6r" onClick={nav}/>
        )}
        
        {showImage7 && (
          <img src="img/trend5.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img7r" onClick={nav}/>
        )}
        
        {showImage8 && (
          <img src="img/trend6.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img8r" onClick={nav}/>
        )}
        
        {showImage9 && (
          <img src="img/trend7.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img9r" onClick={nav}/>
        )}
        
        {showImage10 && (
          <img src="img/trend8.jpg" alt="loading." className="faq-img-i-afterwards" id="faq-img10r" onClick={nav}/>
        )}
        
      </div>
    </div>
  </div>
</div>

  )
}
