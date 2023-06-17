import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Title } from '../title'

export const Contact = () => {
  return (
    <div id='kontakt' className="mx-auto max-w-7xl px-6 lg:px-8 my-5">
        <Title title='Kontakt' />
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
      </div>
  )
}


// export const Contact = () => {
//   return (
//     <div id='kontakt' className="relative isolate">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 justify-center items-center content-center">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//                 <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kontakt</h2>
//                 <p className="mt-6 text-lg leading-8 text-gray-600">
//                 Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
//                 integer elementum id sem. Arcu sed malesuada et magna.
//                 </p>
//             </div>
//             <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Address</span>
//                   <BuildingOffice2Icon className="h-7 w-6 text-red-900" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   Regengasse 2
//                   <br />
//                   93138 Lappersdorf
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Telephone</span>
//                   <PhoneIcon className="h-7 w-6 text-red-900" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   <a className="hover:text-red-900" href="tel:+1 (555) 234-5678">
//                     +1 (555) 234-5678
//                   </a>
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Email</span>
//                   <EnvelopeIcon className="h-7 w-6 text-red-900" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   <a className="hover:text-red-900" href="mailto:info@aio-gesundheitsmanagement.de">
//                     info@aio-gesundheitsmanagement.de
//                   </a>
//                 </dd>
//               </div>
//             </dl>

//       </div>
//     </div>
//   )
// }
