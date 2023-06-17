import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../accordion'
import { Title } from '../title'

const features = [
  {
    name: 'Impuls Vorträge (Dauer 60-120 Min)',
    description: 'Bewegung, Ernährung, Entspannung, Schlaf, Augengesundheit, positive Gewohnheiten, Motivation, Ergonomie, Work – Life – Balance, Stress, Männergesundheit',
  },
  { name: 'Seminare/Workshops (halber Tag – 2 Tage)', description: 'Moderne Rückenschule, Ergonomie am Büroarbeitsplatz, Augengesundheit, Workshop für artgerechte Ernährung, Calm Down - Entspannungsseminar, Pausenmentlität integrieren, Heben und Tragen, Doterra Öle' },
  {
    name: 'Kurse',
    description: 'Yoga, Pilates, Rückenschule, Augentraining, Entspannung, Laufschule/Training, Nordic Walking, Faszientraining, Bewegte Pause, Gebärdensprache/Zwergensprache für Kinder und Erwachsene',
  },
  {
    name: 'Betriebliches Gesundheitsmanagement (BGM)', 
    description: 'Ein nachhaltiges Betriebliches Gesundheitsmanagement in Ihrem Unternehmen zu integrieren ist heutzutage von sehr hohem Stellenwert. Denn nur wenn Ihre MitarbeiterInnen gesund und motiviert sind können sie ihr volles Potential ausschöpfen. Außerdem erhöhen Sie die Zufriedenheit Ihrer Mitarbeiter, vermindern die Anzahl der Arbeitsunfälle und steigern die Attraktivität Ihres Unternehmens. Ein gesundes BGM beinhaltet:ArbeitsschutzGesundheitsschutzBetriebliches Eingliederungsmanagement (BEM)PersonalentwicklungOrganisationsentwicklungBetriebliche Gesundheitsförderung § 20 PräventionIn 7 Handlungsschritten werden wir Ihnen helfen das BGM aufzubauen bzw. zu optimieren, um ein gesundes Umfeld in Ihrem Betrieb zu schaffen.',
  },
  { name: 'Coaching', description: 'Ernährungscoaching, Abnehmen, Personal Training' },
  {
    name: 'Teambuilding',
    description: 'Yoga Wochenende/Retreat, Digital Detox, Kochkurs, Boot–Camp',
  }
]

export const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Title title='Unser Portfolio' />
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
                 <Accordion type="multiple" key={feature.name}>
                 <AccordionItem value={feature.name}>
                   <AccordionTrigger >{feature.name}</AccordionTrigger>
                   <AccordionContent>
                   {feature.description}
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
              // <div key={feature.name}>
              //   <dt className="font-semibold text-gray-900">{feature.name}</dt>
              //   <dd className="mt-1 text-gray-600">{feature.description}</dd>
              // </div>
            ))}
          </dl>
        </div>
      </div>
  )
}

