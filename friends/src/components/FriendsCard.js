import React from "react";

const FriendsCard = ({ friend }) => {
    console.log('Card: ', friend)
  return (
    <div>
      <div>
          <h2>{friend.name}</h2>
          <h3>{friend.age} years old</h3>
          <h3>{friend.email}</h3>
      </div>
    </div>
  );
};

export default FriendsCard;