import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="pt-28">
            <h1 className="font-extrabold text-5xl text-center p-5">About me</h1>
            <p className="text-center"> <Link to='https://drive.google.com/file/d/1mdVocqjaMzjD0Mrq4E9rE9Adi-7JHWdE/view?usp=sharing' className='btn btn-outline btn-accent'>Download Resume</Link></p>
        </div>
    );
};

export default About;