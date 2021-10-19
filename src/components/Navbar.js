import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


function Navbar() {
    return (
        <div>
            <nav style={{ display: "flex" , justifyContent:"space-between" , alignItems:"center" }} >
                <h1>Hello world</h1>
                <ul style={{ display: "flex" , justifyContent:"space-between" , width:"50%"  }}>
                    <li className="navbar-list">
                        <Link className="navbar-link" to="/home">Home</Link>
                    </li>
                    <li className="navbar-list">
                        <Link className="navbar-link" to="/contect">Contect</Link>
                    </li>
                    <li className="navbar-list">
                        <Link className="navbar-link" to="/about">About</Link>
                    </li>
                    <li className="navbar-list">
                        <Link className="navbar-link" to="/signup">Signup</Link>
                    </li>
                    <li className="navbar-list">
                        <Link className="navbar-link" to="/signin">Signin</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar
