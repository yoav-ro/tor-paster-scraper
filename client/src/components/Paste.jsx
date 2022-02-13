import React from "react";
import { Container } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import "./styles/pastes.css";

function Paste({ pasteObj }) {
    const { title, content, date } = pasteObj;

    const author = !pasteObj.author ? "Anonymous" : pasteObj.author;
    return (
        <Container className="pastes-container">
            <div className="headline">{title} / {author}</div>
            <pre>
                <ShowMoreText>
                    {content}
                </ShowMoreText>
            </pre>
            {new Date(date).toGMTString()}
        </Container>
    )
}

export default Paste;