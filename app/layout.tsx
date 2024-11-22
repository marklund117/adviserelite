// YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

import './styles/globals.css'
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AppShell, AppShellHeader, AppShellMain, AppShellFooter } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link'
import TripleBar from '../components/TripleBar/TripleBar'

export const metadata = {
  title: 'Adviser Elite',
  description: 'Adviser Elite',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell header={{height: 56}}>
            <AppShellHeader className="bg-slate-600">
              <Link href="/">
              <img className="max-h-[56px]" src="blacklogo.png" alt="logo"></img>
              </Link>
              <Link href="/services">Services</Link>
              <Link href="/proposals">Proposals</Link>
              <Link href="/bio">Bio</Link>
              <Link target="_blank" href="">
              </Link>
              <Link href="/contact">Contact</Link>
              <TripleBar />
            </AppShellHeader>
            <AppShellMain></AppShellMain>
            <AppShellFooter></AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
