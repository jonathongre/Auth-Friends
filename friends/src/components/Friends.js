import React, { useState, useEffect } from "react";
import  axiosWithAuth  from "../utils/axiosWithAuth";
import FriendsCard from './FriendsCard';
import AddFriend from './AddFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => getData(), []);
    function getData() {
      axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
          setFriends(res.data);
        })
        .catch(err => console.log(err.response));
    }
  return (
    <div className='friendsPage'>
        <AddFriend />
      <h1>Friends List</h1>
      <div className='friendsList'>
      {friends.length > 0
        ? friends.map(friend => <FriendsCard key={friend.id} friend={friend} />)
        : null}
        </div>
    </div>
  );
};

export default Friends;