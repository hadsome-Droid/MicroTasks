import React, {useState} from 'react';
import {UniversalInput} from "../universalInput/UniversalInput";
import styled from "styled-components";


export const Chat = () => {

    const server = [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]

    let [messages, setMessage] = useState(server)

    const addMessage = (title: string) => {
        console.log(title)
        let newMessage = {message: 'DRFE'}
        setMessage([...server, newMessage])
    }

    return (
        <div>
            <UniversalInput addMessage={addMessage}/>
            <MessageBox>
                {messages.map((el, index) => {
                    return (
                        <span>{el.message}</span>
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