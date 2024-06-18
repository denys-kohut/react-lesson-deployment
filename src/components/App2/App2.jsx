import { useState, useRef, useEffect } from 'react';
import { Button } from "../Button"
import { Input } from "../Input"

export function App2() {
    const [ firstName, setFirstName ] = useState('') // -> [ value, publicMethodForChangeThisValue ]
    const [ lastName, setLastName ] = useState('')
    
    useEffect(() => {
        console.log(' --- initial render')
    }, [])

    useEffect(() => {
        console.log(' ---- update happen')
        console.log('firstName:', firstName);
        console.log('lastName:', lastName);
    }, [firstName, lastName])

    const onChangeHandler = (handler) => (event) => {
        handler(event.target.value)
    }

    // function onChangeFirstName(event) {
    //     const value = event.target.value
    //     setFirstName(value)
    // }

    // function onChangeLastName(event) {
    //     const value = event.target.value
    //     setLastName(value)
    // }

    function onSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName);
    }

    return (
        <main>
            <section>
                <h1>My form</h1> 
                <form onSubmit={onSubmit}>
                    <label>
                        <b>First Name</b>
                        {/* <input value={firstName} type="text" name="first_name" onChange={onChangeFirstName} /> */}
                        <Input value={firstName} onChange={(event) => onChangeHandler(setFirstName)(event)} name="first_name"/>
                    </label>
                    <br />
                    <label>
                        <b>Last Name</b>
                        <Input value={lastName} onChange={onChangeHandler(setLastName)} name="last_name"/>
                    </label>
                    <br />
                    <Button>Submit</Button>
                </form>
            </section>
        </main>
    )
}


// function onSubmit(event) { // just take data from event from DOM
    //     event.preventDefault();
    //     const { first_name, last_name } = event.target.elements
    //     const firstName = first_name.value
    //     const lastName = last_name.value
    //     console.log(firstName, lastName);
    // }

    // function onSubmit(event) { // just receive link to the dom element throw the ref
    //     event.preventDefault();
    //     console.log(section.current)
    //     console.log(firstName.current.value);
    //     console.log(lastName.current.value);
    // }

    // const firstName = useRef(null)
    // const lastName = useRef(null)
    // const section = useRef(null)
    

    // return (
    //     <main>
    //         <section ref={section} >
    //             <h1>My form</h1> 
    //             <form onSubmit={onSubmit}>
    //                 <label>
    //                     <b>First Name</b>
    //                     {/* <input ref={firstName} type="text" name="first_name" /> */}
    //                     <Input ref={firstName} name="first_name"/>
    //                 </label>
    //                 <br />
    //                 <label>
    //                     <b>Last Name</b>
    //                     <Input ref={lastName} name="last_name"/>
    //                 </label>
    //                 <br />
    //                 <Button>Submit</Button>
    //             </form>
    //         </section>
    //     </main>
    // )
