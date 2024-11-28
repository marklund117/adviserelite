import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Button,
} from '@mantine/core'
import { link } from 'fs'

// define data for the cards
const data = [
    {
        title: 'Strategic advisory services',
        description: 'This is an example description. Here is some more text to fill space. Wow very cool.',
        link: '/strategic',
    },
    {
        title: 'C-suite executive coaching',
        description: 'This is an example description. Here is some more text to fill space. Wow very cool.',
        link: '/strategic',
    },
    {
        title: 'Breakthrough sessions',
        description: 'This is an example description. Here is some more text to fill space. Wow very cool.',
        link: '/strategic',
    },
    {
        title: 'Hybrid and custom services',
        description: 'This is an example description. Here is some more text to fill space. Wow very cool.',
        link: '/strategic',
    }
]

export default function ServiceMenu () {
    const services = data.map((service) => (
        <Card key={service.title} shadow="md" radius="md" className="bg-white" padding="md">
            <h2 className="text-blue-900 text-xl mb-[10px]">{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.link}>
            <Button fullWidth mt="20" size="lg">Learn More</Button>
            </a>
        </Card>
    ))

    return (
        <Container size="xl">
            <h1 className="text-[40px] text-center pt-11">Services</h1>
            <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl" mt={50}>
                {services}
            </SimpleGrid>
        </Container>
    )
}


