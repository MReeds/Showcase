import React, { useState, createContext } from "react";
import Base_Url from "../../constants/userConstant";

// The context is imported and used by individual components that need data
export const DataContext = createContext()

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState()

    const getAll = () => {
        return fetch(`${Base_Url}/users`)
        .then(res => res.json())
        .then(setUsers)
    }

    const get = (id) => {
        return fetch(`${Base_Url}/users/${id}`)
        .then(res => res.json())
        .then(setUser)
    }

    const add = userObj => {
        return fetch(`${Base_Url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getAll)
    }

    const edit = (userObj, id) => {
        return fetch(`${Base_Url}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(setUser)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <UserContext.Provider value={{
            users, user, getAll, get, add, edit, setUsers, setUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}