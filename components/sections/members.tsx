import { Team } from "@/lib/api"
import { SimpleLayout } from "../simple-layout"
import { RichText } from "@graphcms/rich-text-react-renderer"

type TeamProps = {
    team: Team[]
}
export default function Member(props: TeamProps) {

    return (
        <SimpleLayout id="team" title="Unser Team" >
            <div className="mx-auto max-w-7xl">
                <div className="space-y-12 lg:space-y-16">
                    {props.team.map((person, index) => (
                        <div
                            key={person.name}
                            className={`group relative flex flex-col ${
                                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } gap-8 lg:gap-12 items-center`}
                        >
                            {/* Portrait */}
                            <div className="relative w-full max-w-sm lg:w-2/5 flex-shrink-0">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        src={person.portrait.url}
                                        alt={person.name}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl -z-10 opacity-50"></div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full lg:w-3/5">
                                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                                    {person.description?.raw ? (
                                        <div className="prose prose-lg max-w-none">
                                            <RichText
                                                content={person.description.raw}
                                                renderers={{
                                                    h3: ({ children }) => (
                                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                                            {children}
                                                        </h3>
                                                    ),
                                                    h4: ({ children }) => (
                                                        <h4 className="text-lg font-semibold text-red-700 mb-6">
                                                            {children}
                                                        </h4>
                                                    ),
                                                    p: ({ children }) => (
                                                        <p className="text-gray-700 leading-relaxed mb-4">
                                                            {children}
                                                        </p>
                                                    ),
                                                    ul: ({ children }) => (
                                                        <ul className="space-y-2 mt-6 list-none">
                                                            {children}
                                                        </ul>
                                                    ),
                                                    li: ({ children }) => (
                                                        <li className="flex items-baseline gap-3 text-gray-700">
                                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-700 mt-[0.45em]"></span>
                                                            <span className="leading-relaxed flex-1">{children}</span>
                                                        </li>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}
