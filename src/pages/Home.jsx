import React, { useState, useEffect } from "react";
import { addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from '../firebase-config';
import { Link, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc, query, onSnapshot } from 'firebase/firestore';

function Home() {
  const id = "OAPA9y7PK67yOMwi2YsP"
  console.log(id);

  let docRef
  let docSnap

  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "admindata", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        // setProduct(docSnap.data());
        console.log(docSnap.data());
        console.log(docSnap.data().name)
        setBanner(docSnap.data().banner)
        setBreakfast(docSnap.data().breakfast)
        setLunch(docSnap.data().lunch)
        setDinner(docSnap.data().dinner)
        // setAuthor(docSnap.data().author);
        // console.log(product);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);

  const [banner, setBanner] = useState("");
  const [lunch, setLunch] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [dinner, setDinner] = useState("");


  let navigate = useNavigate();

  const editAdminData = async (id) => {
    await setDoc(doc(db, "admindata", id), {
      banner: banner,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner
    });
    alert("Your file is being Updated!")
  };
  



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


  return (
    <div className="w-full max-w-lg">
      <center className='font-bold text-4xl mb-8'>FEED APP HOME PAGE</center>

      <div >


        <div>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-5 text-lg font-medium text-black dark:text-gray-300">Update Banner</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required="" defaultValue={banner}
              onChange={(event) => {
                setBanner(event.target.value);
              }}
            />
          </div>

          {/* <button onClick={() => {
            editAdminData(id)
          }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}

        </div>

        <div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-5 text-lg font-medium text-black dark:text-gray-300">Select BreakFast</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={breakfast}
              onChange={(event) => {
                setBreakfast(event.target.value);
              }}
            >
              <option value={breakfast}>{breakfast}</option>

              {productList.map((product, index) => {
                return (
                  <option key={index} value={product.name}>{product.name}</option>
                )
              })}

            </select>
          </div>

          {/* <button onClick={() => {
            editAdminData(id)
          }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}

        </div>

        <div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-5 text-lg font-medium text-black dark:text-gray-300">Select Lunch</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={lunch}
              onChange={(event) => {
                setLunch(event.target.value);
              }}
            >
              <option value={lunch}>{lunch}</option>
              {productList.map((product, index) => {
                return (
                  <option key={index} value={product.name}>{product.name}</option>
                )
              })}
            </select>
          </div>

          {/* <button onClick={() => {
            editAdminData(id)
          }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}

        </div>

        <div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-5 text-lg font-medium text-black dark:text-gray-300">Select Dinner</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={dinner}
              onChange={(event) => {
                setDinner(event.target.value);
              }}
            >
              <option value={dinner}>{dinner}</option>
              {productList.map((product, index) => {
                return (
                  <option key={index} value={product.name}>{product.name}</option>
                )
              })}
            </select>
          </div>

          <button onClick={() => {
            editAdminData(id)
          }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>

        </div>

      </div>
    </div>

  )
}

export default Home