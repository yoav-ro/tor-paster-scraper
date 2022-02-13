import React from 'react';
import { addPastes, updateDate } from "./actions";
import { getAllPastes } from "./apiRequests"
import { useDispatch } from "react-redux";
import PastesList from "./components/PasteList"
import NavBar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  getAllPastes().then((pastes) => {
    dispatch(addPastes(pastes.data));
  })

  return (
    <div className="App">
      <NavBar />
      <PastesList />
    </div>
  );
}

export default App;
