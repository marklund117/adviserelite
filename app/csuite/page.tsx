import { Button, Container, Center } from '@mantine/core'

export default function Csuite() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-7">C-suite Executive Coaching</h1>
        <p className="mb-1 mt-3">World-class athletes reach new heights of performance by working with world-class coaches.  The same is true for business leaders and C-suite executives.</p>
        <p className="mb-1 mt-3">Coaching engagements are strategic accelerators that propel you swiftly towards your short-term growth goals while making progress on your long-term aspirations. Though executive coaching often focuses on your top personal development opportunities as a leader, Scott recognizes you are a complex, multifaceted individual who benefits from a holistic approach to supporting your success.</p>
        <p className="mb-1 mt-3">Scott’s approach to coaching is highly customized, employing both consultative and Socratic modes. Unlike coaches that only ask questions and expect you to figure things out on your own, Scott also utilizes the consulting / mentoring side of the coaching spectrum. Once he collaboratively aligns with you on your objectives and the root causes of your challenges, he is direct and prescriptive to enable you to rapidly realize significant improvements in both your professional and personal life.</p>
        <p className="mb-1 mt-3">Example coaching focus areas include:</p>
        <ul className="list-disc ml-5">
            <li>Strategic Management</li>
            <li>Change Leadership</li>
            <li>People Leadership</li>
            <li>Team Performance</li>
            <li>Executive Presence</li>
            <li>Personal Vision and Strategy</li>
            <li>Personal Effectiveness</li>
            <li>Personal Wellbeing</li>
            <li>Work-Life Balance</li>
            <li>Holistic Life Success</li>
        </ul>
        <p className="mb-1 mt-3">Each month of a coaching engagement includes two or three pre-scheduled 50-minute one-on-one sessions via video or telephone (your choice), accompanied by tailored assignments and recommended readings to maximize your progress between sessions.  Unlimited email and text support (with a 24-hour response time) between sessions is also included.</p>
        <p className="mb-1 mt-3">Available coaching engagement lengths:</p>
        <ul className="list-disc ml-5">
            <li>3-months – minimum for new client and great for making significant progress in 1-2 areas</li>
            <li>6-months – ideal for achieving and sustaining transformation in 1-2 areas</li>
            <li>12-months – best for achieving and sustaining transformation in 2-4 areas</li>
        </ul>
        <p className="mb-1 mt-3">Experience has shown that a 3-month time frame is preferred for making meaningful, motivating progress in 1-2 priority areas and for building a strong, collaborative client-coach relationship.  Therefore, Scott encourages new coaching clients to commit to at least three months of consistent coaching for best results.</p>
        <p className="mb-1 mt-3">Note: If helpful to your unique situation, we can also conduct an interview-based 360-degree assessment (by interviewing key stakeholders in your professional and/or personal life).  Investment levels vary depending on the number of stakeholders interviewed.  All 360-degree assessments include a custom report and a debrief of the report.</p>
        <p className="mb-5 mt-3">Coaching services are provided through engagement contracts and/or retainer arrangements with varying monthly investment levels.</p>
        <Center className="flex flex-col md:flex-row">
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        <Button w="300" bg="#0079be" m="20" size="lg">Contact Us</Button>
        </Center>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Testimonials</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott has an amazing ability to listen and ask the right questions. The coaching experience with him significantly shifted my performance as a leader and exceeded my expectations.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3">"Working with Scott led to my best year of personal growth and effectiveness. I’ve become a stronger more assertive leader."</p>
        </div>
    </Container>
}