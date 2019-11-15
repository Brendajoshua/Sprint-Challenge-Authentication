import React, { useState, useEffect } from "react";
import axios from "axios";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3300/api/jokes", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(res => {
        setJokes(res.data);
      });
  }, [jokes]);

  return (
    <div>
      {jokes.map(joke => (
        <div key={joke.id}>
          <h2>{joke.joke}</h2>
        </div>
      ))}
    </div>
  );
};

export default Jokes;