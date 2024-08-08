import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './pages/Page';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import Table from './components/table/Table';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <BrowserRouter>
    <Header searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
      <Routes>
        <Route
            path="/"
            element={
              <Sidebar>
                  <Table searchQuery={searchQuery}  />
              </Sidebar>
            }
          />

          {/* <Route
            path="/e"
            element={
              <Sidebar>
                  
              </Sidebar>
            }
          /> */}
      </Routes>
    </BrowserRouter>

   

  );
}

export default App;