import { Course, Presentation } from '@/lib/api'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { SimpleLayout } from '../simple-layout'


type PresentationProps = {
  presentation: Presentation[]
}


const intro = 'Ein Teil unseres Gesundheitstag-Programms aus max. 120minütigen erlebniszentrierten Kurzvorträgen dient in erster Linie dazu, Ihre Mitarbeiter für das Thema „Gesundheit“ zu begeistern. Darüber hinaus motivieren wir die Teilnehmer über ihre eigene Gesundheit nachzudenken und etwas in Ihrem Leben zu verändern. Hierzu vermitteln wir neueste wissenschaftliche und alltagsrelevante Kenntnisse auf spannende und packende Art und Weise. '


export default function Presentation(props: PresentationProps) {
  return (
    <SimpleLayout title="Vorträge" id="vortrag" intro={intro}>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {props.presentation.map((feature) => (
          <li key={feature.title} className="col-span-1 divide-y border border-gray-300 divide-gray-200 rounded-lg shadow-sm bg-white hover:border-gray-400">
            <div className="flex items-center justify-center space-x-6 p-6">
              <h3 className="text-center text-base truncate font-medium text-gray-900">{feature.title}</h3>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200  cursor-pointer">
                <Link
                  href={`/vortrag/${feature.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
