import React, {useState} from 'react';

interface LoginProps {
    visible: boolean
    login(nick: string, password: string): string
    hide(): void
}


const LoginForm: React.FC<LoginProps> = (props) => {

    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [statuMessage, setStatusMessage] = useState('');

    const nickNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value);
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const classes = ["addform-container"]

    const onLogin = () => {
        if (nickName.length === 0) {
            setStatusMessage('Введите никнейм');
            return;
        } else if (password.length === 0) {
            setStatusMessage('Введите пароль');
            return;
        };
        const res = props.login(nickName, password);
        if (res === 'ok') {
            props.hide();
            setNickName('');
            setPassword('');
            setStatusMessage('');
        } else {
            setStatusMessage(res);
        }

    }


    if (props.visible === true) {
        classes.push("visible");
    }
    
    return(
        <div className={classes.join(' ')}>
            <div className="add-form-login">
                <form className="form-inputs">
                    <label className="inputs">
                        Никнэйм:
                        <input value={nickName} onChange={nickNameHandler} className="inputs-style-login" type="text" name="title" />
                    </label>
                    <label className="inputs">
                        Пароль:
                        <input value={password} onChange={passwordHandler} className="inputs-style-login" type="password" name="keywords" />
                    </label>
                </form>
                <button className="navbar-btn" onClick={() => onLogin()}>Войти</button>
                <button className="navbar-btn" onClick={() => {
                    props.hide();
                    setNickName('');
                    setPassword('');
                    setStatusMessage('');
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

export default LoginForm;
