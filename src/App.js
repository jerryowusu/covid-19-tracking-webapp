import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalData } from './redux/getCovidData';
import Global from './components/Global';
// import CountryInfos from './components/countryDetails/CountryInfos';
import Navbar from './components/NavBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalData());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Global />} />
        {/* <Route path="/:id" element={<CountryInfos />} /> */}
      </Routes>
    </>
  );
};

export default App;
