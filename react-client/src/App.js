import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState , useEffect } from 'react'
import CartList from './components/CartList';
import axios from "axios"

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const [data , setData] = useState([])

const [trigger,setTrrigger]=useState(false)
const [cart , setCart] = useState([])

console.log(data)
useEffect(() => {
  axios.get("http://localhost:3000/api/offer").then((res) => {
     
  
  setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [trigger]);

const addToCart = (product) =>{
setCart([...cart,product] )
}



const stalSearch = (input) => {
  const filtr= data.filter((e) => {
    return e.name.toLowerCase().includes(input.toLowerCase());
  })
  setData(filtr)
};


const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}
  return (
  <div>
    

          {view ==="productList" && <ProductsList  data={data} addToCart={addToCart}/>}
          {view ==="cart"&&<CartList cartItem={cart}/>}   
    </div>
  );
}

export default App;
