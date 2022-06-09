import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="wrap">
      <div className="circle"></div>
      <div className="container">
        <Display />

        <ButtonArea />
      </div>
    </div>
  );
}

export default App;
