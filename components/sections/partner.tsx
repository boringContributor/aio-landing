// @eslint-ignore eslint@next/next/no-img-element

import { Container } from "../container"

const partners = [
  {
    name: '360 Grad Werbung',
    href: '/partner/360.png',
    redirectTo: 'https://360grad-werbung.de/'
  },
  {
    name: 'Physioteam Lappersdorf',
    href: '/partner/aok.png',
    redirectTo: 'https://www.physioteam-lappersdorf.de/'
  },
  {
    name: 'Physioteam Lappersdorf',
    href: '/partner/pt.png',
    redirectTo: 'https://physioteam-lappersdorf.de'
  },
  {
    name: 'Idea Werbewelt',
    href: '/partner/idea.png',
    redirectTo: 'https://idea-werbewelt.de'
  }
]

export const Partner = () => {
  return (
    <Container id='partner' title="Unsere Kooperationspartner">
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {
          partners.map(partner => <img
            key={partner.name}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:cursor-pointer"
            src={partner.href}
            alt={partner.name}
            width={158}
            height={48}
            onClick={() => window.open(partner.redirectTo)}
          />
          )
        }

      </div>
    </Container>
  )
}
