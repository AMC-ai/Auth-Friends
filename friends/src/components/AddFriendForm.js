import React, { useState } from 'react';
import api from '../utils/api';

const AddFriendForm = (props) => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: 0,
        email: '',
    })

    const handleChange = (e) => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.prvenetDefault()
        api().post('/friends', addFriend)
            .then(res => {
                console.log(e.target)
                setAddFriend({
                    ...addFriend,
                    name: '',
                    age: 0,
                    email: '',
                })
            })
            .catch(err => console.error(err));
    }

}