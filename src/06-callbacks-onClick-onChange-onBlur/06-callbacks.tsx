import React, {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    console.log(111)
}
window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        alert('User have been deleted')
    }
    const saveUser = () => {
        alert('User have been saved')
    }

    const onNameChanged = () => {
        console.log('Name changed')
    }

    const focusLostHandler = () => {
        console.log('Focus lost')
    }

    const  onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed: ' + event.currentTarget.value)
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea><br/>
        <input type={'number'} onChange={onAgeChanged}/>
        <button name={'delete'} onClick={deleteUser}>Delete</button>
        <button onClick={saveUser}>Save</button>
    </div>
}