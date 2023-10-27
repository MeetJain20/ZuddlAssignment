import React, { useState } from 'react';
import "./Addpostcard.css";
import { useSelector, useDispatch } from 'react-redux';

const Addpostcard = (props) => {
    const { title, description, boardid, closeModal, type, img } = props;
    console.log(img);
    const [image1, setImage1] = useState(img);
    const [desc, setDesc] = useState(description);
    const dispatch = useDispatch();
    const onImageChange = (event) => {
        event.preventDefault();

        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
        }
    };

    const boardDetails = useSelector(state =>
        state.board.filter(board => board.title.toLowerCase() === title.replace(/\s/g, '').toLowerCase())
    );
    console.log(boardDetails);
    const maxBoardId = useSelector(state =>
        state.board.length > 0
            ? state.board.reduce((maxBoard, currentBoard) => (
                maxBoard.boardid > currentBoard.boardid ? maxBoard : currentBoard
            ), { boardid: -Infinity }).boardid
            : 0
    );

    const nextBoardId = maxBoardId + 1;

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
        const [month, day] = formattedDate.split(' ');
        return `${day} ${month}`;
    };

    const addnewpostHandler = () => {
        const today = new Date();
        const formattedDate = formatDate(today);
        const boardDetails1 = boardDetails.find(board => board.boardid === boardid)
        if (!boardDetails1) {
            const newPostId = nextBoardId;
            const newPost = {
                boardid: newPostId,
                title: title.replace(/\s/g, '').toLowerCase(),
                description: desc,
                img: image1,
                date: formattedDate,
            };
            console.log(newPost);
            dispatch({
                type: 'ADD_NEW_POST',
                payload: newPost,
            });
        }
        else {
            const newPost = {
                boardid: boardDetails1.boardid,
                description: desc,
                img: image1,
            };

            dispatch({
                type: 'EDIT_POST',
                payload: newPost,
            });
        }
        closeModal();
    }

    return (
        <div className="addpostcontainer">

            {type === "addpost" && (<><div className="titleofpost">
                Post for
            </div>

                <div className="titleforpost">
                    <input type="text" className="descinputpost" placeholder="Title.." value={title} readonly />
                </div>
            </>)}
            <div className="addimagebox">
                <label className="addyourimage my-2">
                    <input
                        type="file"
                        className="addPict"
                        onChange={onImageChange}
                    />
                    Add your image
                </label>
                {image1 ?
                    <div className="tempimg">
                        <img src={image1} alt="selected_image" className="tempimg1" />
                    </div> : (<div></div>)}
            </div>
            <div className="descofpost">
                Description
            </div>
            <div className="descforpost">
                <input type="text" className="descinputpost" placeholder="Add Description.." value={desc} onChange={(e) => { setDesc(e.target.value) }} />
            </div>
            <div className="addpostbuttonn">
                <button className="addpostbuttonnew" onClick={addnewpostHandler} disabled={desc ? false : true}>
                    {type === "addpost" ? "Add Post" : "Edit Post"}
                </button>
            </div>
        </div>

    )
}

export default Addpostcard
