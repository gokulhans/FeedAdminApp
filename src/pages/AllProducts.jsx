import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';

function AllProducts() {

  const [productList, setProductList] = useState([]);
  const productCollectionRef = query(collection(db, "products"))
  // let userid = localStorage.getItem("authorid");
  // const productCollectionRef = query(collection(db, "products"), where("author.id", "==", userid))

  useEffect(() => {
    onSnapshot(productCollectionRef, (snapshot) => {
      setProductList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const deleteProduct = async (id) => {
    const userDoc = doc(db, "products", id);
    alert("Item Deleted")
    await deleteDoc(userDoc);
  };


  return (
    <div>
      <center className='font-bold text-2xl'>All Products</center>
      <div className="m-8 overflow-x-auto relative shadow-md sm:rounded-lg">
        <button className='absolute right-0 my-3 rounded text-white font-semibold'>
          <Link to={"/addproduct"}>
            <div className='px-3 bg-blue-500 mx-5 py-2 rounded text-white font-medium hover:bg-blue-700'>
              New Product
            </div>
          </Link>
        </button>
        <table className="mt-16 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-base">
                Product name
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Description
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Price
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Image
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </th>
                  <td className="py-4 px-6">
                    {product.desc}
                  </td>
                  <td className="py-4 px-6">
                    {product.price}
                  </td>
                  <td className="py-4 px-6 text-green-500">
                    <img src={product.image} width="60" height="50" alt="" />
                    {/* {product.image} */}
                  </td>
                  <td className="py-4 px-6 text-right">
                    {/* <Link to={`/product/${product.id}`} className="font-medium text-gray-600 dark:text-blue-500 hover:underline">View</Link> */}
                    <Link to={`/editproduct/${product.id}`} className="mx-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    <button onClick={() => { deleteProduct(product.id) }} className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                  </td>
                </tr>
              )
            })}



          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllProducts