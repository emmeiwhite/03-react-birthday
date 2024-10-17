import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  // UI is the reflection of the state changing over time
  // Since state and UI are tightly coupled, we must decide on when to use data as state and when not to use

  // We must imagine that the data is being fetched from an API
  // Let's work upon initial render based on this state
  const [people, setPeople] = useState(data)

  function clearAll() {
    setPeople([])
  }

  function reset() {
    setPeople(data)
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>

        <List people={people} />

        <button
          className="btn btn-block"
          onClick={people.length ? clearAll : reset}
        >
          {people.length ? 'Clear All' : 'Reset'}
        </button>
      </section>
    </main>
  )
}
export default App
