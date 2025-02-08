import './App.css';
import { useState } from 'react';
import{ Provider }from "react-redux"
import Navbar from './components/Navbar';
import { store } from './components/redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/Auth';
import Signup from './components/Signup';
import Home from './components/Home';
import Cartpage from './components/Cartpage';
import Orderpage from './components/Orderpage';

function App() {

  //create routes
const routes = createBrowserRouter([
  {
    path:"/", element: <Navbar/>, children:
    [
      {index:true, element: <Home/>},
  {path:"/signin", element: <Auth/>},
  {path:"/signup", element: <Signup/>},
  {path:"/cart", element: <Cartpage/>},
  {path:"/myorders", element: <Orderpage/>}]
  }
])
  
 
  return (
    <>
    <Provider store={store}>
     <RouterProvider router={routes}/>
     </Provider>
     </>
  );
}
export default App;
