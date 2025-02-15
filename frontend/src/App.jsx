import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Bio from './Bio';
import Header from './Header';
import ProjectDisplay from './ProjectDisplay';

function App() {

  return (
    <>
      <div className='page'>
        <Header />
        <div className='content'>
          <Bio/>
          <ProjectDisplay/>
        </div>
      </div>
    </>
  );

}

export default App
