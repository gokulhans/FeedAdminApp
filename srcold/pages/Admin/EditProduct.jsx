import React, { useState, useEffect } from "react";
import { addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from '../../firebase-config';
import { Link, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

function EditProduct() {
  const { id } = useParams();
  console.log(id);
  const [project, setProject] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(""); 


  let docRef
  let docSnap

  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "products", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setProject(docSnap.data());
        console.log(docSnap.data().name, docSnap.data().desc);
        setName(docSnap.data().name)
        setDesc(docSnap.data().desc)
        setPrice(docSnap.data().price)
        setStatus(docSnap.data().status)
        // setAuthor(docSnap.data().author);
        // console.log(project);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);


  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const editProject = async (id) => {
    await setDoc(doc(db, "products", id), {
      name: name,
      desc: desc,
      price: price,
      status: status,
    });
    navigate("/admin");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);



  return (
    <div className="w-full max-w-lg">

      <div >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Project Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name.." required="" defaultValue={project.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="desc.." defaultValue={project.desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Status</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={project.status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value={project.status}>{project.status}</option>
            <option value="to deliver">To Deliver</option>
            <option value="deliverd">Deliverd</option>
          </select>
        </div>



        <div className="mb-6">
          <label htmlFor="desc" className="text-white block mb-2 text-sm font-medium dark:text-gray-300">Price</label>
          <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Price.." defaultValue={project.price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>



        <button onClick={() => {
          editProject(id)
        }} className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>

  )
}

export default EditProduct