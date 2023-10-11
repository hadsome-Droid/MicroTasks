import React from 'react';
import styled from 'styled-components';

type ListStudentsPropsType = {
    students: Array<StudentType>
    // students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const ListStudents = (props:ListStudentsPropsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

const listTopCars = topCars.map((t, index) =>{
    // debugger
    return(
        <tr key={index}>

            <th>{t.manufacturer}</th>
            <th>{t.model}</th>
        </tr>
    )
})

    return (
        <StyledList>
            <ul>
                <h2>List Students</h2>
                {props.students.map((s)=>{
                    return(
                        <li key={s.id}>
                            <span>name: {s.name}</span> <span> age: {s.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tbody>
                {listTopCars}
                </tbody>

            </table>
        </StyledList>
    );
};

const StyledList = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  background-color: #424242;
  text-align: center;
  color: #c2c2c2;
  li{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
  }

  span {
    display: inline-block;
  }
`
