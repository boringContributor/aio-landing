import { Title } from "../title"

const people = [
    {
      name: 'Patrick Rauner',
      role: 'Physiotherapeut',
      href: '/patrick.jpg'
    },
    {
        name: 'Andreas Mederer',
        role: 'Physiotherapeut',
        href: '/andreas.jpg'
    },
    {
        name: 'Jana Reiser',
        role: 'Physiotherapeutin',
        href: '/jana.jpg'
    },
  ]
  
  export const Team = () => {
    return (
      <section id="team">
        <div className="mx-auto max-w-7xl">
          <Title title='Unser Team' />
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img loading="lazy" className="aspect-square w-full rounded-2xl object-cover" src={person.href} alt={`Team Foto von ${person.name}`} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  