import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="grid w-4/5 max-w-4xl grid-cols-1 gap-2 px-4 py-3 mx-auto my-3 sm:grid-cols-2">
      <Main />
      <Details title="Income" />
      <Details title="Expense" />
    </div>
  );
}

export default App;
