import React, {useState} from 'react';
import {UniversalInput} from "../universalInput/UniversalInput";
import styled from "styled-components";
import {Input} from "../universalInput/Input";
import {Button} from "../button/Button";


export const Chat = () => {

    const server = [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]

    let [messages, setMessage] = useState(server)

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        console.log(title)
        let newMessage = {message: title}
        setMessage([ newMessage,...messages])
    }

    return (
        <div>
            {/*<UniversalInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'Добавить'} callBack={addMessage}/>
            <MessageBox>
                {messages.map((el, index) => {
                    return (
                        <span key={index}>{el.message}</span>
                    )
                })}
            </MessageBox>
        </div>

    );
};

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`