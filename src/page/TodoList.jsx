import { useState } from "react";

const TodoList = () => {
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    email: 'john@example.com',
  });

  const updateUser = () => {
    
    setUser({
      name: 'Kouch', 
      age: 30, 
    });
  };
  return (
    <div className="w-full mt-100">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>Update Name</button>
    </div>
  );
};

export default TodoList;
