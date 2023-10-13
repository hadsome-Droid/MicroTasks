import React, {useState} from 'react';
import {Container} from "../Container";
import styled from "styled-components";
import {UniversalButton} from "../universalbutton/UniversalButton";

export const ScopeMoney = () => {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let selectedMoney = [...money]

    const onClickHandler = (nameButton: string) => {

        if(nameButton === 'ruble'){
            console.log(nameButton)
          return setMoney(selectedMoney = [...money].filter((filteredMoney) => filteredMoney.banknote === 'RUBLS'))
        }

        if(nameButton === 'dollar'){
            console.log(nameButton)
         return  setMoney(selectedMoney = [...money].filter((filteredMoney) => filteredMoney.banknote === 'Dollars'))
        }
        if(nameButton === 'all'){
            console.log(nameButton)
         return  setMoney(money)
        }

    }

    return (
        <StyledScopeMoney>
            <Container>
                <ul>
                    {selectedMoney.map((elm, index) => {
                        return (
                            <li key={index}>
                                <span>{elm.banknote}</span>
                                <span>{elm.value}</span>
                                <span>{elm.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <SectionButton>
                    <UniversalButton name={'all'} callBack={() => onClickHandler('all')}/>
                    <UniversalButton name={'ruble'} callBack={()=>onClickHandler('ruble')} colorButton={'peru'}/>
                    <UniversalButton name={'dollar'} callBack={()=>onClickHandler('dollar')} colorButton={'green'}/>
                </SectionButton>
            </Container>

        </StyledScopeMoney>
    );
};

const StyledScopeMoney = styled.div`

  ${Container} {
    flex-direction: column;
  }

  span {
    margin-right: 15px;
  }
`
const SectionButton = styled.div`
  display: flex;

`