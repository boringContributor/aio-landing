import { CheckIcon } from '@heroicons/react/20/solid'

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
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
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
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unser Portfolio</p>
            <p className="break-all mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-red-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
