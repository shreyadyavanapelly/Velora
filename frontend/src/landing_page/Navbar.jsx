import React,{useState,useEffect} from 'react';
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function Navbar() {
    const navigate=useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        axios.post("http://localhost:5000/verify",{},{withCredentials:true})
        .then(()=>{
            setIsLoggedIn(true);
        })
        .catch(()=>{
            setIsLoggedIn(false);
        })
    },[]);
    const handlelogout =async()=>{
        try{
            await axios.get("http://localhost:5000/logout",{
                withCredentials:true,
            });
            setIsLoggedIn(false);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
            <div class="container-fluid d-flex ">
                <Link class="navbar-brand" to="/"><img src={logo} alt="Logo" height="20"/></Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        {isLoggedIn ?(
                            <li class="nav-item me-4">
                            <Link class="nav-link" to="#" onClick={handlelogout}>Logout</Link>
                        </li>  
                        ):(
                            <>
                        <li class="nav-item me-4">
                            <Link class="nav-link" to="/signup">Signup</Link>
                        </li>  
                        <li class="nav-item me-4">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li> 
                        </>
                        )}
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