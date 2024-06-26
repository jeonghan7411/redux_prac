import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/theme';

const ChangeColor = () => {

  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  
  return (
    <div>
      <input type='text' onChange={e=>{setColor(e.target.value);}} />
      <button
        onClick={()=>{
          dispatch(changeColor(color))
        }}
      >CHANGE COLOR</button>
    </div>
  );
};




export default ChangeColor;