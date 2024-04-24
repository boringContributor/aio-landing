import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Contact } from '../../lib/api'
import { SimpleLayout } from '../simple-layout'
import ContactForm from '../contact-form'

type ContactProps = {
  contact: Contact
}

export const ContactSection = (props: ContactProps) => {
  return (
    <SimpleLayout id="kontakt" title='Kontakt'>
      <ContactForm contact={props.contact} />
      </SimpleLayout>
  )
}