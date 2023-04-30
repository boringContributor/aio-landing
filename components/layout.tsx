import { Footer } from "./footer"
import { Navigation } from "./navigation"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="bg-gradient-to-br from-red-50 via-white to-red-200" >
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}