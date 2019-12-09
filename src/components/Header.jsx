import React from "react"
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

export const Header = () => (
    <header className="Header">
        <Link to="/" className="Logo" />
        <nav className="HeaderNav">
            <NavLink 
                className="HeaderNav-Item" 
                activeClassName="HeaderNav-Item__active" 
                to="/"
                exact>
                    Фильмы
            </NavLink>
            <NavLink 
                className="HeaderNav-Item" 
                activeClassName="HeaderNav-Item__active" 
                to="/shedule">
                    Расписание
            </NavLink>
        </nav>
        <Link to="/user" className="user">User</Link>
    </header>
)
