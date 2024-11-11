const Part = ({ part }) => {
  console.log('Part - received part:', part)
  console.log('Part - name:', part.name)
  console.log('Part - exercises:', part.exercises)
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Header = ({ course }) => {
  console.log('Header - received course object:', course)
  console.log('Header - course name:', course.name)
  return (
    <div>
      <h1>{course.name}</h1> 
    </div> 
  )
}

const Content = ({ course }) => {
  console.log('Content - received course:', course)
  console.log('Content - course name:', course.name)
  console.log('Content - parts array:', course.parts)
  console.log('Content - number of part:', course.parts.length)
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const Total = ({ course }) => {
  const totalExercises = course.parts[0].exercises +
                        course.parts[1].exercises +
                        course.parts[2].exercises

  console.log('Total - received course:', course)
  console.log('Total - course name:', course.name)
  console.log('Total - parts array:', course.parts)
  console.log('Total - calculated sum:', totalExercises)
  console.log('Total - exercises breakdown:', `$course.parts[0].exercises) + ${course.parts[1].exercises} + ${course.parts[2].exercises}`)
  
  return (
    <div>
      <p>Number of exercises {totalExercises}</p> 
    </div> 
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log('App - course object:', course)
  console.log('App - course name:', course.name)
  console.log('App - parts array:', course.parts)
  console.log('App - number of parts:', course.parts.length)
  console.log('App - first part:', course.parts[0])

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App