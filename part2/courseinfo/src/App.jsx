const MainHeader = ({ title }) => {
  console.log('MainHeader component received title:', title)
  return <h1>{title}</h1>
}

const CourseHeader = ({ courseName }) => {
  console.log('CourseHeader component received courseName:', courseName)
  return <h2>{courseName}</h2>
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
      <CourseHeader courseName={course.name} />
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
  return <p><strong>total of {sum} exercises</strong></p>
}

const Courses = ({ courses }) => {
  console.log('Courses component received courses:', courses)

  return (
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <MainHeader title='Web development curriculum' />
      <Courses courses={courses} />
    </div>
  )
}

export default App