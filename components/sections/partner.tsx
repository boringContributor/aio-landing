import Head from 'next/head'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { SimpleLayout } from '../simple-layout'
import { Partner } from '../../lib/api'

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
            >
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {props.partner.map((crtPartner) => (
                        <a
                            key={crtPartner.name}
                            href={crtPartner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
                        >
                            {/* Logo Container */}
                            <div className="relative flex items-center justify-center h-24 mb-6">
                                <img
                                    src={crtPartner.logo.url}
                                    alt={crtPartner.name}
                                    className="max-h-20 max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            {/* Partner Name */}
                            <h3 className="text-lg font-bold text-gray-900 text-center mb-3 group-hover:text-red-700 transition-colors">
                                {crtPartner.name}
                            </h3>

                            {/* Description */}
                            {crtPartner.description && (
                                <p className="text-sm text-gray-600 text-center leading-relaxed mb-4 flex-grow">
                                    {crtPartner.description}
                                </p>
                            )}

                            {/* Link indicator */}
                            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-red-700 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100">
                                <span>Website besuchen</span>
                                <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>

                            {/* Hover accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/30 group-hover:to-red-100/20 transition-all duration-300 pointer-events-none rounded-2xl" />
                        </a>
                    ))}
                </div>
            </SimpleLayout>
        </>
    )
}
