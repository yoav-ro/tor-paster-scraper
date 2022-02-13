import React from 'react';
import { addPastes, updateDate } from "./actions";
import { getAllPastes } from "./apiRequests"
import { useDispatch } from "react-redux";
import PastesList from "./components/PasteList"

function App() {
  const dispatch = useDispatch();

  getAllPastes().then((pastes) => {
    dispatch(addPastes(pastes.data));
  })

  return (
    <div className="App">
      <PastesList />
    </div>
  );
}

export default App;
