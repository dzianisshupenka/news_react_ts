import React, { useState, useEffect } from 'react';
import { ICurrencies } from '../../interfaces';
import CurrenciesItem from './CurrenciesItem/index'

const Currencies: React.FC = () => {

    const [currencies, setCurrencies] = useState([]);
    
    const currenciesToShow = ["USD", "EUR", "RUB", "PLN", "GBP"];

    const currUrl = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

    useEffect(() => {
        fetch(currUrl)
            .then(result => result.json())
            .then(res => {
                const filteredCurr = res.filter((i:ICurrencies) => currenciesToShow.includes(i.Cur_Abbreviation))
                setCurrencies(filteredCurr);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="currencies-container">
            Курсы валют:
            {currencies.length ? currencies.map((i, index) => <CurrenciesItem key={index} cur={i} />) : "Нет связи с банком"}
        </div>
    )
}

export default Currencies;
