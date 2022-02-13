import React from "react";
import { Container } from "react-bootstrap";
import "./styles/pastes.css";

function Paste({ pasteObj }) {
    const { title, content, date } = pasteObj;
    
    const author = !pasteObj.author ? "Anonymous" : pasteObj.author;
    console.log(content)
    return (
        <Container className="pastes-container">
            <div className="headline">{title} / {author}</div>
            <p>
                {content}
            </p>
            {new Date(date).toGMTString()}
        </Container>
    )
}

export default Paste;