import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
