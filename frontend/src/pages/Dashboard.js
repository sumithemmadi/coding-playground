import "../App.css";

import NavBar from "../components/NavBar";
import EditPencil from "../icons/pencil-ui-2-svgrepo-com.svg"

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import axios from "axios"

import HtmlLogo from "../icons/HTML5_Logo.svg"
import NodejsImage from "../icons/nodejs-new-pantone-black.svg"
import TypescriptLogo from '../icons/Typescript_logo_2020.svg'
import ReactLogo from '../icons/React-icon.svg'
import PythonLogo from "../icons/Python-logo-notext.svg"


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const history = useNavigate();
    const [playgrounds, setPlaygrounds] = useState([]);

    const plang = {
        website: {
            goto: "website",
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            image: HtmlLogo
        },
        nodejs: {
            goto: "nodejs",
            name: "Node.js",
            desc: "Nodejs playground",
            image: NodejsImage
        },
        typescript: {
            goto: "typescript",
            name: "Typescript",
            desc: "Typescript playground",
            image: TypescriptLogo
        },
        react: {
            goto: "react",
            name: "React JS",
            desc: "React.js  playground",
            image: ReactLogo
        },
        python: {
            goto: "python",
            name: "Python",
            desc: "Python playground",
            image: PythonLogo
        },
    }
    useEffect(() => {
        if (loading) return;
        if (!user) history("/coding-playground")
    }, [user, loading, history]);

    useEffect(() => {
        async function getData() {
            const res = await axios({
                url: 'http://localhost:5000/api/getAll',
                method: 'get',
            })
            setPlaygrounds(res.data);
        }
        getData();
    }, []);
    return (
        <div className="App">
            <div className='site-container'>
                <div className="main">
                    <div className="home_session1">
                        <NavBar />
                        <div className="App-blogs" >
                            <Link to={'/playground'}>
                                <div className="blogs" >
                                    <div className="new-doc-btn" id="mydiv">+</div>
                                </div>
                            </Link>
                            {playgrounds?.map((pg, i) => (
                                <div className="blogs" key={i} onClick={() => history(`/playground/${pg.goto}/${pg.id}`)}>
                                    <img src={plang[pg.goto].image} className="blog-bg border-2 border-neutral-400 p-6" alt="BlogPhoto" />
                                    <div className="blog-info">
                                        <h1>{pg.playground_title}</h1>
                                        <p>{pg.description}</p>
                                    </div>
                                    <div className="BlogEditButton" id="mydiv">
                                        <button className="BlogEdit">
                                            <img src={EditPencil} alt="edit" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;