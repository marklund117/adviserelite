// contact page
// import tailwind global CSS
import '../styles/globals.css'
import ServiceForm from '../../components/ServiceForm/ServiceForm'
import { Container } from '@mantine/core'

// here's the main dish
export default function Proposals() {
  return <div className="p-4 min-h-[100vh]">
    <Container size="md">
    <h1 className="text-[40px] font-medium text-center">
            Request a Service Proposal
      </h1>
    <p className="mt-3">Please provide the required information below so we can ensure there is a good fit between your requirements and Scott’s services.  If we see a good match, we will send you a link to schedule a brief complimentary exploratory call at your convenience. We will also send additional preparatory questions and/or materials to help ensure the conversation is a valuable use of your time.</p>
    <p className="mt-3">We will reply to your service enquiry within 24-48 hours.</p>
    <ServiceForm />
    <p className="mt-5">Your privacy matters to us.  We won't sell, rent, or give your name or address to anyone.</p>
    <p className="mt-3 mb-10">For general inquiries please use <a className="underline text-[#0079be]" href="/contact">this form</a> instead or email us directly at <a href="mailto:info@adviserelite.com" className="text-[#0079be] underline">info@adviserelite.com</a></p>
    </Container>
  </div>
}