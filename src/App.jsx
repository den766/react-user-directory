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

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <h1 className="message">loading users...</h1>;
  }

  if (error) {
    return <p className="message">{error}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">User-Directory</h1>

      <p className="subtitle">Search and explore team members</p>

      <input
        className="search-input"
        type="text"
        id="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>

      <p className="user-count">Showing {filteredUser.length} users</p>

      <div>
        {filteredUser.length === 0 ? (
          <p className="message">No users found. Try different keyword.</p>
        ) : (
          <ul className="user-list">
            {filteredUser.map((user) => (
              <li className="user-card" key={user.id}>
                <h3 className="user-name">{user.name}</h3>

                <p className="user-email">{user.email}</p>

                <p className="user-username">@{user.username}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
