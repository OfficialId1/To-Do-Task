import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task/>}/>
        <Route path='/add' element={<AddTask/>}/>
        <Route path='/edit/:id' element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
