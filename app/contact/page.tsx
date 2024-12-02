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
    <ContactForm/>
    <p className="mt-3 mb-10">Or email us directly at <a href="mailto:info@adviserelite.com" className="text-[#0079be] underline">info@adviserelite.com</a></p>
    </Container>
  </div>
}