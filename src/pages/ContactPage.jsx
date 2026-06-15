import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'

function ContactPage() {
  usePageTitle("Contact Us");
  return (
    <>
        <CommonBanner title={"contact us"} />
        <ContactInfo />
        <ContactForm />
    </>
  )
}

export default ContactPage