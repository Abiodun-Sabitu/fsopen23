const Courses = ({ courses }) => {
  //console.log(courses);
  // mapping to uniquely identify the course objects that would be inside the array
  const courseDetails = courses.map((course) => {
    //Destructuring each course object to narrow down to the parts and details for each
    const courseParts = course.parts;
    //console.log(courseParts);
    const partDetails = courseParts.map((part) => {
      // console.log(part.name, part.exercises);

      return (
        <div key={part.id}>
          <p>
            {part.name} {part.exercises}
          </p>
        </div>
      );
    });

    // mapping to uniquely access and identify each courses part exercises
    const exercises = courseParts.map((part) => {
      return part.exercises;
    });
    // console.log(exercises);

    // applying the reduce method to sum up all the number of exercises returned in the array above
    const totalExercises = exercises.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    //console.log(totalExercises);

    // Here is what the outermost map function returns
    return (
      <div key={course.id}>
        <h1>{course.name}</h1>
        {partDetails}
        <h2>total of {totalExercises} exercises</h2>
      </div>
    );
  });

  // Here is what the component returns the entire courseDetails
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseDetails}
    </div>
  );
};
export default Courses;
