import React from "react";
import { Link, useHistory, useRouteMatch, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'

function Header() {

    let history = useHistory();
    let match = useRouteMatch();
    // console.log(match);

    const active = {color: "#fff"};



    const handleLogout = () =>{
        localStorage.removeItem("accessToken")
        history.replace('/')
    }

    const displayLogout = localStorage.getItem("accessToken") ? "d-flex align-items-center" : "d-none"

    return (
<div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav m-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink exact  activeStyle={active} className="nav-link" to="/login"> Login </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={active} className="nav-link" to="/admin/add-user" > Add User </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={active} className="nav-link" to="/admin/list-user"> List User </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={active} className="nav-link" to="/admin/notification"> Notification </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={active} className="nav-link" to="/admin/add-question"> AddQuestion </NavLink>
        </li>
        <li className="nav-item">
        <NavLink  activeStyle={active} className="nav-link" to="/admin/list-question"> ListQuestion </NavLink>
        </li>
      </ul>
      <div className={displayLogout}>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </nav>
</div>


            
            

    )
}
export default Header
