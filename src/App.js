
import './App.css';
import Home from './Home';
// import { Link } from 'react-router-dom'
import { MdOutlineFactory } from "react-icons/md";

function App() {
  return (
    <div className="App">
       <div className='navbar_container'>
            <nav className='navbar_left'>
                <li><MdOutlineFactory style={{fontSize:"2rem"}}/></li>
            </nav>
            <nav className='navbar_right'>
                {/* <li><Link to ="/contracts"><button>Contracts</button></Link></li> */}
                <li><button>User</button></li>
                <li><button>Log out</button></li>
            </nav>
        </div>
      <Home />
    
    </div>
  );
}

export default App;
