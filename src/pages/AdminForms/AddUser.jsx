import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from './../../firebase-config';

function AddUser() {

  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");

  const usersCollectionRef = collection(db, "users");
  let navigate = useNavigate();

  const createuser = async () => {
    await addDoc(usersCollectionRef, {
      name,
      address,
      phone,
      location,
    });
    navigate("/users");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);


  return (
    <div className="w-full max-w-xl m-5">

      <div >
        <center className='font-bold text-2xl'>Add users</center>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Address</label>
          <textarea type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="address.."
            onChange={(event) => {
              setaddress(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Phone</label>
          <textarea type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="address.."
            onChange={(event) => {
              setphone(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Location</label>
          <textarea type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="location Link.."
            onChange={(event) => {
              setlocation(event.target.value);
            }}
          />
        </div>

        {/* <div className="mb-6">
          <label htmlFor="address" className="text-green-500 block mb-2 text-sm font-medium dark:text-gray-300">Status</label>
          <select defaultValue={'todo'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value="to deliver">To Deliver</option>
            <option value="deliverd">Deliverd</option>
          </select>
        </div> */}


        <button onClick={createuser} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default AddUser