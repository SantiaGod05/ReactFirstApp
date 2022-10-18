import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="cols-2">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://globalnews.ca/wp-content/uploads/2022/10/robbie-coltrane-hagrid.jpeg?quality=85&strip=all")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Bienvenidos!</h1>
                        <p className="mb-5">En nuestra tienda encontraras lo escencial para todo estudiante de Hogwarts.</p>
                        <Link to="/Products" className="btn btn-primary">Explorá nuestros productos</Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0SmPaQg3Hn9BX4M7VXEVLU59ZxhPyZTumg&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-5xl font-bold">Hasta luego Hagrid!</h2>
                        <p className="py-6">Rubeus Hagrid, tambien conocido como Robbie Coltrane en el mundo muggle, fue profesor y guardabosques de la escuela de magia y hechiceria Hogwarts, ademas fue la mejor compania de muchos estudiantes y profesores de la escuela, es por eso que lo recordamos como uno de los mas grandes. <br />
                        <strong>Rubeus Hagrid 1950 - 2022</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home