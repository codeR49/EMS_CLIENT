import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import avtar from "../../image/default-avatar-profile-icon-vector-18942381.png"
// import { Redirect,Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/Auth';
function Sidebar() {
    const auth = useAuth()
    let navigate = useNavigate();
    const logoutHnadler = (e) =>{
           auth.logout()
        //    localStorage.clear();
           
           navigate("/");
   }
  return (
    <div className="sidebar">
    
    <div class="profile">
                <img src={avtar}alt="profile_picture"/>
                <h3>{localStorage.getItem("name")}</h3>
                <p>{localStorage.getItem("designation")}</p>
            </div>
    <div className="sidebar-center">
        <ul className="list">
           
           <Link to="/engineer/form" className='Link'> <li className="list-item">
                <i className="list-item-icon fa fa-plus"></i>
                
                <span className="list-item-text">Add Data</span>
            </li></Link>
           
        </ul>
    </div>
    <div className="sidebar-bottom">
       <ul className='list'>
       <li className="list-item">
            <Link to="/" className='Link'>
            <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text" onClick={logoutHnadler}>logout</span>
            </Link>
            </li>
       </ul>
    </div>
</div>
  )
}

export default Sidebar