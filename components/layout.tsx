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
                <meta
                    property="og:description"
                    content="Betriebliches Gesundheitsmanagement"
                />
                <meta
                    name="og:image"
                    content={
                        `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
                        }/api/og`
                    }
                />

                <meta
                    property="og:image"
                    content="/total_logo_color.svg"
                />
            </Head>
            <div className="bg-gradient-to-br from-red-50 via-red-50 to-red-200" >
                <Navigation />
                {props.children}
                <Footer />
            </div>
        </>
    )
}