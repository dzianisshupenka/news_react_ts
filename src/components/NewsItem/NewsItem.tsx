import React from 'react';
import { INews } from '../../interfaces';

import Edit from '../../icons/edit.png';
import Delete from '../../icons/delete.png';

interface NewsItemProps {
    item: INews
    index: number
    remove(id: number):void
    edit(id: number):void
    filter(keyword?: string, author?: string): void
}

const NewsItem: React.FC<NewsItemProps> = (props) => {

    const date = new Date(props.item.date).toUTCString();
    // let div = document.createElement('div'); 
    // div.innerHTML = props.item.text;
    // console.log(div);

    return (
        <div className="news-item-container">
            <h3 className="news-header"><a href={props.item.link}>{props.item.title}</a></h3>
            <span className="author">Автор: <button onClick={() => props.filter(undefined, props.item.author)} className="keyword-button">{props.item.author}</button></span>
            <div className="buttons">
                <button onClick={() => props.edit(props.index)} className="news-item-buttons">
                    <img src={Edit} alt="edit" />
                </button>
                <button onClick={() => props.remove(props.index)} className="news-item-buttons">
                    <img src={Delete} alt="delete" />
                </button>
            </div>
            <div className="itemDescription" dangerouslySetInnerHTML={{ __html: props.item.text}}></div>
            <div className="keywords">
                <div>
                    {props.item.keywords.map((i,index) => <button onClick={() => props.filter(i)} className="keyword-button" key={index}>#{i}</button>)}
                </div>
                <div>{date}</div>
            </div>
        </div>
    )
}

export default NewsItem;
