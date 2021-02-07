import React from 'react';
import { NavLink } from 'react-router-dom';
import { IUsers } from '../../interfaces';

interface HeaderProps {
    show(): void
    showRegister(): void
    showLogin(): void
    loggedUser?: IUsers
    isAuth: boolean
    logoutHandler(): void
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="navbar">
            <div>
                <NavLink className="navbar-item" to="/">Главная</NavLink>
                <NavLink className="navbar-item" to="/help">Помощь</NavLink>
                <button onClick={() => props.show()} className="navbar-btn">Добавить</button>
            </div>
            {props.loggedUser && props.isAuth ? 
            <div>
                <span className="logged-user">{props.loggedUser.firstName} {props.loggedUser.lastNane}</span>
                <button onClick={() => props.logoutHandler()} className="navbar-btn">Выйти</button>
            </div> :            
            <div>
                <button onClick={() => props.showLogin()} className="navbar-btn">Войти</button>
                <button onClick={() => props.showRegister()} className="navbar-btn">Регистрация</button>
            </div>
            }
        </div>
    )
}

export default Header;
