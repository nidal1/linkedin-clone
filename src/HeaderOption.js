import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import './headerOption.css'
function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && <Avatar className='headerOption_icon' src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
            }
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption;
