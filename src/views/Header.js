import React from "react";
import { Link, useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap'

function Header() {

    let history = useHistory();

    const handleLogout = () =>{
        localStorage.removeItem("accessToken")
        history.replace('/')
    }

    const displayLogout = localStorage.getItem("accessToken") ? "d-flex align-items-center" : "d-none"

    return (

            <div className="nav-wrap">
                <div className="nav">
                <Link to="/"> Login / </Link>
                <Link to="/admin/list-survay">List Survay /</Link>
                <Link to="/admin/add-user"> Add User / </Link>
                <Link to="/admin/list-user"> List User / </Link>
                <Link to="/admin/notification"> Notification / </Link>
                <Link to="/admin/add-question"> AddQuestion / </Link>
                <Link to="/admin/list-question"> ListQuestion / </Link>
                {/* <Link to="/detail-question"> DetailQuestion / </Link> */}
                <div className={displayLogout}>
                <Button onClick={handleLogout}>Log out</Button>
                </div>
                </div>
            </div>

    )
}
export default Header
