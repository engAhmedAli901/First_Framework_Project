import React from 'react'



export default function Contact() {
  return (
    <>
    <div id='contact'>
      <div className=''>
        <h1 className='text-uppercase text-center text-black fw-bolder'>conatct section</h1>
      <div className='d-flex justify-content-center align-items-center'>
            <div id='line' className='bg-black'></div>
            <i className="fa-solid fa-star px-3 text-black"></i>
            <div id='line' className='bg-black'></div>
        </div>
        <div id='inputs' className=' w-50 mx-auto'>
<input className="form-control w-100" id='Name' type="text" placeholder="userName" aria-label="name" />
<input className="form-control w-100 mt-5" type="number" placeholder="userAge" aria-label="age" />
<input className="form-control w-100 mt-5" type="email" placeholder="userEmail" aria-label="mail" />
<input className="form-control w-100 mt-5" type="password" placeholder="userPassword" aria-label="pass" />
<button className='mt-4 btn btn-info'>send Message</button>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
