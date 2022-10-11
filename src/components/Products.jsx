import  ProductCard from "./ProductCard";

const Products = () => {
return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 w-full ">
        <div className="text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold py-10">Our products</h1>
            </div>
        </div>
        <div className="flex flex-row w-screen justify-around">

            <ProductCard img={"https://www.investigacionyciencia.es/images/33246/imageFacebookThumbnail.jpg"} title={"The old recipe"} desc={"The original meta created by Walt."}  />
            <ProductCard img={"https://media.istockphoto.com/photos/the-main-ingredient-in-ecstasy-pills-in-its-pure-form-picture-id1187294562?k=20&m=1187294562&s=612x612&w=0&h=qqxm154NN1MXBCVF8K0bVPcPswUwAcyzsCPeLFUXOR8="} title={"Blue Meta"} desc={"A completely new and revolutionary product."} />
            <ProductCard img={"https://i.blogs.es/f24615/pollo-frito-estilo-pollos-hermanos-4-/1366_2000.jpg"} title={"Fried chiken"} desc={"A tasty kilo of fried chiken of Los pollos hermanos."} />
            
        </div>
    </div>
)
}
export default Products