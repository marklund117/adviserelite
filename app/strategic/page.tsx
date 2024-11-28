import { Button, Container, Center } from '@mantine/core'

export default function Strategic() {
     return <Container size="xl" className="min-h-[100vh]">
        <h1 className="text-[40px] text-center pt-11 pb-8">Strategic Advisory Services</h1>
        <Center>
        <Button m="20" size="lg">Request a service proposal</Button>
        </Center>
    </Container>
}