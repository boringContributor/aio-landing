type SimpleLayoutProps = {
    title?: string,
    intro?: string,
    id: string,
    children: React.ReactNode,
    show?: boolean
}

export const SimpleLayout = ({ title, intro, children, id, show = true }: SimpleLayoutProps) => {
    return (
        <>
            {show ? <section id={id} className="mt-16 sm:mt-32">
                {(title || intro) && <header className="pt-10">
                    {title && <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl text-center sm:text-left">
                        {title}
                    </h1>}
                    {intro && <p className="mt-6 text-justify text-zinc-600">
                        {intro}
                    </p>}
                </header>}
                <div className="mt-16 sm:mt-20">{children}</div>
            </section> : null}
        </>
    )
}