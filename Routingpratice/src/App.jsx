import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from "./Home";
import About from "./assets/About";
import Contact from "./Contact";
import Profile from "./Profile";



function App() {
  return (
    <>
  

        <BrowserRouter>
        
        <Link to="/">Home</Link>
        <Link to="/about">Aboutus</Link>
        <Link to="/contact">contactus</Link>
        <Link to="/profile">profile</Link>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

    

    </>
  );
}

export default App;
