const Part = ({ part }) => {
  console.log('Part props:', {part} )
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Header = (props) => {
  console.log('Header props:', props)
  return (
    <div>
      <h1>{props.course}</h1> 
    </div> 
  )
}

const Content = ({ part1, part2, part3 }) => {
  console.log('Content props:', { part1, part2, part3 })
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div> 
  )
}

const Total = ({ part1, part2, part3 }) => {
  console.log('Total props:', { part1, part2, part3 })
  return (
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p> 
    </div> 
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  console.log('course:', course)
  console.log('part1:', part1)
  console.log('part2:', part2)
  console.log('part3:', part3)

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App