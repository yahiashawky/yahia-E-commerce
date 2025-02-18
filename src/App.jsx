import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Shop from './pages/Shop';
import Fake from './pages/fake/Fake';
import Dummy from './pages/dummy/Dummy';
import FakeDetails from './pages/fake/FakeDetails';
import DummyDetails from './pages/dummy/DummyDetails';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import { useState } from 'react';
import Watchlist from './pages/watchlist/Watchlist';
import Swal from 'sweetalert2'


const App = () => {

  let [cartitems , setCartitems] = useState([]);

  let [watchlistitems , setWatchlistitems] = useState([]);

  let [dark ,setDark] = useState(false);

  function changetheme(){
    setDark(!dark)
  }

  

  function addToCart(product){
    let selectedProduct = cartitems.find(item => item.id == product.id);

    if(selectedProduct){
      setCartitems(cartitems.map(item => item.id == product.id ?
        {
          ...selectedProduct ,
          qty : selectedProduct.qty + 1
        } : 
        item
      ))
      Swal.fire({
        title: "The quantity of product is increased successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      setCartitems([...cartitems , {...product , qty : 1}])
      Swal.fire({
        title: "the Product added to the Cart successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
  
  function removeFromCart(product){
    setCartitems(cartitems.filter(function(item){
      return(
        item.id != product.id
      )
    }))
    Swal.fire({
      title: "the Product removed from the Cart!",
      icon: "question",
      showConfirmButton: false,
      timer: 2000
    });
  }

  function addToWatchlist(product){
    let selecteditem = watchlistitems.find(item => item.id == product.id)
    if(selecteditem){
      Swal.fire({
        title: "the Product has been added in The WatchList!",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      setWatchlistitems([...watchlistitems , product])
      Swal.fire({
        title: "the Product added to the WatchList successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  function removeFromWatchlist(product){
    setWatchlistitems(watchlistitems.filter(function(item){
      return(
        item.id != product.id
      )
    }))
    Swal.fire({
      title: "the Product removed from the WatchList !",
      icon: "question",
      showConfirmButton: false,
      timer: 2000
    });
  }

  function decrease(product){
    let selectedProduct = cartitems.find(item => item.id == product.id);
    if(selectedProduct){
      if(selectedProduct.qty > 1){
        setCartitems(cartitems.map(item=> item.id == product.id ? {...selectedProduct , qty : selectedProduct.qty -1} : item))
      }else{
        removeFromCart(product)
      }
    }
  }
  

  
  return (
    <div className={dark ? "app-dark" : "app"}>
      <BrowserRouter>
    <Navbar cartitems = {cartitems} watchlistitems = {watchlistitems} dark = {dark} changetheme = {changetheme}/>
      <Routes>
        <Route path='/' element = {<Home addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/shop' element = {<Shop addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>} />
        <Route path='/fake' element = {<Fake addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
        <Route path='/dummy' element = {<Dummy addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
        <Route path='/fakedetails/:id' element = {<FakeDetails addToCart = {addToCart}/>}/>
        <Route path='/dummydetails/:id' element = {<DummyDetails addToCart = {addToCart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart cartitems = {cartitems}  removeFromCart = {removeFromCart} addToCart = {addToCart} decrease = {decrease}/>}/>
        <Route path='/watchlist' element={<Watchlist watchlistitems = {watchlistitems} addToCart = {addToCart} removeFromWatchlist = {removeFromWatchlist}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
