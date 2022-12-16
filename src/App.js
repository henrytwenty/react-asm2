import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import UseRequestProvider from './store/UseRequestProvider';

function App() {
  return (
    <UseRequestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </UseRequestProvider>
  );
}

export default App;
