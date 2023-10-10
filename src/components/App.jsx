import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import MenuPage from "./MenuPage";
import Footer from "./Footer";
import ContactPage from "./ContactPage";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                <Route path="/menu" element={<MenuPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
