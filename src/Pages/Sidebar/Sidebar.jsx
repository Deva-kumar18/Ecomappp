import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/features/cart/cartSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartSlice.cart);
  const [selectedCategories, setSelectedCategories] = useState([]);

  

  return (
    <div className='sidebar-container'>
      Filter
      <div>
        <label>
          Mobiles
          <input
            type='checkbox'
            checked={selectedCategories.includes('mobile')}
            
          />
        </label>
      </div>
      <div>
        <label>
          Speakers
          <input
            type='checkbox'
            checked={selectedCategories.includes('speaker')}
            
          />
        </label>
      </div>
      <div>
        <label>
          Cameras
          <input
            type='checkbox'
            checked={selectedCategories.includes('camera')}
            
          />
        </label>
      </div>
      <label>
          Watch
          <input
            type='checkbox'
            checked={selectedCategories.includes('watch')}
           
          />
        </label>
      
    </div>
  );
};

export default Sidebar;


