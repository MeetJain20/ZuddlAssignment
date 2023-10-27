import React, { useState, useRef, useEffect } from 'react';
import "./Postcard.css";
import Modal from '../ReUsable/Modal';
import Threedots from "../../assets/DotsVerticalOutlined.svg";
import Editlogo from "../../assets/PencilLineOutlined.svg";
import Deletelogo from "../../assets/Delete.svg";
import { useDispatch, useSelector } from 'react-redux';
import Addpostcard from './Addpostcard';
import { useDrag } from "react-dnd";


const Postcard = (props) => {
    const style = {
        position: "relative",
    };
    const { boardid, title, description, img, date, posts } = props;
    const [funccss, setFunccss] = useState("none");
    const dispatch = useDispatch();
    const clickBoxRef = useRef(null);

    const dragRef = useRef(null);
    const [opacity, setOpacity] = useState(1);
    const [{ isDragging }, ref] = useDrag(
        () => ({
            type: "component",
            item: { type: "component", path: boardid, title: title },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [posts]
    );
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const functionalityHandler = () => {
        if (funccss === "none") {
            setFunccss("block");
        }
        else {
            setFunccss("none");
        }
    }
    const deletepostHandler = () => {
        const newBoard = {
            boardId: boardid,
            title: title,
        };

        dispatch({
            type: 'DELETE_POST',
            payload: newBoard,
        });
        setFunccss("none");
    }
    useEffect(() => {
        if (isDragging) {
            setOpacity(0.5);
        } else {
            setOpacity(1);
        }
    }, [isDragging]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickBoxRef.current && !clickBoxRef.current.contains(event.target)) {
                setFunccss("none");
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    ref(dragRef);

    return (
        <div ref={dragRef} style={{ ...style, opacity }} >

            {img && <div className="postimg">
                <img src={img} alt="Loading" className="postimggg" />
            </div>}
            {description !== "Empty" && <><div className="editpostdetails" onClick={functionalityHandler}>
                <img src={Threedots} alt="three_dots" />
            </div>
                <div className="functionality" style={{ display: `${funccss}` }} ref={clickBoxRef}>
                    <div className="editbutton" onClick={() => {
                        openModal()
                        setFunccss("none");
                    }}>
                        <div className="editicon">
                            <img src={Editlogo} alt="edit_logo" />
                        </div>
                        <div className="editname">
                            Edit
                        </div>
                    </div>
                    <div className="deletebutton" onClick={deletepostHandler}>
                        <div className="deleteicon">
                            <img src={Deletelogo} alt="delete_logo" />
                        </div>
                        <div className="deletename">
                            Delete
                        </div>
                    </div>
                </div></>}
            <div className="postdesc">
                {description}
            </div>
            {description !== "Empty" &&
                <div className="postdate">
                    <i className="fa-regular fa-clock"></i>
                    <span>
                        {date}</span>
                </div>
            }
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <Addpostcard boardid={boardid} type="editpost" title={title} closeModal={closeModal} description={description} img={img} />
            </Modal>
        </div>
    )
}

export default Postcard
