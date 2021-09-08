import React, { Component } from "react";
import classes from './Categories.css'
import Card from "../../components/Card/Card";

const categories = [
    {label:'фантастика',description:'книги фантастического содержания'},
    {label:'фэнтези',description:'книги сказочного содержания'},
    {label:'детектив',description:'книги детективного содержания'},
    {label:'приключения',description:'книги приключенческого содержания'},
    {label:'история',description:'книги исторического содержания'},
    {label:'детские',description:'книги для детей'},
    {label:'научные',description:'книги научного содержания'},
]
class Categories extends Component{
    clickButtonHandler(){

    }
    renderCards(){
        return categories.map((card,index)=>{
            return(
                <li key={card.label + index}>
                    <Card 
                        title={card.label}
                        description={card.description}
                        onClick={this.clickButtonHandler}
                    />
                </li>
            )
        })
    }
    render(){
        return(
            <div className={classes.Categories}>
                <div>
                    <h1>Категории и жанры</h1>
                    <ul>
                        {this.renderCards()}
                    </ul>
                    
                </div>               
            </div>
        )
    }
}

export default Categories