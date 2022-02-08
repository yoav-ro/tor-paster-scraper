import React from "react";

function Paste(pasteObj) {
    const { author, date, content, title } = pasteObj;

    return (
        <div>
            <h3>{title} / {author}</h3>
            <div>{content}</div>
            <div>{date}</div>
        </div>
    )
}