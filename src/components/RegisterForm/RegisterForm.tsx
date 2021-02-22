import React, {useState} from 'react';
import { IUsers } from '../../interfaces';

interface RegisterProps {
    visible: boolean
    hide(): void
    registerUser(user: IUsers): string;
}

const RegisterForm: React.FC<RegisterProps> = (props) => {

    const [nickName, setNickName] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [statuMessage, setStatusMessage] = useState('');

    const nickNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value);
    };

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const confirmPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const registerHandler = () => {
        if (nickName.length === 0) {
            setStatusMessage('Поле Никнейм обязательно для заполнения');
            return;
        } else if (name.length === 0) {
            setStatusMessage('Поле Имя обязательно для заполнения');
            return;
        } else if (lastName.length === 0) {
            setStatusMessage('Поле Фамилия обязательно для заполнения');
            return;
        } else if (email.length === 0) {
            setStatusMessage('Поле Электронная почта обязательно для заполнения');
            return;
        } else if (password.length === 0) {
            setStatusMessage('Введите пароль');
            return;
        } else if (password !== confirmPassword) {
            setStatusMessage('Пароли не совпадают');
            return;
        }
        const user = {
            nickname: nickName,
            firstName: name,
            lastNane: lastName,
            email: email,
            password: password,
            isAdmin: false
        }
        const res = props.registerUser(user);
        setStatusMessage(res);
        setNickName('');
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const classes = ["addform-container"];

    if (props.visible === true) {
        classes.push("visible");
    };
    
    return(
        <div className={classes.join(' ')}>
            <div className="add-form-register">
                <form className="form-inputs">
                    <label className="inputs">
                        Никнэйм:
                        <input value={nickName} onChange={nickNameHandler} className="inputs-style-login" type="text" name="title" />
                    </label>
                    <label className="inputs">
                        Имя:
                        <input value={name} onChange={nameHandler} className="inputs-style-login" type="text" name="title" />
                    </label>
                    <label className="inputs">
                        Фамилия:
                        <input value={lastName} onChange={lastNameHandler} className="inputs-style-login" type="text" name="author" />
                    </label>
                    <label className="inputs">
                        Электронная почта:
                        <input value={email} onChange={emailHandler} className="inputs-style-login" type="text" name="keywords" />
                    </label>
                    <label className="inputs">
                        Пароль:
                        <input value={password} onChange={passwordHandler} className="inputs-style-login" type="password" name="keywords" />
                    </label>
                    <label className="inputs">
                        Повторите пароль:
                        <input value={confirmPassword} onChange={confirmPasswordHandler} className="inputs-style-login" type="password" name="keywords" />
                    </label>
                </form>
                <button className="navbar-btn" onClick={() => registerHandler()}>
                    Зарегистрироваться
                </button>
                <button className="navbar-btn" onClick={() => {
                    props.hide();
                    setStatusMessage('');
                    setNickName('');
                    setName('');
                    setLastName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    }}>
                    Закрыть
                </button>
                <div className="status-message">
                    {statuMessage}
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
