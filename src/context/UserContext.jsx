import { createContext, useState, useEffect } from "react";
import { users as data } from "../data/data";

let nextId = 1;

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);

  function createUser(user) {
    setUsers([
      ...users,
      {
        id: nextId++,
        name: user.name,
        email: user.email,
      },
    ]);
  }

  function deleteUser(userId) {
    setUsers(users.filter((user) => user.id !== userId));
  }
  useEffect(() => {
    setUsers(data);
    nextId = data.length + 1
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        deleteUser,
        createUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
