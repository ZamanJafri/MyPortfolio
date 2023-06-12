import React, { useState } from 'react'

const Form = () => {
  const [err, setErr] = useState(false)
  const [userInput, setUserInput] = useState(
    {
      username: '',
      email: '',
      phone: '',
      textarea: ''
    }
  );
  const sethandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setUserInput(values => ({ ...values, [name]: value }))
  }
  const submitData = (event) => {
    event.preventDefault();
    if (userInput.username === '' && userInput.email === '') {
      setErr(!err)
    } else {

      console.log(userInput)
    }

  }
  return (
    <>
      <div className="form-Container">
        <h1>Contact Us</h1>
        <div className="line"></div>
        <form action="" onSubmit={submitData}>
          <div>
            <label htmlFor="u_name" className={err ? ' err ' : 'label'}>{err ? 'username is require*' : 'Username'}</label><br />
            <input type="text" placeholder='Enter Your Good Name'
              name='username'
              value={userInput.username} onChange={sethandler} />
          </div>
          <div>
            <label htmlFor="phone" className={err ? ' err ' : 'label'}>{err ? 'email is require*' : 'Email'}</label><br />
            <input type="number" min={0} name='phone'
              placeholder='Enter Your Mobile Number'
              value={userInput.number} onChange={sethandler} />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" placeholder='Enter Your Email'
              name='email' onChange={sethandler}
              value={userInput.email} />
          </div>
          <div>
            <textarea name="textarea" id="" cols="30" rows="10"
              placeholder='Write Your Query'
              value={userInput.textarea} onChange={sethandler} ></textarea>
          </div>
          <button className='btn' style={{ color: '#fff' }}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form

