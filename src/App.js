import React from 'react'
import './sass/App.css';
import { Header } from './views/header/Header';
import { WrapperMain } from './views/main/WrapperMain';
import { Navbar } from './views/navbar/Navbar';

function App() {


  return (
    <div className="App">
      <Header />
      <div className='main-nav-layout'>
        <Navbar />
        <WrapperMain />
      </div>
    </div>
  );
}

export default App;