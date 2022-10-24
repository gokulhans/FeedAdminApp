import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from './../../firebase-config';

function Home() {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("to deliver");

  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const createProduct = async () => {
    await addDoc(productsCollectionRef, {
      name,
      desc,
      price,
      status,
    });
    navigate("/admin");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);


  return (
    <div className="w-full max-w-xl m-5">
<h1 className="text-2xl font-bold my-3 ">Create Product</h1>
      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
          <textarea type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.."
            onChange={(event) => {
              setDesc(event.target.value);
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

        <div className="mb-6">
          <label htmlFor="desc" className="text-green-500 block mb-2 text-sm font-medium dark:text-gray-300">Status</label>
          <select defaultValue={'todo'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            >
            <option value="to deliver">To Deliver</option>
            <option value="deliverd">Deliverd</option>
          </select>
        </div>
       

        <button onClick={createProduct} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default Home