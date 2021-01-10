import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    show(): void
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="navbar">
            <NavLink className="navbar-item" to="/">Главная</NavLink>
            <NavLink className="navbar-item" to="/help">Помощь</NavLink>
            <button onClick={() => props.show()} className="navbar-btn">Добавить</button>
        </div>
    )
}

export default Header;
