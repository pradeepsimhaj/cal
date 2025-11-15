import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar date={new Date(2022, 9, 15)} />
    </div>
  );
}

export default App;
