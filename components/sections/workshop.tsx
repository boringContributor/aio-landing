import { Workshop } from '@/lib/api'
import { SimpleLayout } from '../simple-layout'
import { BentoGrid, BentoGridItem } from '../bento-grid'
import { useRouter } from 'next/router'


type WorkshopProps = {
  seminars: Workshop[]
}


const intro = 'Unsere Seminare und Workshops können von einem halben Tag und bis zu zwei Tagen gehen. Dabei können wir die Dauer gerne individuell für Sie abstimmen und anpassen. Des Weiteren gibt es auch die Möglichkeit Gesundheitstage und Gesundheitswochen mit unterschiedlichen Workshops, Kursen und Impulsvorträgen zu planen.'

export default function WorkshopSection(props: WorkshopProps) {
  const router = useRouter()
  return (
    <SimpleLayout title="Seminare und Workshops" id="seminare" intro={intro}>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem]">
        {props.seminars.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            people={[]}
            description={item.description?.text}
            onClick={() => {
              router.push(`/seminar/${item.id}`)
            }}
            className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </SimpleLayout>
  )
}