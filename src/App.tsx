import BookByen from "./components/BookByen";

function App() {
  return (
    <div className="App">
      {/* Please run $ yarn storybook */}
      <BookByen useLocalUrl={true} />
    </div>
  );
}

export default App;
