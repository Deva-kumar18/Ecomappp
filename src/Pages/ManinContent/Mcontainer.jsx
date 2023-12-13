import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ADDCART from '../../Assets/addcart.gif'
import { cart } from '../../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';


const Mcontainer = () => {
    const data = useSelector((state)=>state.cartSlice.cart)
    const dispatch = useDispatch()
    const navigate =useNavigate()
   const hadleNavigate=(id)=>{
    navigate(`/product/${id}`)

   }
  return (
    <div>
         <ul className='data-cont' >{data.map((val,key)=>(
            <li  key={val.id} className='data-product' ><li className='img-back'onClick={()=>hadleNavigate(val.id)}><img className='p-image' src={val.image}/></li>
            <div class="slide-text-container" ><li className="slide-text left">{val.title}</li>
            <li className="slide-text right">${val.price}</li></div>
            <button  className='cart-btn' onClick={()=>dispatch (cart({key,opr:'add',count:val.count+1}))}><div className='addcart'><div className='wave'>Add Cart</div><div><img className='addcart-anim' src={ADDCART}/></div></div></button></li>
            
        ))}</ul>
    </div>
  )
}

export default Mcontainer