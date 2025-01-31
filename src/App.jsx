const Footer = () => {
  return (
    <div>
      MyFriends app created by <a href="https://github.com/GeorchitoChan">GeorchitoChan</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 }
  ]
  return (
    <div>
      <h1>My Friends</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends}</p>

      <Footer />
    </div>
  )
}

export default App
