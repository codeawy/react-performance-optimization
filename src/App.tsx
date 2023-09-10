import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/ui/Button";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [appCounter, setAppCounter] = useState(0);

  console.log(`<App /> rendered`);

  return (
    <main className="space-y-6">
      <h1 className="font-semibold text-yellow-500 mb-10">Performance & Optimization</h1>
      <div className="flex flex-col items-center">
        <h3>App counter: {appCounter}</h3>
        <Button onClick={() => setAppCounter(prev => prev + 1)}>Increase app counter</Button>
      </div>

      <Counter />

      <LoginForm />
    </main>
  );
};

export default App;
