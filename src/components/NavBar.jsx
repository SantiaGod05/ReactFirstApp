import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    const numAvatar = Math.random()*4
    console.log(numAvatar);
    let avatarUrl = ""

    if (numAvatar <= 1) {
        avatarUrl = "https://www.ecured.cu/images/a/a2/Luna_Lovegood.JPG"
    } else if ( numAvatar <= 2) {
        avatarUrl = "https://cinefilosoficial.com/wp-content/uploads/2020/07/harry-potter-ficcion.jpg"
    } else if ( numAvatar <= 3){
        avatarUrl = "https://series-y-peliculas.com/wp-content/uploads/2021/05/draco.jpeg"
    } else {
        avatarUrl= "data:image/jpeg;base64,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"
    }

    return (
<div className="navbar bg-base-100">
    <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">La tienda de Hagrid</Link>
    </div>
    <div className="flex-none">
        <div>
            <Link to="/Products" >Productos</Link>
        </div>
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">0</span>
                </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                    <span className="font-bold text-lg">0 Items</span>
                    <span className="text-info">Subtotal: $0</span>
                    <div className="card-actions">
                        <Link className="btn btn-primary btn-block" to="/Cart" >Ir al carrito</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={avatarUrl} />
                </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li className="disabled">
                    <a className="justify-between">
                        Perfil
                        <span className="badge">Proximamente</span>
                    </a>
                </li>
                <li className="disabled"><a>Configuracion</a></li>
                <li className="disabled"><a>Cerrar sesion</a></li>
            </ul>
        </div>
    </div>
    </div>
)
}
export default NavBar