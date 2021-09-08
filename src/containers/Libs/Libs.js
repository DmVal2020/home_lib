import React, { Component } from "react";
import classes from './Libs.css'
import {Link} from 'react-router-dom'

class Libs extends Component{
    clickButtonHandler(){

    }
    render(){
        return(
            <div className={classes.Libs}>
                <div>
                    <h1>Добро пожаловать в домашнюю библиотеку</h1>
                    <Link to="/category">
                    <button>Войти в библиотеку</button>
                    </Link>
                </div>               
            </div>
        )
    }
}

export default Libs