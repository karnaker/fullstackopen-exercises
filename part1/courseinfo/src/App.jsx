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

const Header = ({course}) => {
  console.log('Header - received course:', course)
  return (
    <div>
      <h1>{course}</h1> 
    </div> 
  )
}

const Content = ({ parts }) => {
  console.log('Content - received parts:', parts)
  console.log('Content - number of part:', parts.length)
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  console.log('Total - received parts:', parts)
  console.log('Total - calculated sum:', totalExercises)
  console.log('Total - exercises breakdown:', parts.map(part => part.exercises).join(' + '))
  
  return (
    <div>
      <p>Number of exercises {totalExercises}</p> 
    </div> 
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  console.log('App - course:', course)
  console.log('App - parts:', parts)
  console.log('App - parts array length:', parts.length)
  console.log('App - first part:', parts[0])

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App