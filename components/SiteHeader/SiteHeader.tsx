'use client'
// imports
import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Link from 'next/link'

// basic links - does not include linkedin
const links = [
  { link: '/services', label: 'Services' },
  { link: '/proposals', label: 'Proposals' },
  { link: '/bio', label: 'Bio' },
];

// header component

export default function SiteHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  const logo = (
    <Link
    href="/"
    onClick={(event) => {
        setActive('/');
    }}
    >
    <img className="h-[24px]" src="blacklogo.png"></img>
    </Link>
  )

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {logo}
        <Group className="justify-self-end" gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer position="top" opened={opened} onClose={toggle}>
            {items}
        </Drawer>
      </Container>
    </header>
  );
}