import React, {Component} from 'react';
import Login from './Login';

import '../../style/style.css';
import '../../style/reset.css';

export default class Header extends Component{
    render(){
        return(
            <div className="bg-img">
                <div className="component-containers">
                    <div className="component-login">
                        <Login/>
                    </div>
                </div>
            </div>
        );
    }
}