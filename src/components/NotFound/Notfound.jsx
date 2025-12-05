import React from 'react'

export default function Notfound() {
  return (
    <>
    <div id='notfound' className='vh-100 text-center'>
        <h1 className='text-black text-center nf'>404</h1>
        <p className='mt-3  fw-bold text-secondary'>File not found</p>
        <p className='mt-3 text-secondary'>The site configured at this address does not contain the requested file.</p>
        <p className='mt-3 text-secondary'>If this is your site, make sure that the filename case matches the URL as well as any file permissions.</p>
        <p className='mt-3 text-secondary'>For root URLs (like http://example.com/) you must provide an index.html file.</p>
    </div>
    </>
  )
}
