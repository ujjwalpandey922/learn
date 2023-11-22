// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="w-full flex">
      <Sidebar />
      <header className="flex flex-col w-full px-8 py-4 h-screen">
        <Header />
        <Main />
      </header>
    </main>
  );
}

export default App;
