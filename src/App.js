import { useEffect,useState } from "react";
import { getPosts,getRandomUser } from "./api";
import PostCard from "./Components/PostCard";
import './App.css';
import UserCard from "./Components/PostCard";

function App() {
  const [data,setData]= useState(null);
  const [userData,setUserData] = useState(null);

//why useeffect- i wanted data when lifecycle change from mounted to update
  
  useEffect(()=> {
    getPosts().then((posts)=> setData(posts));
  },[])


  useEffect(()=> {
    getRandomUser().then((user)=> setUserData(user.results[0]));
  }) 

  const refresh = () => {
      getRandomUser().then((user) => setUserData(user.results[0]));
  }
 console.log(userData);
  return (
    <div className="App">
      {userData && <UserCard data= {userData}/> }
      <button onClick={refresh}> Refresh User</button>
      { data ? 
          ( data.map((e) => <PostCard title={e.title} body={e.title} />) 
          ) : (<p> no data available</p>)
      }
    </div>
  );
}

export default App;
