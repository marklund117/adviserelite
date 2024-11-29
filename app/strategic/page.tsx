import { Button, Container, Center } from '@mantine/core'

export default function Strategic() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-10">Strategic Advisory Services</h1>
        <p className="mb-3">Scott is here to help you navigate the upper echelons of leadership. Standing outside of your organization's hierarchy, he can serve as an empathetic and honest truth-teller, supporting and challenging you to accelerate your professional and personal success.</p>
        <p className="mb-3">Individual strategy sessions can be tailored to high level long-term planning, detailed tactical decisions, or anything in between. Example focus areas include:</p>
        <ul className="list-disc ml-5">
            <li>Personal Growth Strategy</li>
            <li>Personal Wellbeing Strategy</li>
            <li>Personal Relationships Strategy</li>
            <li>Personal Career Strategy</li>
            <li>Personal Legacy Strategy</li>
            <li>Key Decisions Strategy</li>
            <li>Business Innovation Strategy</li>
            <li>Business Management Strategy</li>
        </ul>
        <p className="mb-1 mt-3">Scott can also help you develop or refine your strategic management framework and decision systems for executing your strategic vision.</p>
        <p className="mb-1 mt-3">Each month of a strategic advisory engagement includes two or three pre-scheduled 50-minute one-on-one sessions via video or telephone (your choice) along with unlimited email and text support (with a 24-hour response time) between sessions. A 3-hour breakthrough session is included in the first month of service and then every subsequent three months (to support quarterly and annual strategic planning and performance assessment).  I.e., a 3-month engagement will include a breakthrough session at the beginning and end of the three months.</p>
        <p className="mb-1 mt-3">Available strategic advisory engagement lengths are 3 months, 6 months, and 12 months.  Strategic advisory services are provided through a retainer arrangement with varying monthly investment levels.</p>
        <Center className="flex flex-col md:flex-row">
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        <Button w="300" bg="#0079be" m="20" size="lg">Contact Us</Button>
        </Center>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Testimonials</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott changed the way I think about solving business challenges.  He is truly one of best strategists and problem solvers I know.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott supported me in navigating several critical discussions with my executive team. I’ve learned to better utilize strategic frameworks in my leadership decision making.”</p>
        </div>
    </Container>
}