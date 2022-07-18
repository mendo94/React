import IncrementDecrementCounter from "./components/IncrementDecrementCounter";
import DisplayCounter from "./components/DisplayCounter";
import AddSubtractCounter from "./components/AddSubtractCounter";

function App(props) {
  return (
    <div>
      <DisplayCounter />
      <IncrementDecrementCounter />
      <br />
      <AddSubtractCounter />
    </div>
  );
}

export default App;
