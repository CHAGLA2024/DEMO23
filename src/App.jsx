import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/joke")
      .then((responce) => {
        setjokes(responce.data);
      })
      .catch((error) => {
        console.get(error);
      });
  });
  return (
    <>
      <h1>HI I AM HERE !</h1>
      <p>JOKES:{jokes.length}</p>

      {jokes.map((joke, idx) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
