import { useState } from "react";
const Button = ({ btnName, feedback }) => {
  //console.log(btnName, feedback);
  return <button onClick={feedback}>{btnName}</button>;
};

const Statistics = (props) => {
  const stats = [].concat(props);
  console.log(stats);
  return stats.map((stat, index) => {
    return (
      <div key={index}>
        <p>Good: {stat.good}</p>
        <p>Neutral: {stat.neutral}</p>
        <p>Bad: {stat.bad}</p>
        <p>All: {stat.all}</p>
        <p>Average: {stat.average}</p>
        <p>Positive Percentage: {stat.positivePercentage} %</p>
      </div>
    );
  });
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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={totalFeedback}
        average={average}
        positivePercentage={positives}
      />
    </div>
  );
};

export default App;
