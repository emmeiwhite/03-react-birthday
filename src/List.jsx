import Person from './Person'
export default function List({ people }) {
  return (
    <>
      {people.map(person => (
        <Person
          {...person}
          key={person.id}
        />
      ))}
    </>
  )
}
