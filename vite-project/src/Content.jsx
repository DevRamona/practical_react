

export default function Content({persons, messages}) {
    return (
        <div>
            <h1>{persons.name}</h1>
            <h2>{persons.id}</h2>
            <h3>{persons.age}</h3>
            <h4>{persons.isMarried}</h4>
            <div>{messages}</div>

        </div>
    )
}