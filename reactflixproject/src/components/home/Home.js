import React, {Component} from 'react';
import Navbar from '../headers/Navbar';


export default class Home extends Component{
    render(){
        return(
            <div className="container-home">
                <Navbar/>
            </div>
        );
    }
}