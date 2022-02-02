import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="grid grid-cols-1 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-4/5 sm:max-w-4xl sm:grid-cols-2 lg:grid-cols-4">
      <Main />
      <Details title="Income" />
      <Details title="Expense" />
    </div>
  );
}

export default App;
