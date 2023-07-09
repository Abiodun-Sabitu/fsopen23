import { useState } from "react";
const Button = ({ ...props }) => {
  console.log(props.feedback);
  return <button onClick={props.feedback}>{props.btnName}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    return setGood(good + 1);
  };
  const handleNeutralClick = () => {
    return setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    return setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button btnName="Good" feedback={handleGoodClick} />
      <Button btnName="Neutral" feedback={handleNeutralClick} />
      <Button btnName="Bad" feedback={handleBadClick} />
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
