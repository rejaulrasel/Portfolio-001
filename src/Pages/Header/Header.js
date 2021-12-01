import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand text-light" href="k">REJAUL HASAN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-danger"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to='/home'>
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/about'>
          <a className="nav-link active text-light" aria-current="page" href="#">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/projects'>
          <a className="nav-link active text-light" aria-current="page" href="#">Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/blogs'>
          <a className="nav-link active text-light" aria-current="page" href="#">Blogs</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/contact'>
          <a className="nav-link active text-light" aria-current="page" href="#">Contact</a>
          </Link>
        </li>
        <li className="nav-item">
          <div className="btn-regular">
          <a className="nav-link text-light" href="https://drive.google.com/file/d/1lsh4zHmnYD7kzBMWAIz_3O_JSKAqizhB/view?usp=sharing" target='_blank'>RESUME</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;