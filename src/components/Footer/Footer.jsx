import React from 'react'

export default function Footer() {
  return (
    <>
    <div id='footer' className='w-100 p-5'>
      <div className="row mb-5">
        <div className="col-md-4">
        <div className='text-white text-center'>
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>  
      </div>
       <div className="col-md-4">
         <div className='text-center'>
            <h3 className='text-white'>AROUND THE WEB</h3>
            <div className='fs-5 d-flex justify-content-center gap-3 text-white pt-1'>
                <i class="fa-brands fa-facebook border border-1 border-white rounded-circle p-2"></i>
                <i class="fa-brands fa-twitter border border-1 border-white rounded-circle p-2"></i>
                <i class="fa-brands fa-linkedin-in border border-1 border-white rounded-circle p-2"></i>
                <i class="fa-solid fa-globe border border-1 border-white rounded-circle p-2"></i>
            </div>
        </div>
       </div>
        <div className="col-md-4">
            <div className='text-center'>
            <h3 className='text-white'>ABOUT FREELANCER</h3>
            <p className='text-white w-75 mx-auto'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
      </div>
    </div>
    <div id='endfooter'>
        <p className='text-white text-center my-auto py-3'>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
