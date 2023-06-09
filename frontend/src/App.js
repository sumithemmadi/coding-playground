import './App.css';
import './components/styles.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoPage from './pages/NoPage';
import PlaygroundPage from './pages/Playground';
import Hcj from './languages/HtmlCssJs';
import NodejsPlayground from './languages/Node';
import TypescriptPlayground from './languages/typescript';
import PythonPlayground from './languages/Python';
import ReactPlayground from './languages/React';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/coding-playground" Component={Home} />
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/playground" Component={PlaygroundPage} />
        <Route exact path="/playground/website/:id" Component={Hcj} />
        <Route exact path="/playground/nodejs/:id" Component={NodejsPlayground} />
        <Route exact path="/playground/typescript/:id" Component={TypescriptPlayground} />
        <Route exact path="/playground/react/:id" Component={ReactPlayground} />
        <Route exact path="/playground/python/:id" Component={PythonPlayground} />
        <Route exact path="*" Component={NoPage} />
      </Routes>
    </BrowserRouter>
  );
}