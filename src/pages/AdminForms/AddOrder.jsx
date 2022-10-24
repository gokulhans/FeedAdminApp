import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from './../../firebase-config';

function AddOrder() {

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("todeliver");

  const ordersCollectionRef = collection(db, "orders");
  let navigate = useNavigate();

  const createorder = async () => {
    await addDoc(ordersCollectionRef, {
      name,
      user,
      price,
      status,
    });
    navigate("/orders");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);


  return (
    <div className="w-full max-w-xl m-5">

      <div >
        <center className='font-bold text-2xl'>Add orders</center>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Product Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">User Name</label>
          <textarea type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.."
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Price</label>
          <textarea type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.."
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        {/* <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">status Link</label>
          <textarea type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="status Link.."
            onChange={(event) => {
              setstatus(event.target.value);
            }}
          />
        </div> */}

        {/* <div className="mb-6">
          <label htmlFor="desc" className="text-green-500 block mb-2 text-sm font-medium dark:text-gray-300">Status</label>
          <select defaultValue={'todo'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value="to deliver">To Deliver</option>
            <option value="deliverd">Deliverd</option>
          </select>
        </div> */}


        <button onClick={createorder} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default AddOrder