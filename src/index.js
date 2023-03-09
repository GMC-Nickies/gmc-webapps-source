import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import PokerHandGen from './projects/poker-hand-gen';
import EvensOrOdds from './projects/evens-or-odds';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Routes>
      <Route path='/' element={<Header><App /></Header>} />
      <Route path='/music-master' element={<Header><MusicMaster /></Header>} />
      <Route path='/poker-hands' element={<Header><PokerHandGen /></Header>} />
      <Route path='/evens-or-odds' element={<Header><EvensOrOdds /></Header>} />
    </Routes>
  </BrowserRouter>
);


