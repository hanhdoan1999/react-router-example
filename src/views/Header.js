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

            <div>
                {/* <div className="nav">
                <Link to="/"> Login / </Link>
                <Link to="/admin/list-survay">List Survay /</Link>
                <Link to="/admin/add-user"> Add User / </Link>
                <Link to="/admin/list-user"> List User / </Link>
                <Link to="/admin/notification"> Notification / </Link>
                <Link to="/admin/add-question"> AddQuestion / </Link>
                <Link to="/admin/list-question"> ListQuestion / </Link>
                <div className={displayLogout}>
                <Button onClick={handleLogout}>Log out</Button>
                </div>
                </div> */}
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse">
    {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
    <ul class="navbar-nav m-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Logout</button>
    </form>
  </div>
</nav>
            </div>


            
            

    )
}
export default Header
