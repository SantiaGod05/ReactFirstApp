import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Cart' element={<Cart/>} />
                <Route path='/Products' element={<Products/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        {/* <ItemListContainer greeting={"Hello world!"} className="text-xl font-bold"/> */}
        </>
);
}

export default App;
