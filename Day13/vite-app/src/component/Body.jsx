import Search from "./Search"
import Product from "./Product"
import { useEffect, useState } from "react"
const Body = () => {
    const [productsData, setProductsData] = useState([]);
    const [filteredProductData, setFilteredProductData] = useState([])
    useEffect(() => {
        // public/product.json is served from the dev server root — use absolute path
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) =>{
                 setProductsData(data);
                 setFilteredProductData(data);
            })
            .catch((error) => console.log("Unable to load data", error))
    }, [])
    const searchHandler = (query) => {
        const data = productsData.filter(
            (product) => product.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProductData(data);
    }
    return (
        <div className="body">
            <Search searchHandler={searchHandler} />
            <div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
                {filteredProductData.map((product, i) => <Product key={product.title ?? i} product={product} />)}
            </div>
        </div>
    )
}

export default Body