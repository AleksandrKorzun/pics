import React, { useState } from 'react'
import s from './styles.module.css';

export const ReviewInput = ({onHandleSendReview}) => {
    const [text, setText] = useState(localStorage.getItem('text') || '');
    const [name, setName] = useState(localStorage.getItem('name') || '');

    const onChangeTextInput = (e) => {
        setText(e.target.value)
        localStorage.setItem('text', e.target.value)
    }
    const onChangeNameInput = (e) => {
        setName(e.target.value)
        localStorage.setItem('name', e.target.value)
    }

    const onHandleButton = () => {
        onHandleSendReview(
            {body: text, user: {username: name}, id: Date.now()}
        )
        setName('')
        setText('')
    }
    return (
        <div className={s.container_input}>
            <textarea className={s.review_input} onChange={onChangeTextInput} value={text}/>
            <label className={s.label_name}>
                Enter your name
                <input className={s.input_name} type='text' value={name} onChange={onChangeNameInput}/>
            </label>
            <button 
                type='button' 
                onClick={onHandleButton} 
                className={s.button_send}
            >
                Send
            </button>
        </div>
    )
}