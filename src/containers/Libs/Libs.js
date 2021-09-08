import React, { Component } from "react";
import classes from './Libs.css'

class Libs extends Component{
    render(){
        return(
            <div className={classes.Libs}>
                <h1>Добро пожаловать в домашнюю библиотеку</h1>
                <button>Войти в библиотеку</button>
            </div>
        )
    }
}

export default Libs