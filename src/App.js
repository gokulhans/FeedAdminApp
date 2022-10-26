import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
// import Admin from './pages/Admin/Admin';
// import NewProduct from './pages/Admin/NewProduct';
// import EditProduct from './pages/Admin/EditProduct';
// import AllProducts from './pages/Home/AllProducts';
// import DeliverdProducts from './pages/Home/DeliverdProducts';
import AllOrders from './pages/AllOrders';
import AllUsers from './pages/AllUsers';
import AllProducts from './pages/AllProducts';
import AddOrder from './pages/AdminForms/AddOrder';
import EditOrder from './pages/AdminForms/EditOrder';
import AddUser from './pages/AdminForms/AddUser';
import EditUser from './pages/AdminForms/EditUser';
import AddProduct from './pages/AdminForms/AddProduct';
import EditProduct from './pages/AdminForms/EditProduct';
import TodaysOrder from './pages/TodaysOrder';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <> 

      <div className='fixed top-0 left-0 z-40'> <Navbar /> </div>

      {/* <div className='fixed bottom-0 inset-x-0 z-50'> <Footer /> </div> */}

      <div className='mt-5 flex flex-col justify-start w-full  items-center p-5' style={{paddingLeft:"16rem"}}>

        <Routes>

          <Route exact path="/" element={<TodaysOrder />} />

          <Route path="/products" element={<AllProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />

          <Route path="/users" element={<AllUsers />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />

          <Route path="/orders" element={<AllOrders />} />
          <Route path="/addorder" element={<AddOrder />} />
          <Route path="/editorder/:id" element={<EditOrder />} />

          <Route path="/todayorders" element={<TodaysOrder />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          {/* <Route path="/admin" element={<Admin />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/deliverdproducts" element={<DeliverdProducts />} /> */}

        </Routes>
 
      </div> 
    </>
  );
}

export default App;
