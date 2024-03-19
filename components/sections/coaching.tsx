import { Coaching } from '@/lib/api'
import { SimpleLayout } from '../simple-layout'
import { BentoGridItem, BentoGrid } from '../bento-grid'
import { useRouter } from 'next/router'



type CoachingProps = {
  coaching: Coaching[]
}


const intro = 'Ein Teil unseres Gesundheitstag-Programms aus max. 120minütigen erlebniszentrierten Kurzvorträgen dient in erster Linie dazu, Ihre Mitarbeiter für das Thema „Gesundheit“ zu begeistern. Darüber hinaus motivieren wir die Teilnehmer über ihre eigene Gesundheit nachzudenken und etwas in Ihrem Leben zu verändern. Hierzu vermitteln wir neueste wissenschaftliche und alltagsrelevante Kenntnisse auf spannende und packende Art und Weise. '


export default function Coaching(props: CoachingProps) {
  const router = useRouter()
  return (
    <SimpleLayout title="Coaching" id="coaching" intro={intro}>
     <BentoGrid className="max-w-6xl mx-auto">
      {props.coaching.map((item, i) => ( 
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description?.text}
          image={item.image}
          onClick={() => {
            router.push(`/coaching/${item.id}`)
          }}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </SimpleLayout>
  )
}
