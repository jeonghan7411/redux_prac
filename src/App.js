import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Theme from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Theme />
    </div>
  );
}

export default App;
