import React from 'react';
import useProjects from '../../../Hooks/useProjects';

const HomeProjects = () => {
    const {projects} = useProjects()
    console.log(projects)
    return (
        <div>
            
        </div>
    );
};

export default HomeProjects;