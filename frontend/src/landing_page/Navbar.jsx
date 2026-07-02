import React from 'react';
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
            <div class="container-fluid d-flex ">
                <Link class="navbar-brand" to="/"><img src={logo} alt="Logo" height="20"/></Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-4">
                            <Link class="nav-link" to="/signup">Signup</Link>
                        </li>  
                         <li class="nav-item me-4">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>  
                         <li class="nav-item me-4">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>  
                         <li class="nav-item me-4">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>  
                         <li class="nav-item me-4">
                            <Link class="nav-link" to="/support">Support</Link>
                        </li>  
                    </ul>
                    <li class="nav-item dropdown "  style={{ listStyleType: 'none' }}>
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
          </a>
          <ul class="dropdown-menu" >
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;