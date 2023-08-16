import './App.css';
import Search from "./components/Search";
import OffreList from './components/OffreList';
import { useState , useEffect } from 'react'
import Reservation from './components/Reservation';
import axios from "axios"
import Create from './components/Create';
import Update from './components/update';

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("offertList");
const [data , setData] = useState([])
const [trigger,setTrrigger]=useState(false)
const [cart , setCart] = useState([])
const [update , setUpdate]=useState({})


console.log(data)
useEffect(() => {
  axios.get("http://localhost:3000/api/offer").then((res) => {
     
  
  setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [trigger]);




const stalCart=(obj)=>{
  setView("cart")
setCart([...cart,obj])
}

const emptyCart = () => {
  setCart([])
}
const updated= (obj)=>{
  setView("update")
  setUpdate(obj)

}


const toggleMenu = ()=> {
  setMenuView(!menuView)
}

const switchView = (x) => {
  setView(x)
}

  return (
  <div>
    
    <div class="navbar">
      <div class="logo"  onClick={()=>setData(!trigger)}>
        <h1>Travel</h1>
      </div>
      
    <div class="menu">
      <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">services</a></li>
      <li><a href="#">Places</a></li>
      <li><a href="#">Discount</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Booking</a></li>
    </ul>
       
    </div>
   
    <span class="signup">
            ADD
          </span>
          
  </div>

          {view ==="offertList" && <OffreList trigger={setTrrigger} offreUpdate={updated} carts = {stalCart}  data={data} cart={cart}/>}
          {view === "cart" && <Reservation cart={cart} />}
          {view ==="create"&& <Create carts={stalCart}/>}
          {view === "update"&&<Update offreUpdate={update} />}
          
    </div>
  );
}

export default App;
