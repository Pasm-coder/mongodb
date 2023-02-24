import logo from './logo.svg';
import './App.css';
import Actor from './modelos/actor';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Base de datos de peliculas</h1>

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Actor/>}></Route>
        </Routes>
      
      </BrowserRouter>





    </div>
  );
}

export default App;
