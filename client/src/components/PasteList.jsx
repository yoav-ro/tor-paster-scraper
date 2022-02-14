import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import Paste from "./Paste";

function PastesList() {
    const pastes = useSelector(state => state.pastesReducer);
    const [scrollItems, setScrollItems] = useState([]);
    const loadNum = useRef(1);

    useEffect(() => {
        setTimeout(() => {
            console.log("effect", pastes.length)
            setScrollItems(pastes.slice(0, 20))
        }, 2000);
    }, [])


    console.log(scrollItems.length, pastes.length)

    const fetchData = () => {
        console.log("fetchings")
        setTimeout(() => {
            setScrollItems([...scrollItems, ...pastes.slice(loadNum.current * 20, (loadNum.current + 1) * 20)]);
            loadNum.current=loadNum.current+1;
        }, 1500);
    }

    return (
        <InfiniteScroll
            dataLength={scrollItems.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>No pastes left</h4>}
        >
            {scrollItems.map((paste, key) => {
                return <Paste pasteObj={paste} key={key} />
            })}
        </InfiniteScroll>
    )
}

export default PastesList