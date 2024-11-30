import { Button, Container, Center } from '@mantine/core'

export default function Bio() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-10">Scott Lund</h1>
        <Center>
        <Container size="xs">
        <img src="/scottlund.png" className="rounded-md mb-5"></img>
        </Container>
        </Center>
        <h1 className="text-slate-600 text-[24px] text-center">C-suite Executive Coach and Strategic Adviser</h1>
        <Center className="flex flex-col md:flex-row">
        <a href="/Scott_Lund_Executive_Coach_Bio_2024.pdf" target="_blank">
        <Button w="300" bg="#0079be" m="20" size="lg">Download full bio (PDF)</Button>
        </a>
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        </Center>
        <p className="mb-1 mt-3">Elevating leaders and lives through coaching is Scott’s passion and purpose. He believes in each leader’s potential for growth and greatness. To fully unlock that potential, his coaching is holistic, strategic, and customized to individual goals and contexts. His coaching goes beyond improving behaviors to identifying and transforming the personal mindsets underlying desired behaviors.</p>
        <p className="mb-1 mt-3">Scott has coached and advised hundreds of senior leaders in achieving extraordinary results. He serves senior executives (C-suite to Director) and teams at elite organizations across multiple industries: Tech, Finance, Healthcare, Services, Private Equity, and other industries. Scott builds strong, collaborative relationships with leaders of all cultural and professional backgrounds by connecting at a human level. He does this with empathy, honesty, curiosity, and a sense of humor.</p>
        <p className="mb-1 mt-3">Unique among coaches, Scott earned his MBA from The Wharton School at UPenn and is a world-class professional with 20+ years of experience in leadership, coaching, and consulting. He served Fortune 100 clients as a Strategy & Transformation consultant (BCG, Deloitte); led a key business unit at Gartner; and held senior leadership roles in Strategy, Finance, and Operations. He is also co-founder of <a className="underline text-[#0079be]" target="_blank" href="https://www.thehumanleadersociety.org/">The Human Leader Society.</a></p>
        <p className="mb-1 mt-3">Scott respects the time leaders invest in their development. He maximizes their return on that investment by helping them simultaneously improve their personal well-being while also applying new mindsets and behaviors as they work on their key business priorities.</p>
        <p className="mb-1 mt-3">Scott is a PCC certified coach through the International Coaching Federation (ICF) and the NeuroLeadership Institute (NLI). He is also Hogan 360 Assessment Certified.</p>
        <p className="mb-1 mt-3">In his personal life, Scott is married and has four young adult children. He resides in the Western U.S. and enjoys family, fitness, photography, and continuous learning.</p>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Client Impact</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3">"Working with Scott led to my best year of personal growth and effectiveness. I’ve become a stronger more assertive leader.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3">“Scott changed the way I think about solving business challenges.  He is truly one of best strategists and problem solvers I know.”</p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
        </div>
    </Container>
}