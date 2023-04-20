import "../App.css";

import NavBar from "../components/NavBar";
import BgImage from "../images/test.jpg"
import EditPencil from "../icons/pencil-ui-2-svgrepo-com.svg"

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import axios from "axios"


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const history = useNavigate();
    const [playgrounds, setPlaygrounds] = useState([]);
    // const data = ["Dog", "Bird", "Cat"];

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
                                <div className="blogs" key={i}>
                                    <img src={BgImage} className="blog-bg" alt="BlogPhoto" />
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