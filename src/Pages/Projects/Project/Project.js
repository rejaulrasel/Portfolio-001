import React from 'react';
import './Project.css'
const Project = ({ project }) => {
    const { img1, title } = project
    return (
        <div style={{ 'backgroundColor': '#172a45' }} className='text-white mb-5 rounded rounded-5'>
            <div className="row g-0">
                <div className="col-md-8 col-12 p-5">
                    <img className='img-fluid image' src={img1} alt="car-pic" />
                </div>
                <div className="col-md-4 col-12 p-md-5 mb-md-0 mb-5 d-flex  justify-content-center align-items-center">
                    <div>
                        <h3 className=''>{title}</h3>
                        <button className='btn-regular'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;