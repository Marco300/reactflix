import React, {Component} from 'react';
import '../../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logo.png';

export default class Login extends Component{
    render(){
        // definir cor do icon
        let colorFont = "#fff";

        return(
        <div className="wrapper-login">
           <div className="logo">
                <img src={Logo}/>
            </div>
            <form action="" className="form-login">
                <div className="input-login">
                    <label htmlFor=""><FontAwesomeIcon icon={faUser} color={colorFont}/>  </label>
                    <input className="input input-login" type="text" placeholder="Login"/>
                </div>
                <div className="input-passw">
                    <label htmlFor=""><FontAwesomeIcon icon={faUnlock} color={colorFont}/>  </label>
                    <input className="input input-senha" type="password" placeholder="Senha"/>
                </div>
                <div className="btn-submit">
                    <button className="btn-login" type="button">Login</button>
                </div>
            </form>
        </div>
        );
    }
}