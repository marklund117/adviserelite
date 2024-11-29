// contact page
// import tailwind global CSS
import '../styles/globals.css'
import ContactForm from '../../components/ContactForm/ContactForm'

// here's the main dish
export default function Contact() {
  return <div className="p-4 min-h-[100vh]">
    <ContactForm/>
  </div>
}