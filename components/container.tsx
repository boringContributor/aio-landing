import { ReactNode } from "react"

type ContainerProps = {
    id?: string,
    title: string,
    children: ReactNode
}

export const Container = (props: ContainerProps) => {
    return (
        <section id={props?.id} aria-label={props.title} className="py-10">
            <div className="mx-auto max-w-7xl">
                <div className="py-2">
                    <h2 className="text-center tracking-tight text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
                        {props.title}
                    </h2>
                </div>
                <div className="py-5">
                    {props.children}
                </div>
            </div>
        </section>
    )
}