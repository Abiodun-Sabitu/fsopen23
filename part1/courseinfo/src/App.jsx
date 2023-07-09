const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // list course details
  const topics = course.parts;
  // console.log(topics);
  const courseDetails = topics.map((topic, index) => (
    <p key={index}>
      {topic.name} {topic.exercises}
    </p>
  ));

  //Sum total Number of exercises
  const eachExercise = topics.map((topic, index) => topic.exercises);
  const totalExercises = eachExercise.reduce(
    (total, exercise) => total + exercise,
    0
  );

  return (
    <>
      <h1>{course.name}</h1>
      <div>
        {courseDetails}
        <p>Number of exercises are {totalExercises} </p>
      </div>
    </>
  );
};

export default App;
