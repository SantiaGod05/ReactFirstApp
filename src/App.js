import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting={"Hello world!"} className="text-xl font-bold"/>
        </>
);
}

export default App;
