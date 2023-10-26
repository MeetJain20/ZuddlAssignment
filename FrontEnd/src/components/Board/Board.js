import React, { useState } from 'react';
import "./Board.css";
import { useSelector } from 'react-redux';
import Postcard from '../Post/Postcard';
import Modal from "../ReUsable/Modal";

const Board = (props) => {
    const boardsData = useSelector((state) => state.board);
    const { title } = props;
    const filteredPosts = Object.values(boardsData).filter(board => board.title.toLowerCase() === title.replace(/\s/g, '').toLowerCase());

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return ( 
        <div className="boardbox">
            <div className="boxhead">
                {title}
            </div>
            <div className="postscard">
                {
                    filteredPosts.map((posts) => {
                        return (
                            <Postcard description={posts.description} img={posts.img} date={posts.date} />)
                    })
                }
            </div>
            <div className="addnewposts">
                <button className="postbutton" onClick={openModal}>
                    Add New Task...
                </button>
            </div>
        </div>
    )
}

export default Board;
