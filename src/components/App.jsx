import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [myTime, setTime] = React.useState(time);
  setInterval(getTime, 1000);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{myTime}</h1>
    </div>
  );
}

export default App;
