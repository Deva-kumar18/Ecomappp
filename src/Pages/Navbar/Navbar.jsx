import React, { useEffect, useState } from 'react'
import Cart from '../../Assets/trolley.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../Assets/search.gif'
import { cart ,updateCart} from '../../redux/features/cart/cartSlice';

const Navbar = () => {
    const navigate = useNavigate()
    const data = useSelector((state)=>state.cartSlice.cart)
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cartSlice.cart);
    const[search, setSearch] =useState("")
   const handleclick = ()=>{
    navigate('/cart')
   }
   useEffect(() => {
        
    dispatch(updateCart(cartData));
  }, [dispatch, cartData]);
   const searchProduct=(e)=>{
    if(e!==""){
        const productFilter = data.filter((product)=>(
            product.title.toLowerCase().includes(e.toLowerCase())
        ))
      dispatch(updateCart(productFilter))
    }
 else {
    dispatch(updateCart(data));
  }
    

   }
   const badge = () => {
    var badger = 0;
    data.map((val, key) => (badger = badger + val.count));
    return badger;
  };
  return (
    <div className='nav-container'>
        <div className='sphy'><h1 className='shop-name'>Shoppy</h1></div>
        <div className='s-container'><input onChange={(e)=>{searchProduct(e.target.value)}} className='input-search' type='text' placeholder='search...'/><img className='s-icon' src={Search}/> </div>
        <div><img onClick={handleclick} className='cart-ico' src={Cart}/><div className='badge'>{badge()}</div></div>
        
    </div>
  )
}

export default Navbar