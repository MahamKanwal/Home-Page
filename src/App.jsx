import React, { useState,useEffect } from 'react';
import './App.css';
 import Navbar from './Components/Navbar';
 import Post from './Components/Post';
  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Home from './Pages/Home';
  import About from './Pages/About';
  import Contact from './Pages/Contact';
  import Pricing from './Pages/Pricing';
  import Services from './Pages/Services';
 import { GoSun } from "react-icons/go";
 import { FaMoon } from "react-icons/fa";

 function App() {

    // let currentDate  = moment("20241230", "YYYYMMDD").fromNow()
    // console.log(currentDate)

   let [isLit, setLit] = useState(true);

   function changeTheme() {
     setLit(!isLit);
     console.log(isLit);
   }

   return (
     <>
  {/* <div
         className={`min-h-screen flex justify-center items-center transition-all duration-500 ${
           isLit ? "bg-white text-black" : "bg-gray-900 text-white"
         }`}
       >
         <div className="text-center">
          
           <label>
             <input
               onClick={changeTheme}
               className="hidden"
               type="checkbox"
             />
             {isLit ? <GoSun size={30} /> : <FaMoon size={30} />}
           </label> */}

     <Router>   
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/pricing" element={<Pricing />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </Router>  
       <div
         className={`min-h-screen flex justify-center items-center transition-all duration-500 ${
           isLit ? "bg-white text-black" : "bg-gray-900 text-white"
         }`}
       >
         <div className="text-center">
          
           <label>
             <input
               onClick={changeTheme}
               className="hidden"
               type="checkbox"
             />
             {isLit ? <GoSun size={30} /> : <FaMoon size={30} />}
           </label>

 <Post/>
 
 </div>
 </div>
    </>
   );
 }

 export default App;
