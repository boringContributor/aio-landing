type TitleProps = {
    title: string
}
export const Title = (props: TitleProps) => {
    return (
        <h2 className="text-center tracking-tight text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
            {props.title}
        </h2>
    )
}