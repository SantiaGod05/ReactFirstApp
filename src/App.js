import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import Catalogue from './components/Catalogue';

function App() {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/Cart' element={<Cart/>} />
                <Route path='/Catalogue' element={<Catalogue/>} />
            </Routes>
        </BrowserRouter>
        {/* <ItemListContainer greeting={"Hello world!"} className="text-xl font-bold"/> */}
        </>
);
}

export default App;
