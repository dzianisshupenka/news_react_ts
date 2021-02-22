import React, {useState} from 'react';
import Currencies from '../../components/Currencies';
import NewsItem from '../../components/NewsItem';
import { INews } from '../../interfaces';

interface MainPageProps {
    news: INews[]
    allKeywords: Array<string>
    remove(id: number): void
    edit(id: number): void
    filter(keyword: string): void
    onSearch(value: string): void
    onSelect(value: string): void
  }

const MainPage: React.FC<MainPageProps> = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="main-page-container">
            <Currencies />
            <h1>Новости</h1>
            <div className="search-pannel">
                <div>
                    <input value={searchValue} onChange={onSearchChange} type="text" className="search-input"/>
                    <button onClick={() => props.onSearch(searchValue)} className="search-button">Найти</button>
                </div>
                <div>                
                    Сортировать по дате:
                    <select onChange={(e) => props.onSelect(e.target.value)}>
                        <option value="new">Сначала новые</option>
                        <option value="old">Сначала старые</option>
                        <option value="last24">Новости за последние сутки</option>
                        <option value="lastWeek">Новости за последнюю неделю</option>
                        <option value="lastMonth">Новости за последний месяц</option>
                    </select>
                </div>
            </div>
            <div className="keywords-container">
                {props.allKeywords.map((i, index) => <button className="keyword-button" onClick={() => props.filter(i)} key={index}>#{i}</button>)}
            </div>
            {
                props.news.length ? props.news.map((item, index) => {
                    return <NewsItem filter={props.filter} key={index} index={index} edit={props.edit} remove={props.remove} item={item}/>
                    }) : <h3>Нет доступных новостей</h3>
            }
        </div>
    )
}

export default MainPage;
