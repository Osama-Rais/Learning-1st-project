import React, {useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
const [enteredUsername,setEnteredUsername]= useState('');
const [enteredAge,setEnteredAge]= useState('');
const [error,setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length ===0 || enteredAge.trim().length ===0){
            setError({
                title:'Invalid Inputs',
                message:'Input fields are empty'
            });
            return;
        }
        if (+enteredAge < 1){
            setError({
                title:'Invalid Inputs',
                message:'Input fields are empty'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = () =>{
        setError(null);
    }
return(
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlform="username">User Name</label>
    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlform="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}    />
        <Button type="submit">Add Users</Button>
    </form>
    
    </Card>
    </Wrapper>
)



};
export default AddUser;
