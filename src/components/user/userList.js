import React, { useState, userEffect, useEffect } from 'react';
// import UserCard from './userCard'
const UserList = (props) => {
    const [users, setUsers] = useState([]);

    const getDevs = () => {
        // function to get list of all of the users data (cards) 
    }

    useEffect(() => {
        // getDevs();
    }, []);

    return (
        <>
        <div>
            List of user cards
        {/* <UserCard/> */}
        </div>
        {/* Map through list of user data to return user cards */}
        </>
    )
}

export default UserList