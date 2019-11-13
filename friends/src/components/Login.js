import React, { useState } from 'react';
import axios from 'axios';


function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        //doesn't need default bc there is no behavior that we need to prevent
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/api/login', data)
            .then(res => {
                // console.log(res.data)
                localStorage.setItem('payload', res.data.payload)
            })
            .catch(err => {
                console.log(err)
                setError('Unable to authenticate user.')
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}

            <input type="text" name="username" placeholder="Username"
                value={data.username} onChange={handleChange} />

            <input type="password" name="password" placeholder="password"
                value={data.password} onChange={handleChange} />

            <button type='submit'>Log In</button>
        </form>
    )
}

export default Login