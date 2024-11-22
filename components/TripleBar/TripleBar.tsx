'use client'
import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'


export default function TripleBar() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    return <Burger opened={opened} onClick={toggle} aria-label={label} />;
  }