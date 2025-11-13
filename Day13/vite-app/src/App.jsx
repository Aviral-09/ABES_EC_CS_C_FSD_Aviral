import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import Home from "./component/Home";
import About from "./component/about";
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Body />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App