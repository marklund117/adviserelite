import { Button, Container, Center } from '@mantine/core'

export default function Bio() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-10 pb-10">Scott Lund</h1>
        <Center>
        <img src="/scottlund.png" className="rounded-md mb-5"></img>
        </Center>
        <h1 className="text-slate-600 text-[24px] text-center">C-suite Executive Coach and Strategic Adviser</h1>
        <Center className="flex flex-col md:flex-row">
        <a href="/Scott_Lund_Executive_Coach_Bio_2024.pdf" target="_blank">
        <Button w="300" bg="#0079be" m="20" size="lg">Download full bio (PDF)</Button>
        </a>
        <Button w="300" bg="#0079be" m="20" size="lg">Request a service proposal</Button>
        </Center>
        <p className="mb-1 mt-3">Elevating leaders and lives through coaching is Scott’s passion and purpose. He believes in each leader’s potential for growth and greatness. To fully unlock that potential, his coaching is holistic, strategic, and customized to individual goals and contexts. His coaching goes beyond improving behaviors to identifying and transforming the personal mindsets underlying desired behaviors.</p>
        <p className="mb-1 mt-3"></p>
        <p className="mb-1 mt-3"></p>
        <div className="mb-10">
            <h1 className="text-[20px] mb-1 mt-3 text-slate-600">Client Impact</h1>
            <hr className="mb-1 mt-1"></hr>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
            <p className="text-[#0079be] italic mb-1 mt-3"></p>
        </div>
    </Container>
}