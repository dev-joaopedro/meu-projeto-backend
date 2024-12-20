import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Erro ao conectar ao backend:", err));
  }, []);

  return (
    <div>
      <h1>Frontend React</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
