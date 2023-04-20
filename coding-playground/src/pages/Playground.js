import NavBar from '../components/NavBar'
import * as React from 'react'
import "./Playground.css"
import HtmlLogo from "../icons/HTML5_Logo.webp"
import NodejsImage from "../icons/nodejs.webp"
import TypescriptLogo from '../icons/Typescript_logo_2020.svg'
import ReactLogo from '../icons/react.webp'
import PythonLogo from "../icons/python.webp"
import axios from 'axios';

export default function PlaygroundPage() {
    const [open, setOpen] = React.useState(false);
    const [selectActive, setSelectActive] = React.useState({
        goto: "website",
        name: "HTML/CSS",
        desc: "Vanilla HTML/CSS/JS playground",
        image: HtmlLogo
    });

    const [value, setValue] = React.useState("My Playground");
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    function handle() {

        var body = {
            id: makeid(20),
            goto: selectActive.goto,
            name: selectActive.name,
            playground_title: value,
            description: selectActive.desc,
        };

        // console.log(body)
        var customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://localhost:5000/api/post', JSON.stringify(body), customConfig)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    var select_lang = {
        hcj: {
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

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <NavBar />
            <div className="fixed inset-0 z-[100] overflow-y-auto" id="mobile-scrollable" role="dialog" data-headlessui-state="open">
                <div className="flex min-h-screen items-center justify-center text-center" id="headlessui-dialog-panel-:r3f:" data-headlessui-state="open">
                    <div className="fixed inset-0 bg-black/90 opacity-100" id="headlessui-dialog-overlay-:r3g:" data-headlessui-state="open"></div>
                    <div className="inline-block w-full transform rounded-md text-left align-middle shadow-xl transition-all max-w-xl overflow-visible bg-white p-4 opacity-100 scale-100">
                        <h3 className="mb-4 border-b-2 border-gray-300 pb-2 font-semibold text-gray-600">Create A Playground</h3>
                        <div className="flex w-full flex-col gap-4 sm:flex-row">
                            <div className="flex-1">
                                <span className="block font-medium text-gray-700">Select Programming Language</span>

                                <div className="z-50 mt-1">
                                    <button className="h-full w-full cursor-default rounded-lg border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 sm:text-sm" id="headlessui-listbox-button-:r3h:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" onClick={handleOpen}>
                                        <span className="block truncate">
                                            <span className="flex items-center justify-center font-semibold">
                                                <React.Fragment>
                                                    <span className="flex items-center pl-3 pr-2 text-amber-600">
                                                        <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={selectActive.image} style={{ "color": "transparent" }} />
                                                    </span>
                                                    <span>{selectActive.name}</span>
                                                    {open ? (
                                                        <ul className="menu">
                                                            {Object.keys(select_lang).map((key, i) => (
                                                                <li className=" flex menu-item" key={i} onClick={() => setSelectActive(select_lang[key])}>
                                                                    <span className="flex items-center pl-3 pr-2 text-amber-600">
                                                                        <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src={select_lang[key].image} style={{ "color": "transparent" }} />
                                                                    </span>
                                                                    <span>{select_lang[key].name}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : null}
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="h-5 w-5 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </React.Fragment>
                                            </span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="h-5 w-5 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="mt-4 w-full rounded-sm bg-gray-100 p-1 py-6 shadow-md">
                                    <div className="mx-2 flex space-x-2">
                                        <div className="flex-shrink-0 rounded bg-white p-2 shadow"><img alt="playground icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" src={selectActive.image} style={{ "color": "transparent" }} /></div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold">{selectActive.name}</h3>
                                            <p className="text-xs">{selectActive.name} template</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 px-2 text-left text-sm">{selectActive.desc}</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <label htmlFor="title" className="block font-medium text-gray-700">Playground Title</label>
                                <div className="mt-1"><input id="title" type="text" placeholder="Enter Playground Title" required="" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50 sm:text-sm" defaultValue={value} /></div>
                                <p className="mt-3 text-sm text-gray-700">Give it a nice name like, <br /><span className="font-semibold italic text-orange-500">my-awesome-project</span></p>
                            </div>
                        </div>
                        <button data-testid="create-snippet-btn" className="group mt-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50" onClick={handle} onChange={(e) => { setValue(e.target.value) }}>
                            <span>
                                Create Playground
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}