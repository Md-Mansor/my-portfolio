import { Link } from "react-router-dom";
import react from '../../assets/react.png'
import express from '../../assets/express.png'
import mongo from '../../assets/mongo.png'
import api from '../../assets/api.png'
import git from '../../assets/git.png'
import cmd from '../../assets/cmd.png'
import npm from '../../assets/npm.png'
import problems from '../../assets/problems.png'
import visual from '../../assets/Visual .png'


const Skill = () => {
    return (
        <div className="pt-28">
            <h1 className="font-extrabold text-5xl text-center mt-2">Emerging MERN Stack Developer Crafting Innovative Web Solutions at the Beginner Level</h1>
            <div className="lg:grid grid-cols-2  mx-auto gap-5 justify-center p-10">
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to='https://react.dev/'><img src={react} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Front-end Development (React.js):</h1>
                    <p className="font-medium text-lg">1. Proficient in building interactive user interfaces using React.js.</p>
                    <p className="font-medium text-lg">2. Understanding of React components, state, and props.</p>
                    <p className="font-medium text-lg">3. Knowledge of JSX syntax and its integration with JavaScript.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to='https://expressjs.com/'><img src={express} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Back-end Development (Node.js and Express.js):</h1>
                    <p className="font-medium text-lg">1. Basic understanding of Node.js and its event-driven architecture.</p>
                    <p className="font-medium text-lg">2. Ability to create server-side applications using Express.js.</p>
                    <p className="font-medium text-lg">3. Handling routes, middleware, and HTTP requests on the server.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to='https://account.mongodb.com/'><img src={mongo} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Database (MongoDB):</h1>
                    <p className="font-medium text-lg">1. Familiarity with MongoDB as a NoSQL database.</p>
                    <p className="font-medium text-lg">2. Basic CRUD operations using Mongoose (or other MongoDB libraries).</p>
                    <p className="font-medium text-lg">3. Understanding of schema design and data modeling.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to=''><img src={api} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">API Development:</h1>
                    <p className="font-medium text-lg">1. Building RESTful APIs using Express.js.</p>
                    <p className="font-medium text-lg">2. Handling API requests and responses, and understanding HTTP methods.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to='https://github.com/'><img src={git} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Version Control:</h1>
                    <p className="font-medium text-lg">1. Basic proficiency with Git for version control.</p>
                    <p className="font-medium text-lg">2. Understanding of branching, committing, and merging code changes.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to=''><img src={cmd} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Command Line:</h1>
                    <p className="font-medium text-lg">1. Comfortable navigating and using the command line for basic tasks.</p>
                    <p className="font-medium text-lg">2.Running scripts, managing dependencies, and starting servers.</p>
                </div >
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to=''><img src={npm} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Package Management:</h1>
                    <p className="font-medium text-lg">1. Using npm (Node Package Manager) for installing and managing project dependencies.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to=''><img src='' alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Basic Front-end Styling:</h1>
                    <p className="font-medium text-lg">1. Familiarity with CSS for styling web applications.</p>
                    <p className="font-medium text-lg">2. Understanding of responsive design principles.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to=''><img src={problems} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Problem Solving:</h1>
                    <p className="font-medium text-lg">1. Developing problem-solving skills to debug and troubleshoot issues in code.</p>
                </div>
                <div className="border-4 rounded-md m-5 p-5">
                    <Link to='https://code.visualstudio.com/'><img src={visual} alt="" className="w-24" /></Link>
                    <h1 className="font-bold text-xl">Development Tools:</h1>
                    <p className="font-medium text-lg">1. Familiarity with code editors like Visual Studio Code.</p>
                    <p className="font-medium text-lg">2. Debugging tools and extensions for efficient development.</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;