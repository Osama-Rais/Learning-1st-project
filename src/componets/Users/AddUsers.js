import React, {useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button'


const AddUser = (props) => {
const [enterUsername,setEnterUsername]= useState('');
const [enterAge,setEnterAge]= useState('');
    const addUserHandler = (event) => {
        event.prevetDefault();
        console.log(enterUsername, enterAge);
    };

    const usernameChangeHandler = (event) =>{
        setEnterUsername(event.target.value);
    };
    const ageChangeHandler = (event) =>{
        setEnterAge(event.target.value);
    };
return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlform="username">User Name</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlform="age">Age (Years)</label>
        <input id="age" type="number"  onChange={ageChangeHandler}    />
        <Button type="submit">Add Users</Button>
    </form>
    </Card>
)



};
export default AddUser;
