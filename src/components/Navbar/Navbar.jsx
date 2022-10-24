import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  function myFunction() {
    var x = document.getElementById("navdiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div>
      <nav className="bg-green-100 border-green-200 px-5  sm:px-4 py-4 rounded dark:bg-green-900 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <button onClick={() => myFunction()} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-green-500 rounded-lg md:hidden hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <a href="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
            <span className="self-center text-xl font-bold green-100space-nowrap dark:text-green-100">Delivery App</span>
          </a>
          <div className="flex items-center md:order-2">

            {/* <button type="button" className="flex mr-3 text-sm bg-green-800 rounded-full md:mr-0 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button> */}

            {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-green-500 rounded-lg md:hidden hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button> */}
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 bg-green-50 rounded-lg border border-green-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-green-100 dark:bg-green-800 md:dark:bg-green-900 dark:border-green-700">
              <li>
                <Link to={"/"} className="block py-2 pr-4 pl-3 text-green-100 bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-green-100" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to={"/admin"} className="block py-2 pr-4 pl-3 text-green-700 rounded hover:bg-green-200 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-green-400 md:dark:hover:text-green-100 dark:hover:bg-green-700 dark:hover:text-green-100 md:dark:hover:bg-transparent dark:border-green-700">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <aside className="w-64 h-screen z-50 bg-green-100" aria-label="Sidebar" id="navdiv" style={{display:"none"}}>
        <div className="overflow-y-auto py-4 px-3 ">
          <ul className="space-y-2">

            <li onClick={() => myFunction()}>
              <Link to={"/"}>
                <div className="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-green-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">Home</span>
                </div>
              </Link>
            </li>
            <li onClick={() => myFunction()}>
              <Link to={"/"}>
                <div className="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-green-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">All Products</span>
                </div>
              </Link>
            </li>
            <li onClick={() => myFunction()}>
              <Link to={"/allproducts"}>
                <div className="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-green-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="ml-3">All Products</span>
                </div>
              </Link>
            </li>

            <li onClick={() => myFunction()}>
              <Link to={"/deliverdproducts"}>
                <div className="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-green-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="ml-3">Deliverd Products</span>
                </div>
              </Link>
            </li>
            <li onClick={() => myFunction()}>
              <Link to={"/admin"}>
                <div className="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-green-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="ml-3">Admin</span>
                </div>
              </Link>
            </li>

          </ul>
        </div>
      </aside>

    </div>
  )
}

export default Navbar