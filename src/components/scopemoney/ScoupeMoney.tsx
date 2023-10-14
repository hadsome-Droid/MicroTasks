import React, {useState} from 'react';
import {Container} from "../Container";
import styled from "styled-components";
import {UniversalButton} from "../universalbutton/UniversalButton";
import {FilterMoney} from "../filtermoney/FilterMoney";

type FilteredType = 'all' | 'ruble' | 'dollar'

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
    const [filtered, setFiltered] = useState<FilteredType>('all')

    let selectedMoney = money

    if (filtered === 'ruble') {
        selectedMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'RUBLS')
    }
    if (filtered === 'dollar') {
        selectedMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'Dollars')
    }

    const onClickHandler = (nameButton: FilteredType) => {
        console.log(nameButton)
        setFiltered(nameButton)
    }

    return (
        <StyledScopeMoney>

            <FilterMoney
                onFilterMoneyAll={() => onClickHandler('all')}
                onFilterMoneyRuble={() => onClickHandler('ruble')}
                onFilterMoneyDollars={() => onClickHandler('dollar')}
                selectedMoney={selectedMoney}
            />
            {/*<Container>*/}
            {/*    <ul>*/}
            {/*        {selectedMoney.map((elm, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <span>{elm.banknote}</span>*/}
            {/*                    <span>{elm.value}</span>*/}
            {/*                    <span>{elm.number}</span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*    <SectionButton>*/}
            {/*        <UniversalButton name={'all'} callBack={() => onClickHandler('all')}/>*/}
            {/*        <UniversalButton name={'ruble'} callBack={()=>onClickHandler('ruble')} colorButton={'peru'}/>*/}
            {/*        <UniversalButton name={'dollar'} callBack={()=>onClickHandler('dollar')} colorButton={'green'}/>*/}
            {/*    </SectionButton>*/}
            {/*</Container>*/}

        </StyledScopeMoney>
    );
};

const StyledScopeMoney = styled.div`

  // ${Container} {
  //   flex-direction: column;
  // }
  //
  // span {
  //   margin-right: 15px;
  // }
`
const SectionButton = styled.div`
  display: flex;

`