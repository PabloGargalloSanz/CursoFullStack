const Header = ({ course }) => <h2>{course}</h2> 

const Part = ({ name, exercises}) => <p>{name} {exercises}</p>

const Content = ({ parts }) => (
      
  <div>
    {parts.map(part =>(
      <Part key={part.id} name={part.name} exercises={part.exercises} />

    ))}
  </div>
    
)

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <h4>Total of {total} exercises</h4>
    
}

export default Course