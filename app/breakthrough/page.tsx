import { Button, Container, Center } from '@mantine/core'

export default function Breakthrough() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-7">Breakthrough Sessions</h1>
        <p className="mb-1 mt-3">There are times you are not looking for long-term support or are not ready to commit to a transformation journey.  You may simply need to check your bearings, define your strategy, make a critical decision, prepare for a big event, bolster your inner strength, create momentum, or get unstuck by accessing Scott’s impartial outside perspective and leveraging his experienced, expert guidance.</p>
        <p className="mb-1 mt-3">Breakthrough sessions with Scott are strategic, energizing conversations that deliver clarity on your vision, objectives, drivers, challenges, and options. You’ll also co-create a practical strategic action plan that moves you forward rapidly and successfully.</p>
        <p className="mb-1 mt-3">Sessions are collaborative, focused, efficient, and pragmatic. Scott expertly guides each session with warmth, respect, and light-hearted humor that keeps the tone relaxed and creative.</p>
        <p className="mb-1 mt-3">Pending Scott’s availability, sessions can be scheduled quickly to address urgent needs, with longer sessions typically requiring more lead time.  There will also be pre-work assigned by Scott for all participants (including Scott) to ensure your session’s success.</p>
        <p className="mb-1 mt-3">Session lengths range from 1-6 hours with varying investment levels.</p>
        <Center className="flex flex-col md:flex-row">
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        <Button w="300" bg="#0079be" m="20" size="lg">Contact Us</Button>
        </Center>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Testimonials</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott brings strategic aptitude, business transformation know-how, and an ability to solve complex problems with creative, out-of-the-box thinking.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott helped me create a strategy to access untapped potential in my team.”</p>
        </div>
    </Container>
}