import Head from 'next/head'
import Image from 'next/image'
import logoPt from'../../public/partner/pt.png'
import logoIdea from '../../public/partner/idea.png'
import logoAok from '../../public/partner/aok.png'
import logo360 from '../../public/partner/360.png'
import LinkIcon from '@heroicons/react/24/outline/LinkIcon'
import clsx from 'clsx'
import { SimpleLayout } from '../simple-layout'


function Card({ as: Component = 'div', className, children }: { as?: any; className?: string; children?: React.ReactNode }) {
    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start')}
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

const projects = [
    {
        name: '360 Grad Werbung',
        description:
            'Creating technology to empower civilians to explore space on their own terms.',
        link: { href: 'https://360grad-werbung.de/', label: '360grad-werbung.de' },
        logo: logo360,
    },
    {
        name: 'Idea Werbewelt',
        description:
            'Real-time video streaming library, optimized for interstellar transmission.',
        link: { href: 'https://idea-werbewelt.de', label: 'idea-werbewelt.de' },
        logo: logoIdea,
    },
    {
        name: 'Physioteam Lappersdorf',
        description:
            'The operating system that powers our Planetaria space shuttles.',
        link: { href: 'https://www.physioteam-lappersdorf.de/', label: 'physioteam-lappersdorf.de' },
        logo: logoPt,
    },
    {
        name: 'Aok Bayern',
        description:
            'The schematics for the first rocket I designed that successfully made it to orbit.',
        link: { href: 'https://www.aok.de/pk/bayern/', label: 'aok.de/pk/bayern' },
        logo: logoAok,
    },
]

export const Partner = () => {
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
                title="Unsere Kooperationspartner"
                intro="Wir arbeiten mit verschiedenen Kooperationspartnern zusammen. etc. etc.s"
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div className="relative z-10 flex items-center justify-center">
                                <Image
                                    src={project.logo}
                                    alt={project.name}
                                    className="max-h-12 w-full object-contain"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800">
                                <Card.Link href={project.link.href}>{project.name}</Card.Link>
                            </h2>
                            <Card.Description>{project.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-red-500 ">
                                <LinkIcon className="h-5 w-5 flex-none" onClick={() => window.open(project.link.href)} />
                                <span className="ml-2">{project.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
