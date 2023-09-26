import { RichText } from '@graphcms/rich-text-react-renderer'
import { Portfolio } from '../../lib/api'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../accordion'
import { SimpleLayout } from '../simple-layout'


type PortfolioProps = {
  portfolio: Portfolio[]
}

export const PortfolioSection = (props: PortfolioProps) => {

  return (
    <SimpleLayout id="portfolio" title='Portfolio'>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {props.portfolio.sort((a, z) => a.order - z.order).map((feature) => (
                 <Accordion type="multiple" key={feature.title}>
                 <AccordionItem value={feature.title}>
                   <AccordionTrigger >{feature.title}</AccordionTrigger>
                   <AccordionContent>
                     <RichText content={feature.description.raw}/>
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
            ))}
          </dl>
    </SimpleLayout>
  )
}

