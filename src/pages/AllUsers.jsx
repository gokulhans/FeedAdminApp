import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';

function AllUsers() {

  const [userList, setuserList] = useState([]);
  const userCollectionRef = query(collection(db, "users"))
  // let userid = localStorage.getItem("authorid");
  // const userCollectionRef = query(collection(db, "users"), where("author.id", "==", userid))

  useEffect(() => {
    onSnapshot(userCollectionRef, (snapshot) => {
      setuserList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const deleteuser = async (id) => {
    const userDoc = doc(db, "users", id);
    alert("Item Deleted")
    await deleteDoc(userDoc);
  };


  return (
    <div>
      <center className='font-bold text-2xl'>All Hostels</center>
      <div className="m-8 overflow-x-auto relative shadow-md sm:rounded-lg">
        <button className='absolute right-0 my-3 rounded text-white font-semibold'>
          <Link to={"/adduser"}>
            <div className='px-3 bg-blue-500 mx-5 py-2 rounded text-white font-medium hover:bg-blue-700'>
              New Hostel
            </div>
          </Link>
        </button>
        <table className="mt-16 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-base">
                Hostal name
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Address
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Phone
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Users
              </th>
              <th scope="col" className="py-3 px-6 text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </th>
                  <td className="py-4 px-6">
                    {user.address}
                  </td>
                  <td className="py-4 px-6">
                    {user.phone}
                  </td>
                  <td className="py-4 px-6">
                    {user.users}
                  </td>
                  {/* <td className="py-4 px-6 text-green-500">
                    <img src={user.image} width="60" height="50" alt="" />
                  </td> */}
                  <td className="py-4 px-6 text-right">
                    {/* <Link to={`/user/${user.id}`} className="font-medium text-gray-600 dark:text-blue-500 hover:underline">View</Link> */}
                    <Link to={`/edituser/${user.id}`} className="mx-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    <button onClick={() => { deleteuser(user.id) }} className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                  </td>
                  {/* <iframe src={user.location} width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </tr>

              )
            })}



          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllUsers