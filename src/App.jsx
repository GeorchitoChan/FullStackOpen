const Header = (title) => {
  return (
    <div>
      <h1>{title.title}</h1>
    </div>
  )
}

const Part = (part) => {
  return (
      <div>
        <p>{part.part.name} {part.part.exercises}</p>
      </div>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]} />
      <Part part={parts.parts[2]} />
    </div>
  )
}

const Total = (parts) => {
  console.log(parts)
  const total = parts.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <p>Number of exercises exercises {total} </p>
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
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer />
    </div>
  )
}

export default App
