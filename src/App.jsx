import { useState } from 'react'
 
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects.jsx';
import Connect from './Pages/Connect.jsx';


import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx';




function App() {
   const [count, setCount] = useState(0)

   return (
      <>
         <BrowserRouter>
            <Navbar/> 

            {/* <div className="pt-20"></div> */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/connect" element={<Connect />}/>
            </Routes>
  
          <Footer></Footer>
         </BrowserRouter>


      </>
   )
}

export default App
