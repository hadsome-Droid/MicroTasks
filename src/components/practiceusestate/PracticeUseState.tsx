import React, {useState} from 'react';
import styled from "styled-components";
import {UniversalButton} from "../universalbutton/UniversalButton";
import {Container} from "../Container";

export const PracticeUseState = () => {
    let [count, setCount] = useState(1)

    const CountUp = () => {
        setCount(++count)
        // setCount(count++)
        console.log(count)
    }

    const CountDown = ()=> {
        setCount(--count)
        console.log(count)
    }

    const CountReset = () =>{
        setCount(count = 0)
    }


    return (
        <StyledPractice>
            <Container>
                <h2>{count}</h2>
                <UniversalButton name={'CountUp'} callBack={CountUp} colorButton={'rebeccapurple'}/>
                <UniversalButton name={'CountDown'} callBack={CountDown} colorButton={'#3c89ff'}/>
                <UniversalButton name={'Reset'} callBack={CountReset} colorButton={'grey'}/>
            </Container>

        </StyledPractice>
    );
};

const StyledPractice = styled.div`
  h2 {
    width: 100%;
    text-align: center;
    color: #ff773c;
  }
`