import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
    const [inputText, setInputText] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const TextChangedHanlder = (e) => {
        setInputText(e.target.value);
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputText,
        })
        setInputText('');
    }
    return (
        <form className='form' onSubmit={ SubmitHandler }>
            { props.edit ? (
                <>
                    <input 
                        type='text' 
                        name='input' 
                        className='inputText edit' 
                        placeholder='Update your item...' 
                        value={ inputText }
                        onChange={ TextChangedHanlder }
                        ref={ inputRef }
                    />
                    <button className='add-button edit'>Add</button>
                </>
            ) : (
                <>
                    <input 
                        type='text' 
                        name='input' 
                        className='inputText' 
                        placeholder='Add a todo...' 
                        value={ inputText }
                        onChange={ TextChangedHanlder }
                        ref={ inputRef }
                    />
                    <button className='add-button'>Add</button>
                        </>
            )}          
        </form>
    )
}

export default Form;
