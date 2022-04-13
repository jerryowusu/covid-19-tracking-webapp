import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalData } from './redux/getCovidData';
import Global from './components/Global';
import Navbar from './components/NavBar';
import Country from './components/Country';

const App = () => (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Global />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </>  
);

export default App;
