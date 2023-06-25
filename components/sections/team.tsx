import { Team } from "../../lib/api"
import { SimpleLayout } from "../simple-layout"


type TeamProps = {
  team: Team[]
}

export const TeamSection = (props: TeamProps) => {
  return (
    <SimpleLayout id="team" title="Unser Team" >
      <ul
        role="list"
        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {props.team.map((person) => (
          <li key={person.name} className='flex flex-col items-center'>
            <img loading="lazy" className="aspect-square w-3/4 rounded-full object-cover" src={person.portrait.url} alt={`Team Foto von ${person.name}`} />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 text-center">{person.name}</h3>
            {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}