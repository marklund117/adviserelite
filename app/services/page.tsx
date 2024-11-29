// services page
// import tailwind global CSS
import '../styles/globals.css'
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu'

// here's the main dish
export default function Services() {
  return <div className="min-h-[100vh] h-[150vh] sm:h-[140vh] md:h-[130vh] lg:h-[100vh]">
  <ServiceMenu/>
  </div>
}