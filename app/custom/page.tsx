import { Button, Container, Center } from '@mantine/core'

export default function Custom() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-7">Hybrid and Custom Services</h1>
        <p className="mb-1 mt-3">Have unique goals or service needs?  Scott can assist you in designing a custom solution that is a fusion of strategic advisory and C-suite coaching services and will be personalized to your specific needs and preferences.</p>
        <p className="mb-1 mt-3">Hybrid and custom services with Scott are provided through a retainer arrangement with investment levels starting at $3K per month and typically have a 3-month minimum engagement length.</p>
        <Center className="flex flex-col md:flex-row">
        <a href="/proposals">
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        </a>
        <a href="/contact">
        <Button w="300" bg="#0079be" m="20" size="lg">Contact Us</Button>
        </a>
        </Center>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Testimonials</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott brings strategic aptitude, business transformation know-how, and an ability to solve complex problems with creative, out-of-the-box thinking.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott helped me create a strategy to access untapped potential in my team.”</p>
        </div>
    </Container>
}