import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MessengerPage from './Pages/MessengerPage';
import MainPage from './Pages/MainPage';
import TheNavbar from './components/navbar/TheNavbar';
import { useSelector } from 'react-redux';
import ModalApp from './UI/modal/ModalApp';

const App = () => {
  const user = useSelector((state) => state.user);
  const messenger = useSelector((state) => state.messenger);

  return (
    <div className='app'>
      {messenger.modal ? <ModalApp data={messenger.modalData || null} /> : null}
      <TheNavbar />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/messenger/:id'
          element={<MessengerPage />}
        />
      </Routes>
    </div>
  );
};
export default App;
