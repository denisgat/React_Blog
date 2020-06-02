import React from 'react';


function Navbar() {
    return (
            <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Denis Gatotho</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-right mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#pre1">Pre-Work Week 1</a>
                                <a className="dropdown-item" href="#pre2">Pre-Work Week 2</a>
                                <a className="dropdown-item" href="#pre3">Pre-Work Week 3</a>
                                <a className="dropdown-item" href="#pre4">Pre-Work Week 4</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#w1">Week 1</a>
                                <a className="dropdown-item" href="#w2">Week 2</a>
                                <a className="dropdown-item" href="#w3">Week 3</a>
                                <a className="dropdown-item" href="#w4">Week 4</a>
                                <a className="dropdown-item" href="#w5">Week 5</a>
                                <a className="dropdown-item" href="#w6">Week 6</a>
                                <a className="dropdown-item" href="#w7">Week 7</a>
                                <a className="dropdown-item" href="#w8">Week 8</a>
                                <a className="dropdown-item" href="#w9">Week 9</a>
                                <a className="dropdown-item" href="#w10">Week 10</a>
                                <a className="dropdown-item" href="#w11">Week 11</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar