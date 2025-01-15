import React, { useState,useEffect } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
 import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';
import { MdPadding } from 'react-icons/md';

 function App() {

    // let currentDate  = moment("20241230", "YYYYMMDD").fromNow()
    // console.log(currentDate)

    const [isLit, setIsLit] = useState(true);

    const changeTheme = () => {
      setIsLit(!isLit);
    };

   return (
     <>

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
      className={`min-h-screen w-full flex justify-center items-center transition-all duration-500 ${
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

 <ComponentOne style={{paddingTop:"1000px"}}/>
 <br />
 <br />
 <ComponentTwo/>
    </>
   );
 }

 export default App;
