import "../App.css";
import Logo from "../icons/application-coding-terminal-svgrepo-com.svg";
import AboutLogo from "../icons/about-filled-svgrepo-com.svg"
import GithubCircle from "../icons/github-circle-svgrepo-com.svg"
import SumithLogo from "../images/sumith-logo.png"
import userphoto from "../icons/user.png"
import UserAlt from "../icons/user-alt-svgrepo-com.svg"
import HomeLogo from "../icons/home-svgrepo-com.svg"

import HeartCircle from "../icons/heart-circle-svgrepo-com.svg"

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { Link } from 'react-router-dom'



const NavBar = () => {
    const [user, loading] = useAuthState(auth);
    const history = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) history("/coding-playground")
    }, [user, loading, history]);
    return (

        <div>
            <main className="flex items-center justify-between p-6">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <nav className="flex navbar-shadow align-middle fixed  left-0 top-0  w-full  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-200 ">
                        <div className='site-name text-4xl'>
                            <img
                                src={Logo}
                                alt="Logo"
                                className="dark:invert"
                                width={50}
                                height={20}
                            />
                            <span> Coding&nbsp;</span>
                            <span className="font-bold">Playground</span>
                        </div>
                        <div className="links">
                            <ul>
                                <li >
                                    <Link to={'/dashboard'}>
                                        <div className='flex'>
                                            <img src={HomeLogo} alt="about" /><span>Home</span>
                                        </div>
                                    </Link>
                                </li>

                                <li >
                                    <div className="dropdown1">
                                        <div className='flex'>
                                            <img src={GithubCircle} alt="developers" /><span className="developers">Developers</span>
                                        </div>
                                        <div className="dropdown1-content">
                                            <div className="devr">
                                                <a href="https://github.com/sumithemmadi">
                                                    <div className='flex align-middle'><img src={SumithLogo} alt="developers" /><span> Sumith Emmadi</span></div>
                                                </a>
                                                <a href="https://github.com/sumithemmadi">
                                                    <div className='flex'><img src={UserAlt} alt="developers" /><span> Gaddamalla Ramana</span></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div className="dropdown1">
                                        <span className="developers flex"><img src={UserAlt} alt="user profile" />User profile</span>
                                        <div className="dropdown1-content">
                                            <div className="devr">
                                                <div className="profile-info">
                                                    <img className="profile-pic" src={!user ? userphoto : user.photoURL} alt="developers" />
                                                    <p>{!user ? "Unknown name" : user.displayName}</p>
                                                    <p>Email : {!user ? "Unknown Email" : user.email}</p>
                                                </div>
                                                {/* <hr></hr>
                                                <a href="/blogs"><img src={Logo} alt="developers" /> Blogs &#40; 5 &#41;</a>
                                                <hr></hr>
                                                <a href="/draft"><img src={DraftedImg} alt="developers" /> Drafted Blogs &#40; 5 &#41;</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div className='flex'>
                                        <img src={HeartCircle} className="contribute" alt="Contribute us" /><span>Contribute us</span>
                                    </div>
                                </li>
                                <li >
                                    <div className='flex'>
                                        <img src={AboutLogo} alt="about" /><span>About</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="button login-btn" onClick={logout} style={{ backgroundColor: "rgb(32, 35, 33)", color: "white", gap: 10 }} >
                            <img src={!user ? userphoto : user.photoURL} alt="user logo" className="user-logo" style={{ width: 30, borderRadius: "50%" }} />
                            <span> Logout</span>
                        </button>
                    </nav>
                </div>
            </main>
        </div>
    )
};

export default NavBar;