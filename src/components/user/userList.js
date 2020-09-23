import React, { useState, userEffect, useEffect } from 'react';

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
            Will be list of user cards
        </div>
        {/* Map through list of user data to return user cards */}
        </>
    )
}

export default UserList