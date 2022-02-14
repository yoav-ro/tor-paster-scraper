import React from "react";
import { useSelector } from "react-redux";
// import { addPastes, updateDate } from "../actions";
// import { getAllPastes } from "../apiRequests"
import Paste from "./Paste";

function PastesList() {
    const pastes = useSelector(state => state.pastesReducer);

    return (
        pastes.map((paste, key) => {
            return <Paste pasteObj={paste} key={key} />
        })
    )
}

export default PastesList