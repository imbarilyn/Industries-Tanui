
import './App.css';
import Home from './Home';
import { Link , Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import { MdOutlineFactory } from "react-icons/md";
import  Create from "./Create";
import Products from "./Products";
import './Styling/Home.css'
import { useEffect, useState } from 'react';
import ProductContainer from './ProductContainer';
import { db } from './fireb-config'
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");

  // useEffect(()=>{
  //   fetch('./products')
  //   .then(resp => resp.json())
  //   .then(setProducts)
  // }, [])
  const getProducts = async ()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc =>({id:doc.id, ...doc.data()}))
    setProducts(products);
    console.log(products)
  }

  useEffect(() => {
    getProducts();
}, []);


  const addProductHandler = (newProduct) =>{
    const add = {...products, newProduct}
    setProducts(add);
  }
  return (
    <div className="App">
       <div className='navbar_container'>
            <nav className='navbar_left'>
                <Link></Link>
                <li>
                  <button  onClick  = {()=>navigate("/")} style ={{background: "transparent", border:"none", color: "#fff"}}>
                    <MdOutlineFactory style={{fontSize:"2rem"}}/>
                  </button>
                </li>
            </nav>
            <nav className='navbar_right'>
                <li><Link to ="/products"><button>Products</button></Link></li>
                <li><button>User</button></li>
                <li><button>Log out</button></li>
               
            </nav>
        </div>
        
      <Routes>
        <Route path  ="/" element ={<Home />} />
        <Route path="/products" element={<ProductContainer products={products} />} />
        <Route path  = "/create"  element ={< Create addProducts = {addProductHandler}/>} />
      </Routes>

      <div className='footer_copyright'>
                <small>&copy;Tanui Industries. All rights reserved.</small>
            </div>

    
    </div>
  );
}

export default App;
