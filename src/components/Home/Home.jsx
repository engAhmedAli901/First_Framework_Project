import React from 'react'
import avatar from '../../assets/imgi_1_avatar.svg'
export default function Home() {
  return (
    <>
    <div id='home' className=''>
        <div>
            <div id='homecontent' className=''><img className='w-100 mt-4' src={avatar} alt="" /></div>
        <h1 className='text-uppercase text-center text-white fw-bolder w-100'>start Framework</h1>
        <div className='d-flex justify-content-center align-items-center'>
            <div id='line'></div>
            <i class="fa-solid fa-star px-3 text-white"></i>
            <div id='line'></div>
        </div>
        <p className='text-center mt-2 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
  )
}
