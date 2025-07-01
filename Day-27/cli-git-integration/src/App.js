import { useEffect, useState } from "react";
import Greetings from "./components/Greetings";
import Userinfo from "./components/Userinfo";
import FriendList from "./components/FriendList";

function App() {
  const [user,setUser] = useState(null);
  const [friends,setFriends] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(data=>setUser(data))
    .catch(err=>console.error("Failed to fetch user:",err));

    fetch("http://localhost:5000/friends")
    .then(res => res.json())
    .then(data => setFriends(data))
    .catch(err=>console.error("Failed to fetch Friends:",err));
  },[]);

  if(!user) return <p>Loading...</p>;
  return (
      <div className="container mt-4">
          <Greetings name={user.username} />
          <Userinfo user={user} />
          <FriendList friends={friends} />

      </div>
  );
}

export default App;
