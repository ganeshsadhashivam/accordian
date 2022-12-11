import { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {question.map((ques) => {
            return <SingleQuestion key={ques.id} {...ques} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
