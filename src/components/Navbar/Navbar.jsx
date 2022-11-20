import React, { useEffect, useState } from 'react'
import user from "../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [accessBtn, setAccessBtn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      setAccessBtn(false);
    }
  })
  const handleUserClick = () => {
    setUserClicked(!userClicked);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setAccessBtn((previous) => {
      return !previous
    });
  };

  const handleLogin = () => {
    navigate("/admin/logadmin", { replace: true })
  }
  const handleRegister = () => {
    navigate("/admin/addadmin", { replace: true })
  }

  return (
    <>
      <nav>
        <h1 onClick={() => { navigate("/admin", { replace: true }) }}>Dashboard</h1>
        {!accessBtn ? <div className="nav-links">
          <a href="/admin/addProduct" className="link">
            Add Product
          </a>
          <a href="/admin/scheduler" className="link">
            Meeting Scheduler
          </a>
          <a href="/admin/chatroom" className="link">
            Chat Room
          </a>
          <a href="/admin/addBlog" className="link">
            Add Blog
          </a>
          <a href="/admin/userdetail" className="link">
            User Details
          </a>
        </div> : <></>}
        <div className="user-options">

          {accessBtn ? <div>
            <button className="logout-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="logout-btn" onClick={handleRegister}>
              Register
            </button>
          </div>
            :
            <div>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>}
          <div className="profile">
            <img
              src={user}
              alt=""
              className="user-img"
              onClick={handleUserClick}
            />
            <div
              className={userClicked ? "user-menu" : "user-menu-close"}
            ></div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
