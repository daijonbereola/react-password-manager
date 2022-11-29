import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  
  const addPassword = () => {
    Axios.post('http://localhost:3030/addpassword', {
      password: password,
      title: title
    })
  }

  return (
    <div className="App">
      <div className='addPassword'>
        <input 
          type="text" 
          placeholder='i.e. password123'
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <input 
          type="title" 
          placeholder='i.e. Facebook'
          onChange={(e) => 
            setTitle(e.target.value)
          } />
        <button onClick={addPassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;
