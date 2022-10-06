const Products = () => {
return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 w-full ">
        <div className="text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold py-10">Our products</h1>
            </div>
        </div>
        <div className="flex flex-row w-screen justify-around">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-2">
                <figure><img src="https://www.investigacionyciencia.es/images/33246/imageFacebookThumbnail.jpg" alt="meta" /></figure>
                <div className="card-body">
                    <h2 className="card-title">The old recipe</h2>
                    <p>The original meta created by Walt.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-2">
                <figure><img src="https://media.istockphoto.com/photos/the-main-ingredient-in-ecstasy-pills-in-its-pure-form-picture-id1187294562?k=20&m=1187294562&s=612x612&w=0&h=qqxm154NN1MXBCVF8K0bVPcPswUwAcyzsCPeLFUXOR8=" alt="meta" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Blue Meta
                        <div class="badge badge-accent badge-sm">NEW</div></h2>
                    <p>A completely new and revolutionary product.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-2">
                <figure><img src="https://i.blogs.es/f24615/pollo-frito-estilo-pollos-hermanos-4-/1366_2000.jpg" alt="meta" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fried chiken</h2>
                    <p>A tasty kilo of fried chiken of Los pollos hermanos.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Products