import React, { Component } from 'react'
import classes from './Menu.css'
import { NavLink } from 'react-router-dom'

const links = [
    {to:'/',label:'Home',exact:true},
    {to:'/auth',label:'Auth',exact:false},
    {to:'/category',label:'Category',exact:false},
    {to:'/autors',label:'Autorse',exact:false},
    {to:'/books',label:'Books',exact:false},
    {to:'/admin',label:'Admin',exact:false},
]
class Menu extends Component{

    renderLink(){
        return(
            links.map((link,index)=>{
                return (
                <li key={link.label + index}>
                    <NavLink 
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                    >
                        {link.label}
                    </NavLink>
                </li>
                )
            })
        )
    }
    render(){
        return(
            <nav className={classes.Menu}>
                <ul>
                    {this.renderLink()}
                </ul>      
            </nav>
        )
    }
}

export default Menu