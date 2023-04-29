
import "./Home.css";
import Logo from "../icons/application-coding-terminal-svgrepo-com.svg";
import G_logo from "../icons/icons8-google.svg";
import AboutLogo from "../icons/about-filled-svgrepo-com.svg"
import GithubCircle from "../icons/github-circle-svgrepo-com.svg"
import UserAlt from "../icons/user-alt-svgrepo-com.svg"
import HeartCircle from "../icons/heart-circle-svgrepo-com.svg"
import SumithLogo from "../images/sumith-logo.png"

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, LoginInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);
    return (
        <div className="App2">
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
                                priority
                            />
                            <span> Coding&nbsp;</span>
                            <span className="font-bold">Playground</span>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <div className='flex'>
                                        <img src={AboutLogo} alt="about" /><span>About</span>
                                    </div>
                                </li>
                                <li>
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
                                <li>
                                    <div className='flex'>
                                        <img src={UserAlt} alt="Contact us" /><span>Contact us</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img src={HeartCircle} className="contribute" alt="Contribute us" /><span>Contribute us</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="button" onClick={LoginInWithGoogle}  >
                            Sign in
                        </button>
                    </nav>
                </div>
            </main>
            <div className="App-home">
                <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    <div className="home-message">
                        <p className='font-bold' style={{ fontSize: "35px" }}>JavaScript playground and sandbox to write</p>
                        <p className="smalltext" style={{ color: "gray", fontSize: "20px" }}>JavaScript playground is perfect for learning and prototyping javascript sandboxes</p>
                        <br></br>
                        <div className="btn-class">
                            <button className="button">
                                View Demo
                            </button>
                            <button className="button login-btn" onClick={LoginInWithGoogle} >
                                <img src={G_logo} alt="google logo" className="google-logo" />
                                <span>Sign in with google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className=" mb-3 text-2xl font-semibold">
                        Docs{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className=" m-0 max-w-[30ch] text-sm opacity-50"
                    >
                        Find in-depth information about Next.js features and API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Learn{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className=" m-0 max-w-[30ch] text-sm opacity-50"
                    >
                        Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className=" mb-3 text-2xl font-semibold">
                        Templates{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className="m-0 max-w-[30ch] text-sm opacity-50"
                    >
                        Explore the Next.js 13 playground.
                    </p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Deploy{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className=" m-0 max-w-[30ch] text-sm opacity-50"
                    >
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Home;