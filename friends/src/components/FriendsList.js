import React, { useState, useEffect } from 'react';
import api from '../utils/api';

import FriendCard from './FriendCard';
import AddFriendForm from './AddFriendForm';


function FriendsList(props) {
    const [error, setError] = useState()
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api().get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(error => {
                console.log(error)
                setError('Unable to authenticate user.')
            })
    }, [error])

    return (

        <>
            <AddFriendForm />
            <h1>My Friends:</h1>

            {friends.map(friend => (
                <div key={friend.id}>
                    <FriendCard props={friend} />
                </div>
            ))}
        </>

    )
}
export default FriendsList;