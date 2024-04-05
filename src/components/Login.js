import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from '../redux/user';
import {list} from '../redux/userList'


const Login = () => {
  
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList.value);

  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');

  return (
    <div>

      <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setAge(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setEmail(e.target.value)}}/>


      <button
        onClick={()=>{
          dispatch(login({name, age, email}));
          dispatch(list([...userList, {name ,age ,email}]))
        }}
      >Login</button>

      <button
        onClick={()=>{
          dispatch(logout());
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Login;