import React from 'react'
import './newsletter.css';
const Newsletter = () => {
  return (
    <>
      <div className="container">
        <h1>Please Join Our Channel</h1>
        <div className="subcribe-input">
          <form action="">
            <div>
              <input type="email" placeholder='write email address' />
              <button className='btn'>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter
