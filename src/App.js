import React from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

function App() {
  const addNinja = (ninja) => {
    console.log(ninja);
  }
  const ninjas = [
    { name: "Ryu", age: 30, belt: "black", id: 1 },
    { name: "Yoshi", age: 20, belt: "green", id: 2 },
    { name: "Benedict Cumberbatch", age: 43, belt: "Old black", id: 3 }
  ];
  return (
    <div className="App">
      <h1>My first React app</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={ninjas}/>
      <AddNinja addNinja={addNinja}/>
    </div>
  );
}

export default App;