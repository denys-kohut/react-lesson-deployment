import { useState, useEffect, useRef } from 'react';
import { Button } from '../Button';
import "./counter.css";

// componentDidMount -> useEffect(() => {}, [])
// componentDidUpdate -> useEffect(() => {})
// componentDidUnMount -> useEffect(() => return () => {}, [])

// linked list
// const arr = [ [data1 ( link to data 2)], [data2 ( link to data 3 )], [data3] ]
// arr -> get data1 -> link to data2 -> data2 -> link to data3 -> data3

// data1,    data3
       
//         data5    

// data2,      data4


export function Counter({counter, setCounter}) {
    const stableNumber = useRef({a: 1});
    const someValue = "123123";

    useEffect(() => {
        console.log('initial render')

        return () => {
            console.log('render when unmount happen')
        }
    }, [])

    // if(true) { // <- DON'T DO IT!!! IT'S WRONG, EVEN with ALWAYS TRUE STATEMENTS
    useEffect(() => {
        stableNumber.current.a = stableNumber.current.a + 1
        console.log('stableNumber:', stableNumber.current.a)
        console.log('render every update')
    })
    // }

    // useEffect(() => {
    //     return () => {
    //         console.log('render when unmount happen')
    //     }
    // }, [])

    const increase = () => {
        setCounter(counter + 1)

    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="border">
            <p>{counter}</p>
            <Button onClick={increase}>Increase</Button>
            <Button onClick={decrease}>Decrease</Button>
            <br />
            <br />
        </div>
    )
}
