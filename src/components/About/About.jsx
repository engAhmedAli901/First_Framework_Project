import React from 'react'

export default function About() {
  return (
    <>
    <div id='about'>
      <div id='aboutcontent' className='position-absolute top-50 start-50 w-100'>
        <h1 className='text-uppercase text-center text-white fw-bolder'>about component</h1>
        <div className='d-flex justify-content-center align-items-center'>
            <div id='line'></div>
            <i class="fa-solid fa-star px-3 text-white"></i>
            <div id='line'></div>
        </div>
        <div className=' mt-4 w-75 text-white gap-4 mx-auto'>
            <div className="row">
                <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
