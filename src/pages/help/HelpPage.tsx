import React from 'react';

const HelpPage: React.FC = () => {
    return (
        <div className="help-page">
            <h1>Help Page</h1>
            <p>Для проверки логина можно использовать никнейм: demoUser, пароль: 1111 </p>
            <p>Чтобы добавить новость, нужно обязательно зарегистрироваться.</p>
            <p>Для фильтрации новостей по автору, нужно просто нажать на автора. </p>
        </div>
    )
}

export default HelpPage;
