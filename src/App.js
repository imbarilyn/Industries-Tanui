
import './App.css';
import Home from './Home';
import { Link , Routes, Route, BrowserRouter} from 'react-router-dom'
import { MdOutlineFactory } from "react-icons/md";
import  Create from "./Create";
import Products from "./Products";

function App() {
  return (
    <div className="App">
       <div className='navbar_container'>
            <nav className='navbar_left'>
                <li><MdOutlineFactory style={{fontSize:"2rem"}}/></li>
            </nav>
            <nav className='navbar_right'>
                <li><Link to ="/products"><button>Products</button></Link></li>
                <li><button>User</button></li>
                <li><button>Log out</button></li>
               
            </nav>
        </div>
      <Routes>
        <Route path  ="/" element ={<Home />} />
        <Route path  = "/products"  element ={<Products />} />
        <Route path  = "/create"  element ={< Create/>} />
      </Routes>

    
    </div>
  );
}

export default App;
