import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import '../../style/style.css';
import Logo from '../../img/logo.png';

const Navbar = props => (
    <div className="wrapper-navbar">
        <div className="navbar-container">
            <div><img src={Logo}/></div>
            <div className="links-container">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Séries</a></li>
                    <li><a href="#">Filmes</a></li>
                    <li><a href="#">Novidades</a></li>
                    <li><a href="#">Minha Lista</a></li>
                </ul>
            </div>
        </div>
        <div className="user-option-container">
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faSearch} color={'#ccc'}/></a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href=""><FontAwesomeIcon icon={faNewspaper} color={'#ccc'}/></a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    </div>
);

export default Navbar;