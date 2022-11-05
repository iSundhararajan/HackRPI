import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AddItem from '../pages/AddItem';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addItems" element={<AddItem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
