import React, { useState } from 'react';
import Delete from '../../icons/delete.png';
import { IUsers } from '../../interfaces';

interface AdminPageProps {
    chanels: Array<string>
    addChannel(chanel:string): void
    removeChannel(id: number): void
    loggedUser?: IUsers
}

const AdminPage: React.FC<AdminPageProps> = (props) => {

    const [channel, setChannel] = useState('');

    const channelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChannel(event.target.value)
    }

    const addChannelHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(channel.length > 0) {
            props.addChannel(channel);
            setChannel('');
        }
    }
    return props.loggedUser?.isAdmin ? 
        <div className="admin-page-container">
            <h1>Admin page</h1>
            Подключенные каналы:
            {props.chanels.length > 0 ? props.chanels.map((chanel, index) => {
                return <div key={index} className="admin-page-chanel">
                            {chanel}
                            <button onClick={() => props.removeChannel(index)}>
                                <img className='delete-chanel' src={Delete} alt="delete" />
                            </button>
                        </div>
            }) : "Нет подключенных каналов"}
            <div>
                <form className="form-inputs">
                        <label className="inputs">
                            Новый канал:
                            <input value={channel} onChange={channelHandler} className="inputs-style" type="text" name="title" />
                        </label>
                        <button className="add-button" onClick={(event) => addChannelHandler(event)}>Добавить</button>
                </form>
            </div>
        </div> : <h1>Нет доступа</h1>
}

export default AdminPage;
