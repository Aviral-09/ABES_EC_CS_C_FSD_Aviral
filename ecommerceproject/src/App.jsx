// ...existing code...
import { useEffect, useState } from 'react'
import './App.css'
const Header = () => {
  return (
    <div className="header">Header</div>
  )
}
const Search = ({ filterHandler }) => {
  return (
    <div className="search">
      <input type="text" name="search" id="search" onChange={(e) => filterHandler(e.target.value)} />
      <button type="button">search</button>
    </div>
  )
}
const Product = ({ product }) => {
  const src = product.img || product.image || product.src || ''
  return (
    <div className="product">
      {src ? <img src={src} alt={product.title || 'product'} /> : null}
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </div>
  )
}
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // public/ files are served from the server root — use absolute path
    fetch('/product.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setFilteredData(data)
      })
      .catch((err) => {
        console.error("unable to load data", err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  const filterHandler = (query) => {
    const q = (query || '').toLowerCase()
    const data = products.filter(
      (product) => (product.title || '').toLowerCase().includes(q)
    )
    setFilteredData(data)
  }

  if (loading) return <div className="body">Loading...</div>
  if (error) return <div className="body">Error loading products: {error}</div>

  return (<div className="body">
    <Search filterHandler={filterHandler} />
    <div className="products">
      {filteredData.length
        ? filteredData.map((product) => <Product key={product.id || product.title} product={product} />)
        : <div>No products found</div>}
    </div>
  </div>)
}
const Footer = () => {
  return (
    <div className="footer">Footer</div>
  )
}
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default App
// ...existing code...