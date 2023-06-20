import React from 'react';
import s from './styles.module.css';
import closeIcon from '../../image/close_icon.png';

export const Review = ({user, comment, id, onDelete}) => {
    const initial = user.username.split(" ").map((name) => name.charAt(0)).join('').toUpperCase()
    console.log(initial);
    return (
        <li className={s.review_wrapper} key={id}>
            <button className={s.review_delete} onClick={() => onDelete(id)} >
                <img className={s.review_icon} src={closeIcon} alt='close icon' width="15" height="15"/>
            </button>
            <div className={s.review_name}>
                <div className={s.review_name__initial}>
                    <p>{initial}</p>
                </div>
                <div className={s.review_name__full}>
                    <p>{user.username}</p>
                </div>
            </div>
            <div className={s.review_text}>
                <p>{comment}</p>
            </div>
        </li>
    )
}