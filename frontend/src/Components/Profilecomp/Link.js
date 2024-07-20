import React from 'react'
import './Link.css'

export default function Link() {
  return (
    <>
    <div className="links">

    <p>
        <label htmlFor="twitter">Twitter</label><br />
        <input type="text" id="twitter"/>

    </p>

    <p>
        <label htmlFor="Google">Google+</label><br />
        <input type="text" id="Google" />
    </p>
    <p>
        <label htmlFor="facebook">Facebook</label><br />
        <input type="text" id="facebook" />
    </p>
    <p>
        <label htmlFor="insta">Instagram</label><br />
        <input type="text" id="insta"/>
    </p>
    </div>
    </>
  )
}
