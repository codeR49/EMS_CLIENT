import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/Auth';
import avtar from "../../image/default-avatar-profile-icon-vector-18942381.png"
import "./Adminsidebar.css"

function Adminsidebar() {
    const auth = useAuth()
    let navigate = useNavigate()
    const logoutHnadler = (e) =>{
          //  localStorage.clear();
           auth.logout()
           navigate("/");
   }
  return (
    <div className="sidebar1">
   <div class="profile">
                <img src={avtar}alt="profile_picture"/>
                <h3>{localStorage.getItem("name")}</h3>
                <p>{localStorage.getItem("designation")}</p>
            </div>
    <div className="sidebar-center">
        <ul className="list">
        <Link to='/admin/viewdata' className='Link'>
            <li className="list-item">
     
              <i className="list-item-icon fas fa-file"></i>
                <span className="list-item-text">View Data</span>

              
            </li>
            </Link>
        </ul>
    </div>
    <div className="sidebar-bottom">
       <ul className='list'>
       <Link to="/" className='Link' >
       <li className="list-item">
           
                <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text" onClick={logoutHnadler}>logout</span>
              
            </li>
            </Link>
       </ul>
    </div>
</div>
  )
}

export default Adminsidebar