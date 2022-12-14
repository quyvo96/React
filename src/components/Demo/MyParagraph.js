import React from "react";

const MyParagraph = (props) => {
    console.log('MyParagraph test');
    return <p>{props.children}</p>

};
export default MyParagraph;