// to do - fix z-axis of dropdown menu, narrow nav container
import cx from 'clsx';
import { BackgroundImage, Button, Container, Overlay, Text, Title, Center } from '@mantine/core';

export default function HeroSection() {
  return (
    <div className="relative z-1 h-[100vh] flex flex-col align-middle sm:justify-around">
      <BackgroundImage src="greyscalebanner.png" className="absolute inset-0 w-full h-[100vh] object-cover">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </BackgroundImage>
      <Center p="xl" className="relative flex flex-col text-center">
      <Container size="xl">
        <h1 className="text-white text-[60px] font-bold">
            C-suite Executive Coaching
        </h1>
        <p className="text-[#dddddd] text-[20px] mt-4 mb-4">Navigate your possibilities &#xb7; Unlock your potential &#xb7; Achieve your goals</p>
      </Container>
      <Container size="xl">
        <a href="/services">
        <Button bg="#0079be" w="240" m="20" size="lg">
            Explore Services
        </Button>
        </a>
        <a href="/proposals">
        <Button bg="#0079be" w="240" m="20" size="lg">
            Request a Proposal
        </Button>
        </a>
      </Container>
      </Center>
    </div>
  );
}
