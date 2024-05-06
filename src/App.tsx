import "./App.css";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message name="John" job="Software Engineer" age={25} />
      <Message name="Jane" job="Doctor" age={30} />
      <Message name="Doe" job="Teacher" age={35} />
    </div>
  );
}

export default App;
