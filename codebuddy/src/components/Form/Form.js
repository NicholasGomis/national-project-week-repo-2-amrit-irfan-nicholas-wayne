import React from 'react'

export function Form(props) {
    

    return (
        <form className="form">

        <input className="name-input" placeholder='Insert your name'></input>
        <input className ="title-input" placeholder='Insert post title'></input>
        <input className="problem-input" placeholder='Explain problem'></input>
        <input className="tried-input" placeholder='What have you tried'></input>
        <input className="code-input" placeholder='Insert your code here'></input>
        <input type="submit" />
        </form>
    )
}

export default Form