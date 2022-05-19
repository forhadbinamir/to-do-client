import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Components/ToDo/ToDo';
import Navbar from './Shared/Header/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
      </Routes>
    </div>
  );
}


export default App;
