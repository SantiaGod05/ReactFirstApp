import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import ProductDetail from './components/ProductDetail';
import { CartContextProvider } from './contexts/CartContext';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Cart' element={<Cart/>} />
                    <Route path='/Products' element={<Products/>} />
                    <Route path='/detail/:id' element={<ProductDetail/>} />
                    <Route path='/*' element={<Error404/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
            {/* <ItemListContainer greeting={"Hello world!"} className="text-xl font-bold"/> */}
        </CartContextProvider>
);
}

export default App;
