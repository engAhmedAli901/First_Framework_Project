import React, { useState } from 'react'
import img_1 from '../../assets/imgi_1.png'
import img_2 from '../../assets/imgi_2.png'
import img_3 from '../../assets/imgi_3.png'



export default function Portfolio() {

    const [activeimage , setActiveimage] = useState(null)   


  return (
    <>
    <div id='portfolio' className='bg-white position-relative'>
    <div id='screencover' onClick={()=>{setActiveimage(null)}} className={`${activeimage? "d-flex" : "d-none"} justify-content-center align-items-center`}>
        <div style={{width:600}}>
            <img onClick={(e) => e.stopPropagation()} className='mt-5 imagecover w-100' src= {activeimage} alt="" />
        </div>
    </div>
    <div className='pt-5'>
        <h1 className='text-uppercase text-center text-black fw-bolder'>portfolio component</h1>
      <div className='d-flex justify-content-center align-items-center'>
            <div id='line' className='bg-black'></div>
            <i className="fa-solid fa-star px-3 text-black"></i>
            <div id='line' className='bg-black'></div>
        </div>
        <div className="container mt-4">
            <div className="row">
                {[img_1,img_2,img_3].map((Source,i)=>(
                    <div key={i} className="col-md-4 mt-4">
                    <div className="inner position-relative " onClick={()=>{setActiveimage(Source)}}>
                        <img  className='w-100 rounded-3' src={Source} alt="" />
                         <div  className='rounded-3 d-flex justify-content-center align-items-center' id='cover'><i class="fa-solid fa-plus "></i></div>
                    </div>
                </div>
                ))}
            </div>
            <div className="row mt-5">
                {[img_1,img_2,img_3].map((Source,i)=>(
                    <div key={i} className="col-md-4 mt-4">
                    <div className="inner position-relative " onClick={()=>{setActiveimage(Source)}}>
                        <img  className='w-100 rounded-3' src={Source} alt="" />
                         <div  className='rounded-3 d-flex justify-content-center align-items-center' id='cover'><i class="fa-solid fa-plus "></i></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
