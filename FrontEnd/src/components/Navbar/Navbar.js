import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navcontainer">
            <div className="leftside">
                <div className="leftitem1">
                    <div className="leftsidebox">
                        <div className="titlename">
                            Taco's Tacos
                        </div>
                        <i className="fa-regular fa-star icon"></i>
                    </div>
                </div>
                <div className="leftitem">
                    <div className="leftsidebox">
                        <i className="fa-brands fa-wolf-pack-battalion icon"></i>
                        <div className="iconname">
                            Taco & Co.
                        </div>
                    </div>
                </div>
                <div className="leftitem">
                    <div className="leftsidebox">
                        <i className="fa-solid fa-user-group icon"></i>
                        <div className="iconname">
                            Team Visible
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside">
                <i className="fa-solid fa-ellipsis"></i>
                <div className="rightmenu">
                    Show Menu
                </div>
            </div>
        </div>
    )
}

export default Navbar
