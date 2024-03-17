import { Course } from '@/lib/api'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { SimpleLayout } from '../simple-layout'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../accordion'
import { RichText } from '@graphcms/rich-text-react-renderer'


type CourseProps = {
  courses: Course[]
}


export default function Courses(props: CourseProps) {
  return (
    <SimpleLayout title="Kurse" id="kurse">
      <div className='grid sm:grid-cols-2 gap-5'>
      {
             props.courses.map((course) => (
              <Accordion type="multiple">
                <AccordionItem value={course.title}>
                  <AccordionTrigger><Test course={course} /></AccordionTrigger>
                  <AccordionContent>
                    <RichText content={course.description?.raw} renderers={{
                      ul: ({ children }) => <ul className="list-disc">{children}</ul>,
                      ol : ({ children }) => <ol className="list-decimal">{children}</ol>
                    }} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))
      }
       </div>
    </SimpleLayout>
  )
}


const Test = (props: { course: Course }) => <li
  className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
>
  <div>
    <p className="text-sm font-semibold leading-6 text-gray-900">
      <a className="hover:underline">
        {props.course.title}
      </a>
    </p>
  </div>
  <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
    <div className="flex -space-x-0.5">
      <dt className="sr-only">Commenters</dt>
      {props.course.people.map((p) => (
        <dd key={p.url}>
          <img
            className="h-8 w-8 object-cover rounded-full bg-gray-50 ring-2 ring-white"
            src={p.url}
            alt={props.course.title}
          />
        </dd>
      ))}
    </div>
  </dl>
</li>