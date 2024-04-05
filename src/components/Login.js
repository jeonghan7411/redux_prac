import React from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../redux/user';

const Login = () => {
  
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={()=>{
          dispatch(login({name: "내이름", age:54, email:'zzz@zz.com'}));
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