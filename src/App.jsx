import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <h1>User-Directory</h1>

      <input type="text" id="search" placeholder="Search"></input>

      <div>
        <p>users</p>
      </div>
    </>
  );
}

export default App;
