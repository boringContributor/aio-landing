import Head from 'next/head'
import LinkIcon from '@heroicons/react/24/outline/LinkIcon'
import clsx from 'clsx'
import { SimpleLayout } from '../simple-layout'
import { Partner } from '../../lib/api'


function Card({ as: Component = 'div', className, children }: { as?: any; className?: string; children?: React.ReactNode }) {
    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items:center sm:items-start')}
        >
            {children}
        </Component>
    )
}

Card.Link = function CardLink({ children, ...props }: { children?: React.ReactNode; href?: string }) {
    return (
        <>
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95  opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
            <a {...props} target="_blank">
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{children}</span>
            </a>
        </>
    )
}

Card.Title = function CardTitle({ as: Component = 'h2', href, children }: { as?: any; href?: string; children?: React.ReactNode }) {
    return (
        <Component className="text-base font-semibold tracking-tight text-zinc-800 ">
            {href ? <Card.Link href={href}>{children}</Card.Link> : children}
        </Component>
    )
}

Card.Description = function CardDescription({ children }: { children?: React.ReactNode }) {
    return (
        <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
            {children}
        </p>
    )
}

type PartnerProps = {
    partner: Partner[]
}
export const PartnerSection = (props: PartnerProps) => {
    return (
        <>
            <Head>
                <title>Unsere Kooperationspartner</title>
                <meta
                    name="description"
                    content="Unsere Kooperationspartner"
                />
            </Head>
            <SimpleLayout
                id="partner"
                title="Unsere Kooperationspartner"
                intro="Wir arbeiten mit verschiedenen Kooperationspartnern zusammen. etc. etc.s"
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {props.partner.map((crtPartner) => (
                        <Card as="li" key={crtPartner.name}>
                            <div className="relative z-10 flex items-center justify-center">
                                <img
                                    src={crtPartner.logo.url}
                                    alt={crtPartner.name}
                                    className="max-h-12 w-full object-contain"
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 text-center sm:text-left">
                                <Card.Link href={crtPartner.website}>{crtPartner.name}</Card.Link>
                            </h2>
                            {crtPartner.description && <Card.Description>{crtPartner.description}</Card.Description>}
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-red-500 justify-center">
                                <LinkIcon className="h-5 w-5 flex-none" onClick={() => window.open(crtPartner.website)} />
                                <span className="ml-2">{crtPartner.website.split('www.')[1]}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
