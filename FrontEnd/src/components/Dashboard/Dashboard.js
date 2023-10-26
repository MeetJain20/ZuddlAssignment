import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Dashboard.css";
import Board from '../Board/Board';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="dashcontainer">
                <Board title = "Resources"/>
                <Board title = "To Do"/>
                <Board title = "Doing"/>
                <Board title = "Done"/>
            </div>
        </>
    )
}

export default Dashboard
