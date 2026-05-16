import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  console.log("render Phase");
  console.log(searchQuery);
  console.log(users);
  console.log(loading);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }

    
    }
      fetchUsers();
  }, []);

  if(loading){

     return <h1>loading users...</h1>
  }
  
  if(error){

     return <p>{error}</p>
  }

  if(users.length === 0){

     return <h1>no users found</h1>
  }

  return (
    <>
      <h1>User-Directory</h1>

      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>

      <div>
         <ul>
          {users.map((user)=> (

            <li key={user.id}>{user.name}</li>
          ))}
         </ul>
      </div>
    </>
  );
}

export default App;
