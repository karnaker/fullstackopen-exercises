// Courses.jsx
import React from 'react'

// Renders a header for each course
const CourseHeader = ({ courseName }) => {
  console.log('CourseHeader component received courseName:', courseName)
  return <h2>{courseName}</h2>
}

// Renders a single part of a course with its name and number of exercises
const Part = ({ part }) => {
  // Verify that we're receiving the expected data
  console.log('Part component received part:', part)

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Renders all parts of a course
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

// Displays the total number of exercises for a course
const Total = ({ sum }) => {
  console.log('Total component received sum:', sum)
  return <p><strong>total of {sum} exercises</strong></p>
}

// Renders a complete course with its header, content, and total number of exercises
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

// Main component that renders all courses
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

export default Courses