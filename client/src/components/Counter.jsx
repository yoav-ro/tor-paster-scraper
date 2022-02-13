import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function Counter() {
    const pastes = useSelector(state => state.pastesReducer);

    return(
        <Container>
            Showing {pastes.length} pastes
        </Container>
    )
}

export default Counter;