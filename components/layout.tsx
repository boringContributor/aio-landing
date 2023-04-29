import { Navigation } from "./navigation"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Navigation />
            <div  />
            {props.children}
        </div>
    )
}