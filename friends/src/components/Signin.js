import React from 'react';


function Signin(props) {
    return (
        <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="password" />

            <button type='submit'>Sign In</button>
        </form>
    )
}

export default Signin