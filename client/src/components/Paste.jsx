import React from "react";

function Paste({ pasteObj }) {
    const { title, author, content, date } = pasteObj;

    return (
        <div>
            {title} / {author}
            <div>
                {content}
            </div>
            {date}
        </div>
    )
}

export default Paste;