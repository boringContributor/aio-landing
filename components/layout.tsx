import Head from "next/head"
import { Footer } from "./footer"
import { Navigation } from "./navigation"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>All In One Gesundheitsmanagement</title>
                <meta
                    name="description"
                    content="All In One Gesundheitsmanagement"
                />
                <meta property="og:title" content="All In One Gesundheitsmanagement" />
                <meta property="og:url" content="https://www.aio-gesundheitsmanagement.de/" />
                <meta
                    property="og:description"
                    content="Betriebliches Gesundheitsmanagement"
                />
                <meta
                    name="og:image"
                    content={`https://www.aio-gesundheitsmanagement.de/api/og`}
                />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-300" >
                <Navigation />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
                 {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}