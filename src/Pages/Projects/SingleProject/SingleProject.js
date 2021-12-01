import React, { useState, useEffect } from 'react';
import './SingleProject.css'
import { useParams } from 'react-router';
import useProjects from './../../../Hooks/useProjects';
import Header from '../../Header/Header';
import './SingleProject.css'
import Footer from '../../Footer/Footer';
const SingleProject = () => {
    const { id } = useParams()
    const [projects, setProjects] = useState([])
    const [singleProject, setSingleProject] = useState({})
    useEffect(() => {
        fetch('/projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects)
    console.log(singleProject)
    useEffect(() => {
        const foundProject = projects.find(project =>
            project.id == id)
        setSingleProject(foundProject)
    }, [projects, id])
    return (
        <div className='text-light'>
            <Header></Header>
            <div className='container'>
                <h1 className='text-center'>Contingents</h1>
                <div data-aos='zoom-out' className="row mb-3 gy-4 ">
                    <div className="col-md-4 col-12">
                        <img className='img-fluid' src={singleProject?.img1} alt="" />
                    </div>
                    <div className="col-md-4 col-12">
                        <img className='img-fluid' src={singleProject?.img2} alt="" />
                    </div>
                    <div className="col-md-4 col-12">
                        <img className='img-fluid' src={singleProject?.img3} alt="" />
                    </div>
                </div>

                <div data-aos='zoom-out-up' className='p-5' style={{ 'backgroundColor': '#172a45' }}>
                    <h1 className='text-center'>{singleProject?.title}</h1>
                    <div className='my-3'>
                        <a href={singleProject?.website} target='blank'><button className='btn-regular me-3'>LIve-Website</button></a>
                        <a href={singleProject?.client} target='blank'><button className='btn-regular me-3'>Client-Code</button></a>
                        {singleProject?.server &&
                            <a href={singleProject?.server} target='blank'><button className='btn-regular'>Server-Code</button></a>

                        }
                    </div>
                    <h4>Technologies Used</h4>
                    <p>{singleProject?.technologies}</p>
                    <h4>Key Features</h4>
                    <p><span className='dot'></span>1. {singleProject?.feature1}</p>
                    <p><span className='dot'></span>2. {singleProject?.feature2}</p>
                    <p><span className='dot'></span>3. {singleProject?.feature3}</p>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleProject;