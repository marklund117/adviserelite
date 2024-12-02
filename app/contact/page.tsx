// contact page
// import tailwind global CSS
import '../styles/globals.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import { Container } from '@mantine/core'

// here's the main dish
export default function Contact() {
  return <div className="p-4 min-h-[100vh]">
    <Container size="sm">
    <h1 className="text-[40px] font-medium text-center">
            Contact Us
      </h1>
    <p className="mt-3">To inquire about specific strategic advisory and C-suite executive coaching services with Scott, please fill out <a className="underline text-[#0079be]" href="/proposals">this form</a> instead.</p>
    <p className="mt-3">For general inquiries please use the form below or email us directly at <a href="mailto:info@adviserelite.com" className="text-[#0079be] underline">info@adviserelite.com</a></p>
    <ContactForm/>
    <p className="mt-5">Your privacy matters to us.  We won't sell, rent, or give your name or address to anyone.</p>
    </Container>
  </div>
}