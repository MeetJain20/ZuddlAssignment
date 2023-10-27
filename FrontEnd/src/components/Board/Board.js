import React, { useState } from 'react';
import "./Board.css";
import { useSelector } from 'react-redux';
import Postcard from '../Post/Postcard';
import Addpostcard from '../Post/Addpostcard';
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
                            <Postcard boardid={posts.boardid} title={posts.title} description={posts.description} img={posts.img} date={posts.date} />)
                    })
                }
            </div>
            <div className="addnewposts">
                <button className="postbutton" onClick={openModal}>
                    Add New Task...
                </button>
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <Addpostcard boardid={0} type="addpost" title={title} closeModal={closeModal} description="" img={null} />
            </Modal>
        </div>
    )
}

export default Board;
