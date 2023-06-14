import logo from "./logo.svg";
import "./App.css";
import useSound from "use-sound";
import track from "./assets/sounds/new-track.wav";

function App() {
  const [play] = useSound(track);

  return <button onClick={play}>Play!</button>;
}

export default App;
