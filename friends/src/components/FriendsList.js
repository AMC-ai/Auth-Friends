import React, { useState, useEffect } from 'react';
import api from '../utils/api';


function FriendsList(props) {
    const [error, setError] = useState()
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api().get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(error)
                setError('Unable to authenticate user.')
            })
    }, [])

    return (

        <>
            {/* <AddFriend /> */}
            <h1>My Friends:</h1>

            {friends.map(friend => (
                <div key={friend.id}>
                    {/* <Friend banana={friend} /> */}
                </div>
            ))}
        </>

    )
}
export default FriendsList;