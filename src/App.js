import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./Components/Navbar";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
