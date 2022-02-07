import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import Articles from "./Views/Articles";
import Article from "./Views/Article";
import Paintings from "./Views/Paintings";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/post/:slug" element={<Article/>}/>
                <Route path="/paintings" element={<Paintings/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
