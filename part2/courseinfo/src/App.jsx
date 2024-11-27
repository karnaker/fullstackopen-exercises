const Header = ({ courseName }) => {
  console.log('Header component received courseName:', courseName)
  return <h1>{courseName}</h1>
}

const Part = ({ part }) => {
  // Verify that we're receiving the expected data
  console.log('Part component received part:', part)

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log('Content component received parts:', parts)

  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  // Verify props
  console.log('Course component received course:', course)

  // Calculate the total number of exercises
  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('Current sum:', sum, 'Adding:', part.exercises)
    return sum + part.exercises
  }, 0) // The zero is the initial value of the sum

  console.log('Total exercises calculated:', totalExercises)

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total sum={totalExercises} />
    </div>
  )
}

// Total component displays the sum of exercises for a course
// Props:
//   sum: number - The total number of exercises to display
const Total = ({ sum }) => {
  console.log('Total component received sum:', sum)
  return <p><strong>Number of exercises {sum}</strong></p>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App