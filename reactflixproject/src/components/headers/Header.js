import React, {Component} from 'react';
import '../../style/style.css';
import '../../style/reset.css';

export default class Header extends Component{
    render(){
        return(
            <div className="bg-img">
                <div className="component-container">
                    <form>
                        <label>Login: </label>
                        <input type="text" value="" class="input-login" placeholder="Login"/>
                    </form>
                </div>
            </div>
        );
    }
}