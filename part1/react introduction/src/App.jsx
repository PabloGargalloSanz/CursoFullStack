const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const friends = [
    { name:'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <h1>Greetings</h1>
      <Hello name='George'  age = '20' />
      <Hello name='Daisy' age = {20 + 3} />

      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
    
  )
}

export default App