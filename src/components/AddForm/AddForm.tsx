import React, { useState, useEffect } from 'react';
import { INews } from '../../interfaces';

interface AddProps {
    addNews(newItem: INews): void
    visible: boolean
    editing?: INews
    hide(): void
}

const AddForm: React.FC<AddProps> = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        if (props.editing) {
            setTitle(props.editing.title);
            setText(props.editing.text);
            setAuthor(props.editing.author);
            setKeywords(props.editing.keywords.join(' '));
        }
    }, [props.editing]);


    const TitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const TextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    const AuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    const KeywordsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(event.target.value);
    }

    const AddHandler = () => {
        const result = {
        title: title,
        text: text,
        author: author,
        keywords: keywords.split(' '),
        date: Date.now()
        }
        props.addNews(result);
        console.log(result);
        setTitle('');
        setText('');
        setAuthor('');
        setKeywords('');
    }

    const classes = ["addform-container"]


    if (props.visible === true) {
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
                        Автор:
                        <input value={author} onChange={AuthorHandler} className="inputs-style" type="text" name="author" />
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
                    setAuthor('');
                    setKeywords('');
                    }}>Отмена</button>
            </div>
        </div>
    )
}

export default AddForm;
