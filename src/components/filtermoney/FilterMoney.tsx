import React from 'react';
import {UniversalButton} from "../universalbutton/UniversalButton";
import styled from "styled-components";
import {Container} from "../Container";

type FilterMoneyPropsType = {
    onFilterMoneyAll: () => void
    onFilterMoneyRuble: () => void
    onFilterMoneyDollars: () => void
    selectedMoney: SelectedMoneyType[]
}

type SelectedMoneyType = {
    banknote: string
    value: number
    number: string
}

export const FilterMoney = (props: FilterMoneyPropsType) => {

   function onFilterAll ()  {
        props.onFilterMoneyAll()
    }

    function onFilterRuble () {
        props.onFilterMoneyRuble()
    }

    const onFilterDollars = () => {
        props.onFilterMoneyDollars()
    }

    return (
        <StyledFilterMoney>
            <Container>
                <ul>
                    {props.selectedMoney.map((elm, index) => {
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
                    <UniversalButton name={'all'} callBack={onFilterAll}/>
                    <UniversalButton name={'rubles'} callBack={onFilterRuble} colorButton={'peru'}/>
                    <UniversalButton name={'dollars'} callBack={onFilterDollars} colorButton={'green'}/>
                    {/*<UniversalButton*/}
                    {/*    name={'rubles'} callBack={() => onClickHandler('ruble')} colorButton={'peru'}/>*/}
                    {/*<UniversalButton name={'dollars'} callBack={() => onClickHandler('dollars')} colorButton={'green'}/>*/}
                </SectionButton>
            </Container>
        </StyledFilterMoney>
    );
};

const StyledFilterMoney = styled.div`

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