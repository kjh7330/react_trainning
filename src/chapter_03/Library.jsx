import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name = "처음만난 리액트" count = {300} />
            <Book name = "처음만난 자바" count = {250} />
            <Book name = "처음만난 마이에스큐엘" count = {600} />
        </div>
    );
}

export default Library;