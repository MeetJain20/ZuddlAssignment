import React, { useState } from 'react';
import "./Board.css";

const Board = (props) => {
    const { title } = props;
    return (
        <div className="boardbox">
            <div className="boxhead">
                {title}
            </div>

        </div>
    )
}

export default Board;
