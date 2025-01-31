const Header = (course) => {
  console.log(course)
  return (
    <div>
      <h1>{course.descripcion}</h1>
    </div>
  )
}

const Content = (exercises) => {
  console.log(exercises)
  return (
    <div>
      <p>{exercises.exercises[0].part} {exercises.exercises[0].exercise}</p>
      <p>{exercises.exercises[1].part} {exercises.exercises[1].exercise}</p>
      <p>{exercises.exercises[2].part} {exercises.exercises[2].exercise}</p>
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
      <p>Number of exercises exercises {exercises.totales[0] + exercises.totales[1] + exercises.totales[2]}</p>
    </div>
  )
}


const Footer = () => {
  return (
    <div>
      CourseInformation App created by <a href="https://github.com/GeorchitoChan">GeorchitoChan</a>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]

  const totales = exercises.map(item => item.exercise);

  return (
    <div>
      <Header descripcion={course} />
      <Content exercises={exercises} />
      <Total totales={totales} />

      <Footer />
    </div>
  )
}

export default App
