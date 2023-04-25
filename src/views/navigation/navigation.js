import React from "react";
import './navigation.scss';
import {
    Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to='/' activeClassname='active' > Home</NavLink>
                <NavLink to='/Todo' activeClassname='active' > ToDo</NavLink>
                <NavLink to='/About' activeClassname='active' > About</NavLink>
                <NavLink to='/Listuser' activeClassname='active'>List Users</NavLink>
            </div>
        )
    }
}
export default Navigation;
