import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
