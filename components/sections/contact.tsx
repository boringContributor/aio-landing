import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { SimpleLayout } from '../simple-layout'

export const Contact = () => {
  return (
    <SimpleLayout title='Kontakt'>
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
              <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-red-900" aria-hidden="true" />
              </dt>
              <dd>
                Regengasse 2
                <br />
                93138 Lappersdorf
              </dd>
          </div>
          <div>
          <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-red-900" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-red-900" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
          </div>
          <div>
          <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-red-900" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-red-900" href="mailto:info@aio-gesundheitsmanagement.de">
                    info@aio-gesundheitsmanagement.de
                  </a>
                </dd>
          </div>
        </div>
      </SimpleLayout>
  )
}