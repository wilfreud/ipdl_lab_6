import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./components/Message";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Message name="John" job="Software Engineer" age={25} />
      <Message name="Jane" job="Doctor" age={30} />
      <Message name="Doe" job="Teacher" age={35} />

      <hr />

      <Team name="Bayern Munich" title={5} />
      <Team name="Real Madrid" title={13} />
      <Team name="Barcelona" title={0} />
    </div>
  );
}

export default App;
