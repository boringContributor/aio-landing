import { Team } from "@/lib/api"
import { SimpleLayout } from "../simple-layout"
import { RichText } from "@graphcms/rich-text-react-renderer"

type TeamProps = {
    team: Team[]
}
export default function Member(props: TeamProps) {

    return (
        <SimpleLayout id="team" title="Unser Team" >
            <div className="mx-auto max-w-7xl px-6 lg:px-4">
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {props.team.map((person) => (
                        <li key={person.name} className="flex flex-col gap-6 xl:flex-row list-disc items-center sm:items-stretch">
                            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.portrait.url} alt="" />
                            <div className="flex-auto">
                                {/* <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3> */}
                                {
                                    person.description?.raw ?  <div className="ml-2 text-base leading-7 text-gray-600"><RichText content={person.description?.raw} renderers={{
                                        ul: ({ children }) => <ul className="list-disc">{children}</ul>,
                                    }} /></div> : null
                                }
                               
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </SimpleLayout>
    )
}
