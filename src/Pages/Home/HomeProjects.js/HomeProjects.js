import React from 'react';
import useProjects from '../../../Hooks/useProjects';
import Project from '../../Projects/Project/Project';

const HomeProjects = () => {
    const {projects} = useProjects()
    console.log(projects)
    return (
        <div>
            <div className="text-center">
                <h1 className='text-light mb-5'>My Recent works</h1>
            </div>
           <div className="container">
           {
                projects.slice(0,3).map(project => <Project
                key={project.id}
                project={project}
                ></Project>)

            }
           </div>
            
        </div>
    );
};

export default HomeProjects;