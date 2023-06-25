import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../accordion'
import { SimpleLayout } from '../simple-layout'

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
    <SimpleLayout id="portfolio" title='Portfolio' intro='Wir bieten eine vielzahl an Leistungen an etc'>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
                 <Accordion type="multiple" key={feature.name}>
                 <AccordionItem value={feature.name}>
                   <AccordionTrigger >{feature.name}</AccordionTrigger>
                   <AccordionContent>
                    {feature.description}
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
            ))}
          </dl>
    </SimpleLayout>
  )
}

