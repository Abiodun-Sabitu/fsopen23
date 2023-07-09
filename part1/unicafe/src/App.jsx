import { useState } from "react";
const Button = ({ btnName, feedback }) => {
  //console.log(btnName, feedback);
  return <button onClick={feedback}>{btnName}</button>;
};

const StatisticLine = ({ text, value }) => {
  //console.log(text, value);
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Button functions passed as props
  const handleGoodClick = () => {
    return setGood(good + 1);
  };
  const handleNeutralClick = () => {
    return setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    return setBad(bad + 1);
  };

  // Computation for total, average and positive percentage numbers of feedbacks received
  const totalFeedback = good + neutral + bad;
  const average = totalFeedback / 3;
  const positives = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button btnName="Good" feedback={handleGoodClick} />
      <Button btnName="Neutral" feedback={handleNeutralClick} />
      <Button btnName="Bad" feedback={handleBadClick} />
      <h1>Statistics</h1>
      {/* show stats only when feedback has been given */}
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="All" value={totalFeedback} />
              <StatisticLine text="Average" value={`${average.toFixed(1)}`} />
              <StatisticLine
                text="PositivePercentage"
                value={`${positives.toFixed(1)} %`}
              />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
