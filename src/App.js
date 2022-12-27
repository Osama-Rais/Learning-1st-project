import React , {useState} from 'react';
import AddUser from './componets/Users/AddUsers';
import UsersList from './componets/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler= (uName,uAge) => {
    setUsersList((previousUsersList) => {
      return[...previousUsersList, {name:uName , age:uAge, id:Math.random().toString()}]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
