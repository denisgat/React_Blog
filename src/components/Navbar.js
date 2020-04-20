import React from 'react';


function Navbar() {
    return (
            <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Denis Gatotho</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Pre-Work Week 1</a>
                                <a class="dropdown-item" href="#">Pre-Work Week 2</a>
                                <a class="dropdown-item" href="#">Pre-Work Week 3</a>
                                <a class="dropdown-item" href="#">Pre-Work Week 4</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Week 1</a>
                                <a class="dropdown-item" href="#">Week 2</a>
                                <a class="dropdown-item" href="#">Week 3</a>
                                <a class="dropdown-item" href="#">Week 4</a>
                                <a class="dropdown-item" href="#">Week 5</a>
                                <a class="dropdown-item" href="#">Week 6</a>
                                <a class="dropdown-item" href="#">Week 7</a>
                                <a class="dropdown-item" href="#">Week 8</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar