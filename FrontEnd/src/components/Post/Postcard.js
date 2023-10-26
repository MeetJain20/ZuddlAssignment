import React from 'react';
import "./Postcard.css";

const Postcard = (props) => {
    const { description, img, date } = props;
    return (
        <div className="postcontainer">
            {img && <div className="postimg">
                <img src={img} alt="Loading" className="postimggg" />
            </div>}
            <div className="postdesc">
                {description}
            </div>
            <div className="postdate">
                {date}
            </div>
        </div>
    )
}

export default Postcard
