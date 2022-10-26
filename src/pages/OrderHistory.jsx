import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import DeleteAlert from './../components/Alert/DeleteAlert';
import { setDoc } from 'firebase/firestore';

function OrderHistory() {

  const [orderList, setorderList] = useState([]);
  const orderCollectionRef = query(collection(db, "ordershistory"))
  // let userid = localStorage.getItem("authorid");
  // const orderCollectionRef = query(collection(db, "orders"), where("author.id", "==", userid))

  useEffect(() => {
    onSnapshot(orderCollectionRef, (snapshot) => {
      setorderList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);


  const deleteOrder = async (id) => {
    const userDoc = doc(db, "orders", id);
    alert("Item Deleted")
    await deleteDoc(userDoc);
  };

  const deliverOrder = async (order) => {
    await setDoc(doc(db, "orders", order.id), {
      hostel: order.hostel,
      product:order.product,
      itemtype:order.itemtype,
      status:"deliverd"
    });
    alert("Item Deliverd")
  };


  return (
    <div>
      <center className='font-bold text-2xl'>Order History</center>
      <div className="m-8 overflow-x-auto relative shadow-md sm:rounded-lg">
        {/* <button className='absolute right-0 my-3 rounded text-white font-semibold'>
          <Link to={"/addorder"}>
            <div className='px-3 bg-blue-500 mx-5 py-2 rounded text-white font-medium hover:bg-blue-700'>
              New Order

            </div>
          </Link>
        </button> */}
        <table className="mt-4 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-base">
                NO
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Hostel
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                ITEM
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td className="py-4 px-6">
                    {order.hostel}
                  </td>
                  <td className="py-4 px-6">
                    {order.itemtype}
                  </td>
                  {order.status == "todeliver" ? (
                    <>
                      <td className="py-4 px-6 text-green-500 font-medium">
                        {order.status}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-4 px-6 text-pink-700 font-medium">
                        {order.status}
                      </td>
                    </>
                  )}
                  <td className="py-4 px-6">
                    {order.timestamp.toDate().toString()}
                  </td>

                  {/* <td className="py-4 px-6 text-right">
                    <Link to={`/order/${order.id}`} className="font-medium text-gray-600 dark:text-blue-500 hover:underline">View</Link>
                    <Link to={`/editorder/${order.id}`} className="mx-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    <button onClick={() => { deleteOrder(order.id) }} className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                    <button onClick={() => { deliverOrder(order) }} className="font-medium text-green-600 dark:text-blue-500 hover:underline mx-5">Deliver</button>
                  </td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OrderHistory