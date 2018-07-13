import React, {Component} from 'react';
import '../../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logo.png';

export default class Login extends Component{
    render(){
        return(
        <div className="wrapper-login">
           
            <img src={Logo}/>
            
            <form action="">
                <div>
                    <label htmlFor=""><FontAwesomeIcon icon={faUser}/>  </label>
                    <input className="input input-login" type="text" placeholder="Login"/>
                </div>
                <div>
                    <label htmlFor=""><FontAwesomeIcon icon={faUnlock}/>  </label>
                    <input className="input input-senha" type="password" placeholder="Senha"/>
                </div>
                <div className="wrapper-btn">
                    <button className="btn-login" type="button">Login</button>
                </div>
            </form>
        </div>
        );
    }
}