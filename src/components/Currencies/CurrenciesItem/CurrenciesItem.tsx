import React from 'react';
import { ICurrencies } from '../../../interfaces';

interface CurrenciesItemProps {
    cur: ICurrencies
}

const CurrenciesItem: React.FC<CurrenciesItemProps> = (props) => {

    return (
        <div className="currency-item">
            <span className="currency-item-abbr">{props.cur.Cur_Abbreviation}{props.cur.Cur_Scale === 1 ? '' : `(${props.cur.Cur_Scale})`}: </span>{props.cur.Cur_OfficialRate} BYN
        </div>
    )
}

export default CurrenciesItem;
