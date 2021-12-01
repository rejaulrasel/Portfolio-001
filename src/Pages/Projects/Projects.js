import React from 'react';
import useProjects from '../../Hooks/useProjects';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from './Project/Project';

const Projects = () => {
    const {projects} = useProjects()
    return (
        <div>
            <Header></Header>
            <div className="container">
           {
                projects.map(project => <Project
                key={project.id}
                project={project}
                ></Project>)

            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Projects;