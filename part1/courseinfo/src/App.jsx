
const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises}) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      <Part name = {parts[0].name} exercises = {parts[0].exercises} />
      <Part name = {parts[1].name} exercises = {parts[1].exercises} />
      <Part name = {parts[2].name} exercises = {parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    
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

  return (
    
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App