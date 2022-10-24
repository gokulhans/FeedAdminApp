import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div>

        {/* <nav className="inset-x-0 bg-green-100 flex justify-between text-sm text-green-900 font-mono">

        <a href="#" className="w-full block py-2 px-3 text-center hover:bg-green-200 hover:text-green-800 transition duration-300">
        <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Home
        </a>

        <a href="#" className="w-full block py-2 px-3 text-center hover:bg-green-200 hover:text-green-800">
        <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Features
        </a>

        <a href="#" className="w-full block py-2 px-3 text-center hover:bg-green-200 hover:text-green-800">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Profile
        </a>

        <a href="#" className="w-full block py-2 px-3 text-center hover:bg-green-200 hover:text-green-800">
          <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Settings
            </a>
            
          </nav> */}
      </div>
      <Link to={'/scan'}>
        <button className='fixed right-5 bottom-5 bg-green-500 rounded-full w-16 h-16 text-white'><i className="fa-sharp fa-solid fa-qrcode"></i></button>
      </Link>
    </div>
  )
}

export default Footer