import { Coaching } from '@/lib/api'
import { SimpleLayout } from '../simple-layout'
import { BentoGridItem, BentoGrid } from '../bento-grid'
import { useRouter } from 'next/router'



type CoachingProps = {
  coaching: Coaching[]
}


export default function CoachingSection(props: CoachingProps) {
  const router = useRouter()
  return (
    <SimpleLayout title="Coaching" id="coaching">
     <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {props.coaching.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description?.text}
          image={item.image}
          onClick={() => {
            router.push(`/coaching/${item.id}`)
          }}
          className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </SimpleLayout>
  )
}
