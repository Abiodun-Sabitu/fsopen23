const Header = (props) => {
  // console.log(props);
  return <p>{props.courseTitle}</p>;
};
const Content = ({ ...props }) => {
  //console.log(props.part1.name);
  return (
    <>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  );
};
const Total = ({ totalExercises }) => {
  console.log(totalExercises);
  return <p>Number of exercises is {totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const sum = part1.exercises + part2.exercises + part3.exercises;
  //console.log(sum);

  return (
    <div>
      <Header courseTitle={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalExercises={sum} />
    </div>
  );
};

export default App;
