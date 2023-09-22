import React from 'react';
import './App.css';

function App() {
  const names = ["Dimych", "Sveta", "Katya", "Viktor", "Ignat"]
  const users = [{name: "Dimych"}, {name: "Sveta"}, {name: "Katya"}, {name: "Viktor"}, {name: "Ignat"}]
  const liElements = users.map((u, index) => <li key={index}>u.name</li>)

  return (
    <div className="App">
      {liElements}
    </div>
  );
}

export default App;
