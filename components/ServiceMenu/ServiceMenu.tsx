import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Button,
    BackgroundImage,
    Center,
} from '@mantine/core'
import { link } from 'fs'

// define data for the cards
const data = [
    {
        title: 'Strategic advisory services',
        description: 'Strategy for any focus area, from personal growth and wellbeing to corporate tactics and innovation.',
        link: '/strategic',
    },
    {
        title: 'C-suite executive coaching',
        description: 'Accelerate your career with world-class coaching, customized for your goals and aspirations.',
        link: '/csuite',
    },
    {
        title: 'Breakthrough sessions',
        description: 'Tackle upcoming challenges with a transformative one-off session tailored to your current situation.',
        link: '/breakthrough',
    },
    {
        title: 'Hybrid and custom services',
        description: 'Design a custom solution personalized to your specific needs and preferences.',
        link: '/custom',
    }
]

export default function ServiceMenu () {
    const services = data.map((service) => (
        <Card key={service.title} shadow="md" radius="md" className="bg-white flex flex-col justify-between" padding="md">
            <h2 className="text-[#0079be] font-medium text-xl mb-[10px]">{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.link}>
            <Button bg="#0079be" fullWidth mt="20" size="lg">Learn More</Button>
            </a>
        </Card>
    ))

    return (
    <div className="relative z-1 h-[100vh] flex flex-col align-middle sm:justify-around">
    <BackgroundImage src="greyscalebanner.png" className="absolute inset-0 w-full h-[150vh] sm:h-[140vh] md:h-[130vh] lg:h-[100vh] object-cover">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </BackgroundImage>
    <Center p="xl" className="relative flex flex-col text-center">
    <Container size="xl">
        <h1 className="text-white text-[40px] font-medium">
            Services for every need
        </h1>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mt={50}>
                {services}
        </SimpleGrid>
    </Container>
    </Center>
    </div>
    )
}


