import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Theme from './components/ChangeColor';
import { useSelector } from 'react-redux';

function App() {

  const userList = useSelector((state) => state.userList.value);

  return (
    <div className="App">
      <Profile />
      <Login />
      <Theme />

      {
        userList?.map((user)=>(
          <div style={{display:"flex",justifyContent:"center"}} key={user.name}>
            <div>이름 : {user.name}</div>
            <div>나이 : {user.age}</div>
            <div>이메일 : {user.email}</div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
