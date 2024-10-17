import { useState } from 'react'
import data from './data'

console.log(data)
const App = () => {
  // UI is the reflection of the state changing over time
  // Since state and UI are tightly coupled, we must decide on when to use data as state and when not to use

  // We must imagine that the data is being fetched from an API
  // Let's work upon initial render based on this state
  const [people, setPeople] = useState(data)
  return (
    <section className="container">
      <h1>{people.length} Birthdays Today</h1>

      {people.map(person => {
        const { id, name, image, age } = person
        return (
          <div
            className="person"
            key={id}
          >
            <img
              src={image}
              alt={name}
            />
            <h2>{name}</h2>
            <span>{age} years</span>
          </div>
        )
      })}

      <button className="btn">Clear All</button>
    </section>
  )
}
export default App
