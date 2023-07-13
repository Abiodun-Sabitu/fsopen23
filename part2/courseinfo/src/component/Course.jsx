const Course = ({ course }) => {
  const courseParts = course.parts;
  const courseName = <h1>{course.name}</h1>;
  //console.log(courseName);
  const courseDetails = courseParts.map((part) => {
    //console.log(description.id);
    return (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    );
  });
  const exercises = courseParts.map((part) => part.exercises);
  const totalExercises = exercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(totalExercises);

  return (
    <div>
      {courseName}
      {courseDetails}
      <h3>total of {totalExercises} exercises</h3>
    </div>
  );
};
export default Course;
