import React from 'react';
import styled from "styled-components";

type UniversalButtonPropsType = {
    name: string
    colorButton?: string
    callBack: () => void
}

export const UniversalButton = (props: UniversalButtonPropsType) => {
    // вся логика здесь хрониться
    // к кнопке всегда должен приходить какой-то callBack в которой будет заложена какая-то логика,
    // а кнопка должна оставаться простой жмяколкой не обременёной интелектом

    // Возникает вопрос где же закладывать логику для callBack ?
    // Ответ прост! в том компоненте где наша кнопка используется!
    // debugger
    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            {/*у кнопки есть имя(name)  и обработчик onClick, так же  вся логика выносится перед return*/}
            <StyledUniversalButton onClick={onclickHandler} color={props.colorButton}>{props.name}</StyledUniversalButton>
        </div>
    );
};

const StyledUniversalButton = styled.button`
  background-color: ${props => props.color || '#b6af18'};
  border: none;
  cursor: pointer;
  height: 30px;
  margin: 0 10px;
  border-radius: 4px;

  &:hover {
    background-color: forestgreen;
  }
`