import React, { useState } from 'react';
import api from '../utils/api';

const AddFriendForm = (props) => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = (e) => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const axios = api();
        console.log(addFriend)
        axios.post('/api/friends', addFriend)
            .then(res => {
                console.log(e.persist())
                setAddFriend({
                    ...addFriend,
                    name: '',
                    age: '',
                    email: '',
                })
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={addFriend.name}
                placeholder="Friend's Name"
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={addFriend.age}
                placeholder="Friend's Age"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={addFriend.email}
                placeholder="Friend's email"
                onChange={handleChange}
            />
            <button type="submit">Add Friend</button>
        </form>
    )
}

export default AddFriendForm;