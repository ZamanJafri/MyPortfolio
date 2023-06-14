import React from 'react'
// import { Form } from 'react-router-dom'
import Form from './Form'
import { Link } from 'react-router-dom'
const ContactBanner = () => {
  return (
    <>
      <div className="contactBanner">
        <div className="contactBannerContainer">         
            <h2 className='flex'>
               <span>Contact</span>
               <span>|</span>
              <Link to='/'>Home</Link>
            </h2>        
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <Form />
      </div>

    </>
  )
}

export default ContactBanner
