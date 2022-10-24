import React, { useState, useEffect } from "react";
import { addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from '../../firebase-config';
import { Link, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

function EditUser() {
  const { id } = useParams();
  console.log(id);
  const [user, setuser] = useState({});
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");

  let docRef
  let docSnap

  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "users", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setuser(docSnap.data());
        console.log(docSnap.data().name, docSnap.data().address);
        setName(docSnap.data().name)
        setaddress(docSnap.data().address)
        setphone(docSnap.data().phone)
        setlocation(docSnap.data().location)
        // setAuthor(docSnap.data().author);
        // console.log(user);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);


  const usersCollectionRef = collection(db, "users");
  let navigate = useNavigate();

  const edituser = async (id) => {
    await setDoc(doc(db, "users", id), {
      name: name,
      address: address,
      phone: phone,
      location: location,
    });
    navigate("/users");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);



  return (
    <div className="w-full max-w-lg">
      <center className='font-bold text-2xl'>Edit user</center>

      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">User Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required="" defaultValue={user.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Address</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="address.." defaultValue={user.address}
            onChange={(event) => {
              setaddress(event.target.value);
            }}
          />
        </div>

        {/* <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Status</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user.status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value={user.status}>{user.status}</option>
            <option value="to deliver">To Deliver</option>
            <option value="deliverd">Deliverd</option>
          </select>
        </div> */}



        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">Phone</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="phone.." defaultValue={user.phone}
            onChange={(event) => {
              setphone(event.target.value);
            }}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="address" className="text-black block mb-2 text-sm font-medium dark:text-gray-300">location Link</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="location Link.." defaultValue={user.location}
            onChange={(event) => {
              setlocation(event.target.value);
            }}
          />
        </div>



        <button onClick={() => {
          edituser(id)
        }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default EditUser