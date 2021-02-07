import React, { useState, useEffect } from 'react';
import { INews, IUsers } from '../../interfaces';

interface AddProps {
    addNews(newItem: INews): void
    visible: boolean
    editing?: INews
    isAuth: boolean
    hide(): void
    loggedUser?: IUsers
}

const AddForm: React.FC<AddProps> = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        if (props.editing) {
            setTitle(props.editing.title);
            setText(props.editing.text);
            setKeywords(props.editing.keywords.join(' '));
        }
    }, [props.editing]);


    const TitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const TextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    const KeywordsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(event.target.value);
    }

    const AddHandler = () => {
        const result = {
        title: title,
        text: text,
        author: props.loggedUser ? props.loggedUser.firstName : '',
        keywords: keywords.split(' '),
        date: Date.now()
        }
        props.addNews(result);
        console.log(result);
        setTitle('');
        setText('');
        setKeywords('');
    }

    const classes = ["addform-container"]

    if (props.visible === true && props.isAuth) {
        classes.push("visible");
    }
    
    return(
        <div className={classes.join(' ')}>
            <div className="add-form">
                <p>{props.editing ? 'Редактировать' : 'Добавить'} новость</p>
                <form className="form-inputs">
                    <label className="inputs">
                        Зоголовок:
                        <input value={title} onChange={TitleHandler} className="inputs-style" type="text" name="title" />
                    </label>
                    <label className="inputs">
                        Текст новости:
                        <textarea value={text} onChange={TextHandler} className="textarea-style" name="itemText" />
                    </label>
                    <label className="inputs">
                        Ключевые слова (через пробел):
                        <input value={keywords} onChange={KeywordsHandler} className="inputs-style" type="text" name="keywords" />
                    </label>
                </form>
                <button onClick={() => {
                    props.hide();
                    AddHandler();
                    }}>{props.editing ? 'Сохранить' : 'Добавить'}</button>
                <button onClick={() => {
                    props.hide();
                    setTitle('');
                    setText('');
                    setKeywords('');
                    }}>Отмена</button>
            </div>
        </div>
    )
}

export default AddForm;
