import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://occ-0-1555-993.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hi friend!</h1>
                    <p className="mb-5">Welcome to our adventure, we are Jesse and Walt.</p>
                    <Link to="/Products" className="btn btn-primary">Check our products</Link>
                </div>
            </div>
        </div>
    )
}
export default Home