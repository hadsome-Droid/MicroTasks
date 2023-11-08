import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const superUser = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apr. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildergrad.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    console.log(superUser.address.geo.lat)
    function removeTask(todolistID: string, id: string) {

        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== id)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [task, ...tasks[todolistID]]})
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {

        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone} : el)})


        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
        // setFilter(value);
    }


    return (
        <div className="App">

            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id]

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
                return (<Todolist
                    key={el.id}
                    todolistID={el.id}
                    title={el.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                />)
            })}

        </div>
    );
}

export default App;


//                 SPRINT 1
// import './App.css';
// import {ListStudents} from "./components/sprint-1/liststudents/ListStudents";
// import {Button} from "./components/sprint-1/button/Button";
// import {Container} from "./components/sprint-1/Container";
// import {UniversalButton} from "./components/sprint-1/universalbutton/UniversalButton";
// import {PracticeUseState} from "./components/sprint-1/practiceusestate/PracticeUseState";
// import {ScopeMoney} from "./components/sprint-1/scopemoney/ScoupeMoney";
// import {Chat} from "./components/sprint-1/chat/Chat";
//
//
//
//
// function App() {
//     const [students, setStudents] = useState([
//             {id: 1, name: "James", age: 8},
//             {id: 2, name: "Robert", age: 18},
//             {id: 3, name: "John", age: 28},
//             {id: 4, name: "Michael", age: 38},
//             {id: 5, name: "William", age: 48},
//             {id: 6, name: "David", age: 58},
//             {id: 7, name: "Richard", age: 68},
//             {id: 8, name: "Joseph", age: 78},
//             {id: 9, name: "Thomas", age: 88},
//             {id: 10, name: "Charles", age: 98},
//             {id: 11, name: "Christopher", age: 100},
//         ]
//     )
//
//     const [filterStudent, setFilterStudent] = useState('all')
//
//     let currentStudent = students
//
//     if(filterStudent === 'robert') {
//         console.log(currentStudent = students.filter((elm)=> elm.name === 'Robert'))
//     }
//
//     const ButtonPush = (userName: string, age: number) => {
//         console.log(`You push me ${userName}! Your age ${age}!`)
//         setFilterStudent(userName)
//     }
//
//     const ButtonTouch = (userName: string, age: number) => {
//         console.log(`You touch me ${userName}! Your age ${age}!`)
//     }
//
//     const StupidButton = (userName: string) => {
//         console.log('Im stupid button')
//         setFilterStudent(userName)
//     }
//
//     return (
//         <>
//             <Container>
//                 <Chat/>
//                 {/*<ListStudents students={currentStudent}/>*/}
//                 {/*<Button />*/}
//                 {/*<UniversalButton name={'Push Me!'} callBack={() => ButtonPush('robert', 21)}/>*/}
//                 {/*<UniversalButton name={'Touch Me Please!'} callBack={() => ButtonTouch('Mary', 15)}/>*/}
//                 {/*<UniversalButton name={'Dont Push and Touch Me!'} callBack={()=>StupidButton('all')}/>*/}
//             </Container>
//             <PracticeUseState/>
//             <ScopeMoney/>
//         </>
//     );
// }