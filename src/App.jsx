import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from "./pages/Home";
import Details from "./pages/Details";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
      <Header/>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
