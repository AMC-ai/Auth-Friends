import React from 'react';

const FriendCard = ({ props }) => {
    return (
        <>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </>
    )
}

export default FriendCard;