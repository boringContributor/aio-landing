import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { SimpleLayout } from '../simple-layout'
import { Portfolio, TextInput } from '../../lib/api'
import { useIsMobile } from '@/lib/utils'


type PortfolioProps = {
  portfolio: Portfolio[]
}

type TabContent = {
  title: string;
  description: TextInput;
}

type Props = {
  tabs: TabContent[];
}

export const FeatureOverview = (props: PortfolioProps) => {

  const isMobile = useIsMobile();

  const tabs = props.portfolio.map(section => {
    return {
      title: section.title,
      description: section.description
    }
  })
  return (
    <SimpleLayout title="Portfolio" id="portfolio">
      {
        isMobile ? <MobileView tabs={tabs} /> : <DesktopView tabs={tabs} />
      }
    </SimpleLayout>
  )
}

const DesktopView = (props: Props) => {
  return (
    <Tab.Group as="div" className="mt-4">
      <div className="flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
          <Tab.List className="-mb-px flex space-x-10">
            {props.tabs.map((section) => (
              <Tab
                key={section.title}
                className={({ selected }) =>
                  clsx(
                    selected
                      ? 'border-gray-500 text-gray-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                  )
                }
              >
                {section.title}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {props.tabs.map((section) => (
          <Tab.Panel key={section.title} className="space-y-16 pt-10 lg:pt-16">
            <div key={section.title} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="mt-6 lg:col-span-5 lg:mt-0">
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                <p className="mt-2 text-sm text-gray-500"><RichText content={section.description.raw} /></p>
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

const MobileView = (props: Props) => {
  return (
    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
      {
        props.tabs.map((feature) => {
          return <div key={feature.title} className="relative">
            <dt className="text-lg font-semibold leading-7 text-gray-900">
              {feature.title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600"><RichText content={feature.description.raw} /></dd>
          </div>
        })
      }
    </dl>
  )
}