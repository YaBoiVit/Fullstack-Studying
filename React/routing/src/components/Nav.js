import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './NavCss.css'

function Nav() {
    const [currentPage, setcurrentPage] = useState(1)
return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className={currentPage == 1 ? "nav-item active" : "nav-item"} onClick={()=>setcurrentPage(1)}> <Link to='/'> Home </Link> </li>
    <li className={currentPage == 2 ? "nav-item active" : "nav-item"} onClick={()=>setcurrentPage(2)}> <Link to='/about' className='p-2'> About </Link> </li>
    <li className={currentPage == 3 ? "nav-item active" : "nav-item"} onClick={()=>setcurrentPage(3)}> <Link to='/contact'> Contact </Link> </li>
    </ul>
</div>
</nav>
    </div>
)
}

export default Nav