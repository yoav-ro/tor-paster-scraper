import React, { useEffect, useRef } from 'react';
import { addPastes } from "./actions";
import { getPastesFromDate } from "./apiRequests"
import { useDispatch } from "react-redux";
import PastesList from "./components/PasteList"
import NavBar from './components/Navbar';
import Counter from "./components/Counter";

function App() {
  const dateRef = useRef(new Date("2000/3/8"));
  const dispatch = useDispatch();

  const refreshPastes = (date) => {
    getPastesFromDate(date.current).then((pastes) => {
      dispatch(addPastes(pastes.data));
    })
    date.current = new Date();
  }

  // const refreshPastes = (date) => {
  //   return (dispatch)=>{
  //     dispatch(addPastes)
  //   }
  // }

  useEffect(() => {
    refreshPastes(dateRef)
    setInterval(() => {
      refreshPastes(dateRef);
    }, 120000);
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Counter />
      <PastesList />
    </div>
  );
}

export default App;
