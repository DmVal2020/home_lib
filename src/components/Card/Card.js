import React from "react";
import classes from './Card.css'

const Card = props=>{
    return(
        <div className={classes.Card}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button onclick={props.onclick}>Перейти</button>
        </div>
    )
}

export default Card