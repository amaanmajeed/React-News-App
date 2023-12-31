import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid mx-3">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex">
                            <Link to='/us/1' className="nav-link active">US</Link>
                            <Link to='/in/1' className="nav-link">India</Link>
                            <Link to='/de/1' className='nav-link'>Denmark</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}
