import React from 'react';
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

function App() {

 // let currentDate  = moment("20241230", "YYYYMMDD").fromNow()
  // console.log(currentDate)
  //  let [isLit,setLit] = useState(true)
  
  //   function changeTheme() {
  //       setLit(!isLit)
  //       console.log(isLit)

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
<Post/>
    </>
  );
}

export default App;
