import React, {useState} from 'react';
import './App.css';
import {ListStudents} from "./components/liststudents/ListStudents";
import {Button} from "./components/button/Button";
import {Container} from "./components/Container";
import {UniversalButton} from "./components/universalbutton/UniversalButton";
import {PracticeUseState} from "./components/practiceusestate/PracticeUseState";
import {ScopeMoney} from "./components/scopemoney/ScoupeMoney";
import {Chat} from "./components/chat/Chat";




function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )

    const [filterStudent, setFilterStudent] = useState('all')

    let currentStudent = students

    if(filterStudent === 'robert') {
        console.log(currentStudent = students.filter((elm)=> elm.name === 'Robert'))
    }

    const ButtonPush = (userName: string, age: number) => {
        console.log(`You push me ${userName}! Your age ${age}!`)
        setFilterStudent(userName)
    }

    const ButtonTouch = (userName: string, age: number) => {
        console.log(`You touch me ${userName}! Your age ${age}!`)
    }

    const StupidButton = (userName: string) => {
        console.log('Im stupid button')
        setFilterStudent(userName)
    }

    return (
        <>
            <Container>
                <Chat/>
                {/*<ListStudents students={currentStudent}/>*/}
                {/*<Button />*/}
                {/*<UniversalButton name={'Push Me!'} callBack={() => ButtonPush('robert', 21)}/>*/}
                {/*<UniversalButton name={'Touch Me Please!'} callBack={() => ButtonTouch('Mary', 15)}/>*/}
                {/*<UniversalButton name={'Dont Push and Touch Me!'} callBack={()=>StupidButton('all')}/>*/}
            </Container>
            <PracticeUseState/>
            <ScopeMoney/>
        </>
    );
}

export default App;
