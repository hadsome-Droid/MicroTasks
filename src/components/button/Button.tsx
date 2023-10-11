import React from 'react';

export const Button = () => {

    // const setHey = (event:MouseEvent<HTMLButtonElement>) =>{
    //     console.log('Hey NOOB!')
    // }
    //
    // const setEvent = () =>{
    //     console.log('Ты нажал туды!')
    // }

const onClickHandler = (name:string) => {
    console.log(name)
}

const onClickShow = () =>{
    console.log(100200)
}

const onShowNumber = (num:number)=>{
    console.log(num)
}

    return (
        <>
            {/*<button onClick={()=>onClickHandler('rydi')}>*/}
            {/*    Push Me!*/}
            {/*</button>*/}
            {/*<button onClick={(event)=>onClickHandler('bob')}>Жми Сюды!</button>*/}
            <button onClick={onClickShow}>1</button>
            <button onClick={()=>onShowNumber(200100)}>2</button>
        </>

    );
};
