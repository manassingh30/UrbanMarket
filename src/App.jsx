import React from 'react'
/**A note on Routing and React-Router-Dom
 * React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.
 */
/**
 * React Router Dom v6 has many useful components and to create fully functioning routing, you need most of these.

Router(usually imported as BrowserRouter):  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionality
Routes: routes are used to define the navigation paths within a single-page application (SPA). Routes determine which components should be rendered based on the current URL or location of the application.
Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the Routes components.
Link: Link component is used to create links to different routes.
 */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          }/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          }/>
          <Route path='/login' element= {<Login />} />
          <Route path='/signup' element= {<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path='/addproduct' element= {
            <ProtectedRoutesForAdmin>
                <AddProduct />
          </ProtectedRoutesForAdmin>} />
          <Route path='/updateproduct' element= {
            <ProtectedRoutesForAdmin>
              <UpdateProduct/>
            </ProtectedRoutesForAdmin> } />
          <Route path="/*" element={<NoPage />}/>
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App

//user

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//admin

const ProtectedRoutesForAdmin = ({children})=>{
  const admin= JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'akashrajakku263@gmail.com'){
    return children
  }
  else{
    return <Navigate to='/login'/>
  }
}