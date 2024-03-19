import { Workshop } from '@/lib/api'
import { SimpleLayout } from '../simple-layout'
import { BentoGrid, BentoGridItem } from '../bento-grid'
import { useRouter } from 'next/router'


type WorkshopProps = {
  seminars: Workshop[]
}


const intro = 'Ein Teil unseres Gesundheitstag-Programms aus max. 120minütigen erlebniszentrierten Kurzvorträgen dient in erster Linie dazu, Ihre Mitarbeiter für das Thema „Gesundheit“ zu begeistern. Darüber hinaus motivieren wir die Teilnehmer über ihre eigene Gesundheit nachzudenken und etwas in Ihrem Leben zu verändern. Hierzu vermitteln wir neueste wissenschaftliche und alltagsrelevante Kenntnisse auf spannende und packende Art und Weise. '


export default function Workshop(props: WorkshopProps) {
  const router = useRouter()
  return (
    <SimpleLayout title="Seminare" id="seminare" intro={intro}>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[13rem]">
        {props.seminars.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            people={[]}
            description={item.description?.text}
            onClick={() => {
              router.push(`/seminar/${item.id}`)
            }}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </SimpleLayout>
  )
}