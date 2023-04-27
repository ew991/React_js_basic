import React from "react";
import './navigation.scss';
import {
    Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/" >Home</a>
                <a href="/Todo">To Do</a>
                <a href="/About">About</a>
                <a href="/Listuser">Listuser</a>

                {/* <Link to="/" >Home</Link>
                <Link to="/Todo">To Do</Link>
                <Link to="/About">About</Link>
                <Link to="/Listuser">Listuser</Link> */}

                {/* <NavLink exact to="/" activeClassname='active' > Home</NavLink>
                <NavLink to="/Todo" activeClassname='active' > ToDo</NavLink>
                <NavLink to="/About" activeClassname='active' > About</NavLink>
                <NavLink to="/Listuser" activeClassname='active'>List Users</NavLink> */}
            </div>
        )
    }
}
export default Navigation;
