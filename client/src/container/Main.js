import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddItem from '../pages/AddItem';
import Recycle from '../pages/Recycle';
import Donate from '../pages/Donate';
import Footer from '../components/Footer';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addItems" element={<AddItem />} />
                <Route path="/recycle" element={<Recycle />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
