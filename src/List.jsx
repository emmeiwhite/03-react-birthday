export default function List({ people }) {
  return (
    <>
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
    </>
  )
}
