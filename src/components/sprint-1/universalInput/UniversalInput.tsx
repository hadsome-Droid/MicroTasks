import React, {ChangeEvent, useState} from 'react';


export type UniversalInputPropsType = {
    addMessage: (title: string) => void
}


export const UniversalInput = (props: UniversalInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};




