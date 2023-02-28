import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiFillCodepenCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";


export default function CodedBy () {

    return (
        <div className="flex items-center justify-around p-4" >
            <h1 >Coded by <a href="https://carlosmario-pro.github.io/My-Portfolio/" className="text-blue-400">Carlos Mario</a> </h1>
            <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedin className="text-5xl" /></a>
            <a href="https://codepen.io/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><AiFillCodepenCircle className="text-5xl" /></a>
            <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><FaGithub className="text-5xl" /></a>
            <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><BsPinterest className="text-5xl" /></a>
        </div>
    );
};