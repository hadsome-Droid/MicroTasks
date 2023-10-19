import React, {ChangeEvent, useState} from 'react';


export type UniversalInputPropsType = {
    addMessage: (title: string) => void
}

// export type MessagesPropsType = {
//     messages: MessageType[]
// }


export const UniversalInput = (props: UniversalInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
    }
    return (
        <div>
            <input type="text" onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};




