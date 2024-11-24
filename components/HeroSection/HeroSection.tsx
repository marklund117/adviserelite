import cx from 'clsx';
import { BackgroundImage, Button, Container, Overlay, Text, Title, Center } from '@mantine/core';

export default function HeroSection() {
  return (
    <div className="relative z-1 h-[100vh]">
      <BackgroundImage src="greyscalebanner.png" className="absolute inset-0 w-full h-[50vh] sm:h-75vh md:h-[100vh] object-cover">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </BackgroundImage>
      <Center p="xl" className="relative z-10 flex flex-col text-center">
      <Container size="xl">
        <Text size="lg" c="white">
            C-suite Executive Coaching
        </Text>
      </Container>
      <Container size="xl">
        <Button variant="white" size="lg">
            Explore Services
        </Button>
        <Button size="lg">
            Request a Proposal
        </Button>
      </Container>
      </Center>
    </div>
  );
}
