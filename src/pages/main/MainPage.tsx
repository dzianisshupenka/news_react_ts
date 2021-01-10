import React from 'react';
import NewsItem from '../../components/NewsItem';
import { INews } from '../../interfaces';

interface MainPageProps {
    news: INews[]
    allKeywords: Array<string>
    remove(id: number): void
    edit(id: number): void
    filter(keyword: string): void
  }

const MainPage: React.FC<MainPageProps> = (props) => {

    return (
        <div className="main-page-container">
            <h1>Новости</h1>
            <div className="keywords-container">
                {props.allKeywords.map((i, index) => <button className="keyword-button" onClick={() => props.filter(i)} key={index}>#{i}</button>)}
            </div>
            {props.news.map((item, index) => <NewsItem filter={props.filter} key={index} index={index} edit={props.edit} remove={props.remove} item={item}/>  
            )}
        </div>
    )
}

export default MainPage;
