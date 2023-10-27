import React, { useState } from 'react';
import "./Board.css";
import { useSelector, useDispatch } from 'react-redux';
import Postcard from '../Post/Postcard';
import Addpostcard from '../Post/Addpostcard';
import Modal from "../ReUsable/Modal";
import DropZone from '../DragnDrop/DropZone';

const Board = (props) => {
    const boardsData = useSelector((state) => state.board);
    const { title } = props;
    const dispatch = useDispatch();
    const filteredPosts = Object.values(boardsData).filter(board => board.title === title.replace(/\s/g, '').toLowerCase());
    // console.log("meet", boardsData);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const dropHandler = (target, element) => {
        console.log(target, element);
        dispatch({
            type: 'REARRANGE_TASK',
            payload: { target, element },
        });

    };

    return (
        <div className="boardbox">
            <div className="boxhead">
                {title}
            </div>
            {
                filteredPosts.length === 0 ? (
                    <div
                        style={{ position: "relative", padding: "1px 0px 1px 0px" }}
                    >
                        <DropZone
                            data={{ path: null, title: title.replace(/\s/g, '').toLowerCase() }}
                            onDrop={(data, item) => {
                                dropHandler(data, item);
                            }}
                        />
                        <Postcard description="Empty" />
                    </div>
                ) :
                    <div className="postscard">
                        {
                            filteredPosts.map((posts) => {
                                return (<div style={{ position: "relative" }} className="postcarrdcsss" key={posts.boardid}>
                                    <DropZone
                                        data={{ path: posts.boardid, title: title.replace(/\s/g, '').toLowerCase() }}
                                        onDrop={(data, item) => {
                                            dropHandler(data, item);
                                        }}
                                    />
                                    <Postcard boardid={posts.boardid} title={posts.title} description={posts.description} img={posts.img} date={posts.date} posts={posts} /></div>)
                            })
                        }
                    </div>
            }
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
