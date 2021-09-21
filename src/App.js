import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://api.randomuser.me/')
    .then(res => res.json())
    .then(data =>setUsers(data.results))
  },[])
  return (
    <div className="App">
      {
        users.map(user => <Device key={user.email} user={user}></Device>)
      }
    </div>
  );
}


export default App;
